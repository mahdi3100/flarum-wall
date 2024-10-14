<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

 namespace Leo\ProfileUsersComments;

 use Leo\ProfileUsersComments\ScopeDiscussionVisibility;
use Flarum\Discussion\Event\Renamed;
use Flarum\Foundation\AbstractServiceProvider;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Discussion\Discussion;


use Flarum\Discussion\DiscussionRepository;
class CustomRequestProvider extends AbstractServiceProvider
{ 
   
    public function register(): void
    {
        // Only use the register method to bind services if needed
    }
    public function boot(Dispatcher $events): void
    {
    
      
        /*
        $events->subscribe(DiscussionMetadataUpdater::class);
        $events->subscribe(UserStateUpdater::class);

        $events->listen(
            Renamed::class,
            DiscussionRenamedLogger::class
        );*/

       Discussion::registerVisibilityScoper(new ScopeDiscussionVisibility(), 'view');
    }
}
