<?php

namespace Leo\ProfileUsersComments\entController;

use Flarum\Api\Serializer\AbstractSerializer;
use Leo\ProfileUsersComments\entController\ProfileUsersCommentsModel;
use InvalidArgumentException;

class ProfileUsersCommentsModelSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'profile-users-comments-models';

    /**
     * {@inheritdoc}
     *
     * @param ProfileUsersCommentsModel $model
     * @throws InvalidArgumentException
     */
    protected function getDefaultAttributes($model)
    {
        if (! ($model instanceof ProfileUsersCommentsModel)) {
            throw new InvalidArgumentException(
                get_class($this).' can only serialize instances of '.ProfileUsersCommentsModel::class
            );
        }

        // See https://docs.flarum.org/extend/api.html#serializers for more information.

        return [
             'post_id'=>$model->id,
            'user_id' => $model->user_id,
            'user_profile_id' => $model->user_profile_id,
            'post_text' => $model->post_text,
            'created_at' => $model->created_at->toAtomString(),
        ];
    }/*
    public function getAttributes($model)
    {
        return [
            'user_id' => $model->user_id,
            'user_profile_id' => $model->user_profile_id,
            'post_text' => $model->post_text,
            'created_at' => $model->created_at->toAtomString(),
        ];
    }*/
}
