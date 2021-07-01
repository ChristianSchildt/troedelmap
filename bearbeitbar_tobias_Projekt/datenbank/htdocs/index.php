<?php
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Psr\Http\Message\ResponseInterface as Response;
    use Slim\Factory\AppFactory;
    use DI\Container;
    require 'SQLInterface.php';
    require 'vendor/autoload.php';

    $container = new Container();

    $container->set('db', function() {
        $dbhost = 'localhost';
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

        $app->get('/api/user', function (Request $request, Response $response, array $args){
            $sqlinterface = new SQLInterface($this->get('db'));
            $user = $sqlinterface->get_user();
            $response->getBody()->write(json_encode($user));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        });

        $app->post('/api/user/add', function(Request $request, Response $response, array $args){
            $rawData = $request->getBody();
            $data = json_decode($rawData, false);
            $sqlinterface = new SQLInterface($this->get('db'));
            $user = $sqlinterface->add_user($data->bname, $data->email, $data->passwort);
            $response->getBody()->write(json_encode($product));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        });
        
        $app->get('/api/products', function (Request $request, Response $response, array $args){
            $sqlinterface = new SQLInterface($this->get('db'));
            $products = $sqlinterface->get_product();
            $response->getBody()->write(json_encode($products));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        });

        $app->post('/api/products/add', function (Request $request, Response $response, array $args){
            $rawData = $request->getBody();
            $data = json_decode($rawData, false);
            $sqlinterface = new SQLInterface($this->get('db'));
            $product = $sqlinterface->add_product($data->pname, $data->beschreibung, $data->pname, $data->preis, $data->strasse, $data->hausnr, $data->plz, $data->ort, $data->bild, $data->uID);
            $response->getBody()->write(json_encode($product));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        });

        $app->get('/api/userdata', function (Request $request, Response $response, array $args){
            $sqlinterface = new SQLInterface($this->get('db'));
            $userdata = $sqlinterface->get_userdata();
            $response->getBody()->write(json_encode($user));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        });

        $app->post('/api/userdata/add', function(Request $request, Response $response, array $args){
            $rawData = $request->getBody();
            $data = json_decode($rawData, false);
            $sqlinterface = new SQLInterface($this->get('db'));
            $userdata = $sqlinterface->add_userdata($data->strasse, $data->plz, $data->ort, $data->telefon);
            $response->getBody()->write(json_encode($product));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        });

        $app->put('/api/userUpdate/{userid}', function(Request $request, Response $response, array $args)
        {
            $userID=$args["userID"];
            if(is_numeric($userID)){
                $updateCreator=new SQLInterface($this->get('db'));
                $update=$updateCreator->updateUser($data->strasse, $data->plz, $data->ort, $data->telefon);
                $response->getBody()->write(json_encode($update));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
            }
        });

        $app->put('/api/productUpdate/{productid}', function(Request $request, Response $response, array $args)
        {
            $productID=$args["productID"];
            if(is_numeric($productID)){
                $updateCreator=new SQLInterface($this->get('db'));
                $update=$updateCreator->updateAnzeige($data->strasse, $data->plz, $data->ort, $data->telefon);
                $response->getBody()->write(json_encode($update));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
            }
        })

		$app->get('/api/todos', function (Request $request, Response $response, array $args){
            $todoCreator = new SQLInterface($this->get('db'));
            $todos = $todoCreator->selectTodos()->fetchAll(PDO::FETCH_ASSOC);
            $response->getBody()->write(json_encode($todos));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        });
        
        $app->delete('/api/todos/{todo_id}', function (Request $request, Response $response, array $args){
            $todo_id = $args["todo_id"];
            if(is_numeric($todo_id)){
                $todoCreator = new SQLInterface($this->get('db'));
                $todo = $todoCreator->deleteTodo($todo_id)->fetchAll(PDO::FETCH_ASSOC);
                $response->getBody()->write(json_encode($todo));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
            }
            return $response->withStatus(400);
        });
        
        $app->post('/api/todos', function (Request $request, Response $response, array $args){
            $rawData = $request->getBody();
            $todoCreator = new SQLInterface($this->get('db'));
            $todo = $todoCreator->insertTodo(json_decode($rawData, true))->fetchAll(PDO::FETCH_ASSOC);
            $response->getBody()->write(json_encode($todo));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
        });
        
        

    /*SQLFunktion sind in SQLInterface.sql*/

        
    $app->run();
?>