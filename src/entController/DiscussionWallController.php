<?php

namespace Leo\ProfileUsersComments\entController;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Discussion\Discussion;
use Flarum\Http\RequestUtil;
use Psr\Http\Message\ServerRequestInterface;
use Flarum\User\User;
class DiscussionWallController extends AbstractShowController
{
    
    public function handle(ServerRequestInterface $request, $username)
    {
      
        $user = User::where('username', $username)->first();
        if ($user) {
            $userID = $user->id; 
       
       
        // Find all discussions with the specified discussion_wall value
        $discussions = Discussion::where('discussion_wall', $userID)->get();
       
        if ($discussions->isEmpty()) {
            throw new \Flarum\Api\Exception\ResourceNotFoundException('No discussions found for the given discussion_wall ID.');
        }

        // Transform discussions to a JSON API format
        return $this->respondWithDiscussions($discussions);
     }
     throw new \Flarum\Api\Exception\ResourceNotFoundException('No User found for the given Username.');
    
    }

    protected function respondWithDiscussions($discussions)
    {
        return [
            'data' => $discussions->map(function ($discussion) {
                return [
                    'id' => $discussion->id,
               
                    
                    // Add any other fields you want to return
                ];
            })->toArray(),
        ];
       
    }
}
