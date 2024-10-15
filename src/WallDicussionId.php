<?php

namespace Leomahdi\FlarumWall;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Flarum\Api\Serializer\DiscussionSerializer;

use Flarum\Discussion\Discussion;

use Flarum\User\User;
class WallDicussionId extends AbstractShowController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = DiscussionSerializer::class;

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        // See https://docs.flarum.org/extend/api.html#api-endpoints for more information.

        $actor = RequestUtil::getActor($request);
        $username = Arr::get($request->getQueryParams(), 'username');
 
        $user = User::where('username', $username)->first();
        /*already hundled by Flarum data:null
        if (!$user) {
            throw new ResourceNotFoundException('No User found for the given Username.');
        }*/
      
            $userID = $user->id; 
            
       
        // Find all discussions with the specified discussion_wall value
        $discussions = Discussion::where('discussions_wall', $userID)->first();
        
      /*already hundled by Flarum data:null
        if (!$discussions) {
           throw new \Flarum\Api\Exception\ResourceNotFoundException('No discussions found for the given discussion_wall ID.');
        }*/

    
     
        return $discussions->id;
 
       
      
    }
}
