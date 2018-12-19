const controllers = require('../controllers/movies');
require('../services/db');

describe("controllers", () => {

  test("mock test 'id'", () => {
    const send = jest.fn();
    const req = { params: { id: 603 } };
    const res = { send };

    controllers.findById(req, res);

    expect(send.mock.calls).toHaveLength(1);
    expect(send).toBeCalledWith(services.findById(335983));
  });

  test("mock test 'name'", () => {
    const send = jest.fn();
    const req = { params: { title: 'matrix' } };
    const res = { send };

    controllers.findByName(req, res);

    expect(send.mock.calls.length).toBe(1);
    expect(send).toBeCalledWith(services.findByName('matrix'));
  });

  test("mock test 'pagination'", () => {
    const send = jest.fn();
    const req = { query: { offset: 1, limit: 10 } };
    const res = { send };

    controllers.pagination(req, res);

    expect(send.mock.calls.length).toBe(1);
    expect(send).toBeCalledWith(services.pagination(req));
  });

  test("mock test 'sort by id'", () => {
    const send = jest.fn();
    const req = {
      query: { key: "id", order: 'inc' }
    };
    const res = { send };

    controllers.sort(req, res);

    expect(send.mock.calls.length).toBe(1);
    expect(send).toBeCalledWith(services.sortBy(req));
  });

});