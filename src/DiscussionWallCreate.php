<?php

namespace Leomahdi\FlarumWall;

use Flarum\Discussion\Event\Saving as DiscussionSaving;
use Flarum\User\User;
use Flarum\Discussion\Discussion;


class DiscussionWallCreate
{
    public function handle(DiscussionSaving $event)
    {
      
     
        $discussionObject = $event->discussion;
        $discussionData = $event->data;
        $userId = $event->actor->id;
      
     
       if($userId && isset($discussionData['attributes']['discussions_wall']) ){
       
        $discussion = Discussion::where('discussions_wall', $userId)->first();
        if(!$discussion){
        $discussionsWallValue = $discussionData['attributes']['discussions_wall']; 
       
        $discussionObject->discussions_wall =  $userId;
       }
    }

 
    }
}
