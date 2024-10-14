<?php

namespace Leo\ProfileUsersComments\entController;

use Leo\ProfileUsersComments\entController\ProfileUsersCommentsModel;
use Flarum\User\Access\AbstractPolicy;
use Flarum\User\User;

class ProfileUsersCommentsModelPolicy extends AbstractPolicy
{
    public function can(User $actor, string $ability, ProfileUsersCommentsModel $model)
    {
        // See https://docs.flarum.org/extend/authorization.html#custom-policies for more information.
    }
}
