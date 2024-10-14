<?php

use Flarum\Database\Migration;

return Migration::addColumns('discussions', [
    'discussions_wall' => ['integer', 'nullable' => true],
]);