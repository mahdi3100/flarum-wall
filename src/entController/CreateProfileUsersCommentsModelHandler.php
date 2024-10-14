<?php

namespace Leo\ProfileUsersComments\entController;

use Illuminate\Support\Arr;
use Leo\ProfileUsersComments\entController\ProfileUsersCommentsModelRepository;
use Leo\ProfileUsersComments\entController\ProfileUsersCommentsModelValidator;
use Flarum\User\Exception\NotFoundException;
use Flarum\Discussion\Discussion;

class CreateProfileUsersCommentsModelHandler
{
    /**
     * @var ProfileUsersCommentsModelRepository
     */
    protected $repository;

    /**
     * @var ProfileUsersCommentsModelValidator
     */
    protected $validator;

    public function __construct(ProfileUsersCommentsModelRepository $repository, ProfileUsersCommentsModelValidator $validator)
    {
        $this->repository = $repository;
		$this->validator = $validator;
    }

    public function handle(CreateProfileUsersCommentsModel $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        //$actor->assertCan('...');
       
        // ...
         // Validate the data
         $this->validator->assertValid($data);

         $username = Arr::get($data, 'user_profile_id');
         $userId = $this->repository->getUserIdByUsername($username);
         $discussion = Arr::get($data, 'discussion');
         echo"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm";
         print_r($discussion);
            if (!$userId) {
    
                throw new NotFoundException("User with username '$username' not found.");
            }

            /*
          // Now create a new comment entry
         $model = $this->repository->query()->create([
             'user_id' => $actor->id, // Admin's user ID (actor)
             'user_profile_id' => $userId, // Profile user ID
             'post_text' => Arr::get($data, 'post_text'), // Comment text
         ]); 
           return $model;*/
      
          
      
// Create the discussion
$discussion = Discussion::start([
    'title' => $user->username . "'s Profile Wall", // Dynamic title
    'user_id' => $user->id, // Author of the discussion
    'visibility' => 'public', // Example additional attribute
    // Add more attributes as needed
]);

// Save the discussion
$discussion->save();

/*
$post = CommentPost::reply(
    $discussion->id,
    $user->id,
    'Welcome to my profile wall!' // Initial post content
);

// Save the first post
$post->save();*/

return $discussion; // Return the created discussion object
        //return $model;
    }
}
