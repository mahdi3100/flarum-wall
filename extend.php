<?php

/*
 * This file is part of leomahdi/flarum-wall.
 *
 * Copyright (c) 2024 leo mahdi.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

//namespace Leomahdi\FlarumWall\;

use Flarum\Extend;
use Flarum\Discussion\Discussion;
use Leomahdi\FlarumWall\DiscussionWallCreate;
use Flarum\Discussion\Event\Saving as DiscussionWallSaving ;
//use Flarum\Discussion\Event\Deleting as DiscussionDeleting ;
use Leomahdi\FlarumWall\ScopeRequestProvider;
use Leomahdi\FlarumWall\WallDicussionId;
return [

   
    
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
       // ->route('/u/{username}/wall', 'leo.flarum-wall.wall'),
        
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
        
    new Extend\Locales(__DIR__.'/locale'),

  
 

    ///flarum-wall/js/src/forum/UserWall.tsx app.request 
   (new Extend\Routes('api'))
   ->get('/wall-discussion-id', 'wall-discussion-id', WallDicussionId::class),


    (new Extend\Model(Discussion::class))
        ->relationship('userwall', function ($discussion) {
            return $discussion->belongsTo(User::class, 'discussions_wall'); 
    }),


    //Inject data of discussions_wall when saving a thread
    (new Extend\Event())
        ->listen(DiscussionWallSaving::class, DiscussionWallCreate::class),

    //for scope to hide THread 
    (new Extend\ServiceProvider())
        ->register(ScopeRequestProvider::class),

    /* Delete is not working properly on normal posts ! 
    (new Extend\Event())
        ->listen(DiscussionDeleting::class, DiscussionWallDelete::class), */

    




    ];
