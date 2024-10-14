<?php
namespace Leo\ProfileUsersComments;

use Flarum\User\Access\AbstractPolicy;
use Flarum\User\User;
use Flarum\Discussion\Discussion;

class DiscussionWallPolicy extends AbstractPolicy
{
    public function can(User $actor, string $ability, Discussion $discussion)
    {
        // Check if discussions_wall is null, allowing only such discussions
        if ($discussion->discussions_wall === null) {
            return $this->allow();
        }

        return $this->deny();
    }
}
