Entrega 4.1: Node REST Server:  Crearem una API REST de resposta ràpida. 

INSTRUCCIONS PER FER FUNCIONAR EL SERVIDOR.

1º: Instalar les dependècies del projecte. Per fer això, obrim la terminal, ens ubiquem dins de la carpeta Entrega 4.1\app i escribim:
"npm install"

2º: Arrancar el servidor, escribint per la terminal: "
node app.js"  
(Hem de situar-nos abans dins la carpeta "Entrega 4.1\app")


  Llista d'EndPoints:

     "/user": GET -> retorna un JSON amb el teu nom, edat i l'URL des d'on es fa la petició.
     
     "/upload": POST -> puja al servidor un arxiu de tipus png/jpg/gif amb una petició POST i que retorni un missatge d'error en cas que l'extensió de l'arxiu no coincideixi amb aquestes.
     
     "/time": POST -> rep per POST com a paràmetre un JSON amb el nom d'usuari i retorna un objecte JSON que conté l'hora i data actual. Inclou un middleware que afegeix la capçalera Cache-control: no-cache. Habilita CORS en les respostes mitjançant Express.
     Afegeix un middleware a l'endpoint anterior que retorni un HTTP Status 401 - Unauthorized si la capçalera de la petició no conté autenticació bàsica (usuari/ària i contrasenya).
     
     "/pokemon/xx": GET -> retorna un JSON amb el nom del Pokémon, alçada i pes, en la API Pokémon, segons el ID (/xx) que l'hem passat.

Per provar els endpoints, podem obrim l'aplicació POSTMAN. I executar els EndPoints.
He deixat la Col.lecció de proves de Postman en el fitxer "TEST POSTMAN.postman_collection", es pot obrir directamente aquest fitxer amb Postman per carregar ràpidament els Tests preparats.

GET  -> http://localhost:3000/user
POST -> http://localhost:3000/upload      
POST -> http://localhost:3000/time   
GET  -> http://localhost:3000/pokemon/5  

I també es poden executar els TESTS, dins de la carpeta __tests__  , obrim una terminal i executem:

npx jest app.test.js




-----------------------------------------------------------------------------------------------------



# Node Initial Project

### Project Structure

Main structure of node.js project. Folders / files:

- <b>\_\_tests__</b>. Tests folder. See [Jest Docs](https://jestjs.io/es-ES/docs/configuration) and [Chai Docs](https://www.chaijs.com/)
- <b>app</b>:
    - <b>config</b>
    - <b>controllers</b>
    - <b>middlewares</b>
    - <b>models</b>
    - <b>routes</b>
    - <b>helpers</b>
    - <b>app.js</b>. Entry point.
- <b>package.json</b>.
- <b>.env</b>. Environment descriptor. See [dotenv doc](https://www.npmjs.com/package/dotenv).

Extras:
- <b>.eslintrc</b>. Linter JS, static code analyzer. See [EsLint Docs](https://eslint.org/docs/user-guide/configuring/configuration-files).
- <b>.prettierignore</b>. Code formatter. See [Prettier Config](https://prettier.io/docs/en/configuration.html) and [Prettier Ignore](https://prettier.io/docs/en/ignore.html).
- <b>.ecosystem.config.js</b>. Process Manage at runtime. See [PM2 Docs](https://pm2.keymetrics.io/).

### Import project for use with Visual Studio Code

Follow the steps below:
* Clone the project from the Github Platform. Execute:
  ```
  git clone [url project]
  ```
* Open the project downloaded.
  ![Open Project](img/VSC_open.png)


### Import project for use with WebStorm

Follow the steps below:
* Clone the project from the Github Platform. Execute:
  ```
  git clone [url project]
  ```
* Open the project downloaded.
![Open Project](img/webstorm_open.png)


### Utilities

* [Node Developers Guide](https://nodejs.dev/learn)
* **.gitignore file** configuration. See [Official Docs](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files).
* **Git branches**. See [Official Docs](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
