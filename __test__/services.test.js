require('../services/db');

  describe("id", () => {
    test('id = 1550', () => {
      const movie = findById(1550);
			expect(movie.id).toBe(1550)
    });

    test("incorrect id", () => {
      const movie = findById(0);

      expect(movie).toBeUndefined();
    });
  });

  describe("name", () => {
    test('april', () => {
      const movies = findByName("april");

			movies.forEach(movie => {
				expect(movie).toHaveProperty('original_title');
			});
    });

    test("incorrect name", () => {
      const movies = findByName("uktgyhyjb");

      expect(movies.length).toBe(0);
    });
});

  describe("pagination", () => {
    test("pag(10,10)", () => {
      const movies = pagination(10, 10);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBe(10);
    });

    test("incorrect pagination", () => {
      const movies = pagination(0, 0);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBe(0);
    });
  });

  describe("sort by id", () => {
    test("sort key = id order = inc", () => {

			const query = {
				key: 'id',
				order: 'inc'
			};
      const movies = sortBy(query);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBeGreaterThan(1);

      for (let i = 0; i < movies.size - 1; i++)
        expect(movies[i].id < movies[i + 1].id).toBe(true);
    });

    test("sort key = original_title order = inc", () => {

			const query = {
				key: 'original_title',
				order: 'inc'
			};
      const movies = sortBy(query);

      expect(Array.isArray(movies)).toBe(true);
      expect(movies.length).toBeGreaterThan(1);

      for (let i = 0; i < movies.size - 1; i++)
        expect(movies[i].original_title < movies[i + 1].original_title).toBe(true);
    });
  });
