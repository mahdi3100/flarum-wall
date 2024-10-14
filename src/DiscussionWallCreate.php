<?php

namespace Leo\ProfileUsersComments;

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
        $discussionsWallValue = $discussionData['attributes']['discussions_wall']; // Or however you set this value
       
        // You can now set the value directly on the discussion model
        $discussionObject->discussions_wall =  $userId;
       }
    }

 
    }
}
