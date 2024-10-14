<?php

namespace Leo\ProfileUsersComments\entController;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;
use Leo\ProfileUsersComments\entController\ProfileUsersCommentsModel;

class ProfileUsersCommentsModelRepository
{
    /**
     * @return Builder
     */
    public function query()
    {
        return ProfileUsersCommentsModel::query();
    }

    /**
     * @param int $id
     * @param User $actor
     * @return ProfileUsersCommentsModel
     */
    public function findOrFail($id, User $actor = null): ProfileUsersCommentsModel
    {
        return ProfileUsersCommentsModel::findOrFail($id);
    }


    /**
     * Find user ID by username.
     * 
     * @param string $username
     * @return int|null
     */
    public function getUserIdByUsername(string $username): ?int
    {
        $user = User::where('username', $username)->first();

        return $user ? $user->id : null;
    }
}
