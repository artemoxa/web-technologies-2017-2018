const request = require('supertest');
const app = require('../app');

describe("Integration test", () => {
  test("GET /movies", done => {
    request(app)
      .get("/movies")
      .then(response => {
        const movies = response.body;

        movies.forEach(movie => {
          expect(movie).toHaveProperty('original_title');
        });
			});
			done();
	});

	test("GET /sort?order=inc&key=id", done => {
    request(app)
      .get("/sort?order=inc&key=id")
      .then(response => {
        const movies = response.body;

        for (let i = 0; i < movies.size - 1; i++)
          expect(movies[i].id < movies[i + 1].id).toBe(true);

        done();
      });
	});

	test("GET /sort?order=dec&key=id", done => {
    request(app)
      .get("/sort?order=dec&key=id")
      .then(response => {
        const movies = response.body;

        for (let i = 0; i < movies.size - 1; i++)
          expect(movies[i].id < movies[i + 1].id).toBe(false);

        done();
      });
	});

	test("GET /sort?order=inc&key=original_title", done => {
    request(app)
      .get("/sort?order=inc&key=original_title")
      .then(response => {
        const movies = response.body;

        for (let i = 0; i < movies.size - 1; i++)
          expect(movies[i].original_title < movies[i + 1].original_title).toBe(true);

        done();
      });
	});

	test("GET /sort?order=dec&key=original_title", done => {
    request(app)
      .get("/sort?order=dec&key=original_title")
      .then(response => {
        const movies = response.body;

        for (let i = 0; i < movies.size - 1; i++)
          expect(movies[i].original_title < movies[i + 1].original_title).toBe(false);

        done();
      });
	});

	test("GET /sort?order=inc&key=adult", done => {
    request(app)
      .get("/sort?order=inc&key=adult")
      .then(response => {
        const movies = response.body;

        for (let i = 0; i < movies.size - 1; i++)
          expect(movies[i].adult <= movies[i + 1].adult).toBe(true);

        done();
      });
	});

	test("GET /sort?order=inc&key=popularity", done => {
    request(app)
      .get("/sort?order=inc&key=popularity")
      .then(response => {
        const movies = response.body;

        for (let i = 0; i < movies.size - 1; i++)
          expect(movies[i].popularity < movies[i + 1].popularity).toBe(true);

        done();
      });
	});

	test("GET /sort?order=dec&key=popularity", done => {
    request(app)
      .get("/sort?order=dec&key=popularity")
      .then(response => {
        const movies = response.body;

        for (let i = 0; i < movies.size - 1; i++)
          expect(movies[i].popularity < movies[i + 1].popularity).toBe(false);

        done();
      });
	});


	test("GET /name/matrix", done => {
    request(app)
      .get("/name/matrix")
      .then(response => {
				const movies = response.body;
				let result;
        movies.forEach(movie => {
					result = movie.original_title.toLowerCase().match(/matrix/i);
					expect(result[0]).toBe('matrix');
          expect(movie).toHaveProperty('original_title');
          expect(movie).toHaveProperty('id');
          expect(movie).toHaveProperty('adult');
          expect(movie).toHaveProperty('popularity');
        });

        done();
      });
	});
	

	test("GET /id/603", done => {
    request(app)
      .get("/id/603")
      .then(response => {
				const movie = response.body;
				
				expect(movie.id).toBe(603);
        expect(movie).toHaveProperty('original_title');
        expect(movie).toHaveProperty('id');
        expect(movie).toHaveProperty('adult');
        expect(movie).toHaveProperty('popularity');

        done();
      });
	});

	test("GET /id/-3", done => {
    request(app)
      .get("/id/-3")
      .then(response => {

				expect(response.statusCode).toBe(400);

        done();
      });
	});

	test("GET /name/", done => {
    request(app)
      .get("/name/")
      .then(response => {

				expect(response.statusCode).toBe(404);

        done();
      });
	});
	
	test("GET /pagination?offset=1&limit=10", done => {
    request(app)
      .get("/pagination?offset=1&limit=10")
      .then(response => {

        const movies = response.body;

				expect(movies.length).toBe(10);
				
        movies.forEach(movie => {
          expect(movie).toHaveProperty('original_title');
          expect(movie).toHaveProperty('id');
          expect(movie).toHaveProperty('adult');
          expect(movie).toHaveProperty('popularity');
        });

        done();
      });
  });
	

});