<?php

namespace Leo\ProfileUsersComments\entController;

use Flarum\Api\Controller\AbstractCreateController;
use Flarum\Http\RequestUtil;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Leo\ProfileUsersComments\entController\CreateProfileUsersCommentsModel;
use Leo\ProfileUsersComments\entController\ProfileUsersCommentsModelSerializer;

class CreateProfileUsersCommentsModelController extends AbstractCreateController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = ProfileUsersCommentsModelSerializer::class;

    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }


    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        // See https://docs.flarum.org/extend/api.html#api-endpoints for more information.

        $actor = RequestUtil::getActor($request);
        $data = Arr::get($request->getParsedBody(), 'data', []);
        
        $model = $this->bus->dispatch(
            new CreateProfileUsersCommentsModel($actor, $data)
        );
        
        return $model; 
    }
}
