//TESTS PER PROVAR LA API REST AMB SUPERTEST. Instalar previament les dependecies de SUPERTEST (npm i supertest).

const request = require("supertest");
const server = 'http://localhost:3000';

//----------------------------------------------------------------------------------------
///TEST per verificar que la resposta del Endpoint /User es 200 (OK) i rep les capçeleres 'Content-Type', 'application/json; charset=utf-8'

describe('EndPoint /user', () => {
	it('Espera devolver 200 status code i la capçalera Content-Type', async () => {
		request(server)
			.get('/user')
			.expect(200)
			.expect('Content-Type', 'application/json; charset=utf-8')
			.end(function (err, res) {
				if (err) throw err;
			});
	})
});


//----------------------------------------------------------------------------------------
///TEST per verificar que es rep correctament el JSON que retorna el EndPoint /user

const expectedResultUser = {
	"Nom": "Tomas",
	"Edat": "44",
	"URL": "http://localhost:3000/user"
}


describe('EndPoint /user', () => {
	it('Espera devolver el JSON de arriba', async () => {
		request(server)
			.get('/user')
			.expect(expectedResultUser)
			.end(function (err, res) {
				if (err) throw err;
			})

	});
});



//////TEST per verificar que es rep correctament el JSON Pokemon en el EndPoint /pokemon/4 JSON DEL POKEMON 4

const expectedResultPokemon = {
	"name": "charmander",
	"height": 6,
	"weight": 85
}



describe('EndPoint /pokemon', () => {
	it('Espera retornar les dades del pokemon 4 en el EndPoint /pokemon/4', async () => {
		request(server)
			.get('/pokemon/4')
			.expect(200)
			.expect(expectedResultPokemon)
			.end(function (err, res) {
				if (err) throw err;
			});

	});
});



//////TEST per verificar el funcionament de l'EndPoint Upload

describe('EndPoint /upload', () => {
	it('Espero poder pujar un arxiu de imatge OK ', async () => {
		request(server)
			.post('/upload')
			.expect(200)
			.end(function (err, res) {
				if (err) throw err;
			});

	});
});


//////TEST per verificar el funcionament de l'EndPoint Time

describe('EndPoint /Time', () => {
	it('Espero que retorni 401 si no li passo cap credencial.', async () => {
		request(server)
			.post('/time')
			.expect(401)
			.end(function (err, res) {
				if (err) throw err;
			});

	});

	/*
	const data = {
		"username" : "tomas",
		"password" : "123123"
	} 
	it('Espero que retorni 200 si les credencials que li passo son correctes.', async () => {
		request(server)
			.post('/time')
			.auth("tomas","123123","basic")
			.send(data)
			.set('Accept', 'application/json')
            .expect('Content-Type', /json/)
			.expect(200)
			.end(function (err, res) {
				if (err) throw err;
			});
	});
	*/
});
