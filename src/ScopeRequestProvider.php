<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

 namespace Leo\ProfileUsersComments;

 use Leo\ProfileUsersComments\ScopeDiscussionVisibility;

use Flarum\Foundation\AbstractServiceProvider;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Discussion\Discussion;


use Flarum\Discussion\DiscussionRepository;
class ScopeRequestProvider extends AbstractServiceProvider
{ 
   
    public function register(): void
    {
      
    }
    public function boot(Dispatcher $events): void
    {
    
       Discussion::registerVisibilityScoper(new ScopeDiscussionVisibility(), 'view');
    }
}
