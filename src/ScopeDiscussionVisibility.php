<?php


namespace Leo\ProfileUsersComments;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;
use Psr\Http\Message\ServerRequestInterface;
use Laminas\Diactoros\ServerRequestFactory; // Flarum uses Diactoros for PSR-7 request

class ScopeDiscussionVisibility
{
    public function __invoke(User $actor, Builder $query): void
    {
          // Use the ServerRequestFactory to create a request object
          $request = ServerRequestFactory::fromGlobals();

            // Get the referer header
        $referer = $request->getHeaderLine('referer');
     
        if ($_SERVER['REQUEST_URI'] === '/') {
            
            // The user is visiting the root URL
            $query->whereNull('discussions.discussions_wall');
        } else {
         
      //  if (preg_match('#/u/([^/]+)/wall#', $referer, $matches)) {
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
        /*
        if ($actor->cannot('viewForum')) {
            $query->whereRaw('FALSE');

            return;
        }
*/
        // Hide private discussions by default.
       // $query->where('discussions.discussions_wall', NULL);
      
      
    }
}
