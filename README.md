#CRUD API
1. En este proyecto se vera un MVC(modelo vista y controlador) de un crud de usuarios:
- obtener usuarios
- obtener usuarios por un id
- crear un usuario

2. En base al modelo MVC, se crearon 3 archivos
    1. users.controllers.js
    2. users.services.js
    3. users.router.js
3. Recibimos los siguientes verbos en las rutas:
    1. /users 
    
        1. GET → get /users
        Al hacer esta peticion deberas de retornar todos los usuarios
        2. POST → post /users
        Al hacer esta peticion, manejaras el req del cliente y crearas un nuevo usuario
    2. /users/:id
        1. GET → get /users/:id
        Al hacer esta petición deberas retornar el usuario con el ID en especifico que recibes desde parametros
4. En la base de datos ficticia, se almacena un arreglo de objetos, los objetos de los usuarios deberan tener lo siguiente:
    
    ```jsx
    {
    	id: 1,
    	first_name: 'string',
    	last_name: 'string',
    	email: 'string',
    	password: 'string',
    	birthday: 'YYYY/MM/DD'
    }
    ```
