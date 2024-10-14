<?php

namespace Leo\ProfileUsersComments\entController;

use Flarum\Foundation\AbstractValidator;

class ProfileUsersCommentsModelValidator extends AbstractValidator
{
    /**
     * {@inheritdoc}
     */
    protected $rules = [
        // See https://laravel.com/docs/8.x/validation#available-validation-rules for more information.
        
        //no need as long as i am retrieving ID of profile user !
        'user_profile_id' => 'required|string|exists:users,username',
        
        
        'post_text' => 'required|string|min:3',
    
    ];
}
