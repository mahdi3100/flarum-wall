<?php

namespace Leo\ProfileUsersComments;

use Flarum\Discussion\Discussion;
use Flarum\Discussion\DiscussionRepository;

class CustomDiscussionRepository extends DiscussionRepository
{
    public function all($filter = null)
    {
        // Call the parent's method to get all discussions
        $query = parent::all($filter);

        // Modify the query to skip discussions where your_column is not null
        $query->whereNull('discussions_wall');

        return $query->get();
    }
}
