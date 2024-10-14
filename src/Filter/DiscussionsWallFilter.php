<?php

namespace Leo\ProfileUsersComments\Filter;

use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;
use Flarum\User\User;

use Flarum\Foundation\ValidationException;
class DiscussionsWallFilter implements FilterInterface
{
    public function getFilterKey(): string
    {
        return 'discussions_wall';
    }

    public function filter(FilterState $query, string $filterValue, bool $negate)
    {
        $user = User::where('username', $filterValue)->first();
       
       
        if ($user) {
      
            // Apply the filter using the user's ID
            $query->getQuery()->where('discussions_wall',4)->first();
        } else {
        
           
            $query->getQuery()->whereNull('id');  // This will result in no records being returned
            return;
            //throw new ValidationException(['error' => 'no thread yet']);
        }
    }
}
