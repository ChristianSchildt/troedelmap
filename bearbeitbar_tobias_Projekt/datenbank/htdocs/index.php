<?php
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use Slim\Factory\AppFactory;
    use DI\Container;
    require 'SQLInterface.php';
    require 'vendor/autoload.php';
    $container = new Container();


    $container->set('db', function() {
        $dbhost = 'localhost:3306';
        $dbuser = 'root';
        $dbpass = 'allgemein';
        $db ='troedelmap';
        $dbport = '3306';
        $dsn = 'mysql:host=' . $dbhost . ';port=' . $dbport . ';dbname=' . $db;
        $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::ATTR_CASE => PDO::CASE_NATURAL,
    ];
    try {
    return new PDO($dsn, $dbuser, $dbpass, $options);
    }
    catch(PDOException $e){
        echo "Verbindungsaufbau gescheitert: " . $e->getMessage();
    }
    });

    AppFactory::setContainer($container);
    $app = AppFactory::create();

    $app->options('/{routes:.+}', function ($request, $response, $args) {
        return $response;
    });

    $app->add(function ($request, $handler) {
        $response = $handler->handle($request);
        return $response
                ->withHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
                ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
                ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    });


    $app->get('/test/{name}', function (Request $request, Response $response, array $args){
        $name = $args['name'];
        $response->getBody()->write("Hello, $name");
        return $response;
    });

        /*$app->get(...
            $this->get(’db’);
        );
        
        $app->get('/api/todos', function (Request $request, Response $response, array $args){
            $todoCreator = new ToDoInterface($this->get('db'));
            $todos = $todoCreator->selectTodos()->fetchAll(PDO::FETCH_ASSOC);
            $response->getBody()->write(json_encode($todos));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        });

        $app->delete('/api/todos/{todo_id}', function (Request $request, Response $response, array $args){
            $todo_id = $args["todo_id"];
            if(is_numeric($todo_id)){
                $todoCreator = new ToDoInterface($this->get('db'));
                $todo = $todoCreator->deleteTodo($todo_id)->fetchAll(PDO::FETCH_ASSOC);
                $response->getBody()->write(json_encode($todo));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
            }
            return $response->withStatus(400);
        });

        $app->post('/api/todos', function (Request $request, Response $response, array $args){
            $rawData = $request->getBody();
            $todoCreator = new ToDoInterface($this->get('db'));
            $todo = $todoCreator->insertTodo(json_decode($rawData, true))->fetchAll(PDO::FETCH_ASSOC);
            $response->getBody()->write(json_encode($todo));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        });
        
        */

    /*SQLFunktion sind in SQLInterface.sql*/

        
    $app->run();
?>