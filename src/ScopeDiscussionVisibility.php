<?php


namespace Leo\ProfileUsersComments;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;
use Psr\Http\Message\ServerRequestInterface;
use Laminas\Diactoros\ServerRequestFactory;

class ScopeDiscussionVisibility
{
    public function __invoke(User $actor, Builder $query): void
    {
          // Use the ServerRequestFactory to create a request object
          $request = ServerRequestFactory::fromGlobals();

        // Get the referer header
        $referer = $request->getHeaderLine('referer');
     
        //Index page
        if ($_SERVER['REQUEST_URI'] === '/') {
            $query->whereNull('discussions.discussions_wall');
        } else {
         
          
        if (preg_match('#/u/([^/]+)#', $referer, $matches)  ||
           preg_match('#/d/([^/]+)#', $referer, $matches) ) {

    
            $query->whereNotNull('discussions.discussions_wall')
            ->orWhereNull('discussions.discussions_wall');
      
        }else if(preg_match('#/u/([^/]+)/wall#', $referer, $matches)){
            $query->whereNotNull('discussions.discussions_wall');
        }else{
            
            $query->whereNull('discussions.discussions_wall');
        }
    }
    
      
    }
}
