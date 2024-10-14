<?php

/*
 * This file is part of leo/profile-users-comments.
 *
 * Copyright (c) 2024 leo mahdi.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

//namespace Leo\ProfileUsersComments\;


use Flarum\Extend;
use Leo\ProfileUsersComments\entController\DiscussionWallController;
use Flarum\Discussion\Filter\DiscussionFilterer;
use Flarum\Api\Serializer\DiscussionSerializer;
use Leo\ProfileUsersComments\Filter\DiscussionsWallFilter;
use Flarum\Discussion\Discussion;
use Flarum\Event\DiscussionWillBeSaved;
use Illuminate\Events\Dispatcher;

use Illuminate\Support\Arr;
use Leo\ProfileUsersComments\DiscussionWallCreate;
use Flarum\Subscriptions\Notification\NewPostBlueprint;
use Flarum\Discussion\Event\Saving as DiscussionSaving ;
use Flarum\Discussion\DiscussionRepository;
use Leo\ProfileUsersComments\ScopeDiscussionVisibility;
use Leo\ProfileUsersComments\CustomDiscussionRepository;
use Leo\ProfileUsersComments\ScopeRequestProvider;
use Leo\ProfileUsersComments\DiscussionNotification;


return [

   
    
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
       // ->route('/u/{username}/wall', 'leo.profile-users-comments.wall'),
        
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
        
    new Extend\Locales(__DIR__.'/locale'),

  
 

    ///profile-users-comments/js/src/forum/UserWall.tsx app.request 
   (new Extend\Routes('api'))
   ->get('/wall-discussion-id', 'wall-discussion-id', Leo\ProfileUsersComments\WallDicussionId::class),
   //->get('/wall-discussion/{username}', 'wall-discussion.show', DiscussionWallController::class)


(new Extend\Model(Discussion::class))
->relationship('user', function ($discussion) {
    return $discussion->belongsTo(User::class, 'discussions_wall'); 
}),


//Inject data of discussions_wall when saving a thread
(new Extend\Event())
->listen(DiscussionSaving::class, DiscussionWallCreate::class),
//->listen(Saving::class, ModifyDiscussionQuery::class),
/*
(new Extend\Model(Discussion::class))
->relationship('discussions_wall', function (Builder $query) {
    // Apply the exclusion directly here if needed
    $query->whereNull('discussions_wall');
}),*/

/*
(new Extend\Policy())
->modelPolicy(DiscussionWallPolicy::class , Leo\ProfileUsersComments\DiscussionWallPolicy::class)*/
/*
 // Bind your custom discussion repository
 (new Extend\ServiceProvider())
 ->register(CustomRequestProvider::class),
*/

//for scope to hide THread 
(new Extend\ServiceProvider())
->register(ScopeRequestProvider::class),




/*
 (new Extend\ModelVisibility(Discussion::class))
    ->scope(ScopeDiscussionVisibility::class, 'view')*/
/*
        (new Extend\ModelVisibility(Discussion::class))
        ->scopeAll(function ($actor, Builder $query, string $ability) {

            $query->whereNotNull('discussions.discussions_wall');
        })*/
     //   ->modelPolicy(testpolicy::class, Leo\ProfileUsersComments\testpolicy::class),
//no need to relation ship with user for columnZ

   /*(new Extend\Event())
   ->listen(DiscussionSaving::class, function (DiscussionSaving $event) {
       $discussionData = $event->data;
       $discussion = $event->discussion;

     //thats in case users creating thread on profile
       // Assuming you have the value for discussions_wall
       $userId = $event->actor->id;
      if($userId isset($discussionData['attributes']['discussions_wall']) && $discussionData['attributes']['discussions_wall'] == 1 ){
       $discussionsWallValue = $discussionData['attributes']['discussions_wall']; // Or however you set this value

       // You can now set the value directly on the discussion model
       $discussion->discussions_wall = $discussionsWallValue;
      }
      

            // Now you can use the $userId in your logic
            // For example, you can check or modify the discussion based on the user
            echo "NOT HERE: ".$event->discussion->discussions_wall;

            // Example: Set 'discussions_wall' to the current user's ID
            if ($userId AND isset($event->discussion->discussions_wall)) {
                echo "IM HERE";
                $event->discussion->discussions_wall = $userId;
            }


   }),*/

    // Register the DiscussionsWallFilter
  /*  (new Extend\Filter(DiscussionFilterer::class))
        ->addFilter(DiscussionsWallFilter::class),*/
    //(new Extend\ApiController(DiscussionWallController::class))
    /*
    (new Extend\ApiSerializer(Serializer\DiscussionSerializer::class))
        ->attribute('discussions_wall', function ($serializer, $discussion) {
            return (int) $discussion->discussions_wall;
        }),*/


    ];
/*
    (new Extend\Routes('api'))
        ->get('/profile-users-comments-models', 'profile-users-comments-models.index', Leo\ProfileUsersComments\entController\ListProfileUsersCommentsModelsController::class)
        ->get('/profile-users-comments-models/{id}', 'profile-users-comments-models.show', Leo\ProfileUsersComments\entController\ShowProfileUsersCommentsModelController::class)
        ->post('/profile-users-comments-models', 'profile-users-comments-models.create', Leo\ProfileUsersComments\entController\CreateProfileUsersCommentsModelController::class)
        ->patch('/profile-users-comments-models/{id}', 'profile-users-comments-models.update', Leo\ProfileUsersComments\entController\UpdateProfileUsersCommentsModelController::class)
        ->delete('/profile-users-comments-models/{id}', 'profile-users-comments-models.delete', Leo\ProfileUsersComments\entController\DeleteProfileUsersCommentsModelController::class),

    (new Extend\Policy())
        ->modelPolicy(Leo\ProfileUsersComments\entController\ProfileUsersCommentsModel::class, Leo\ProfileUsersComments\entController\ProfileUsersCommentsModelPolicy::class),
*/