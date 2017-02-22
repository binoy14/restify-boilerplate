import User from "../index";

let res = {};
let req = {};

describe("User Route", () => {
  beforeEach(() => {
    res.send = jest.fn();
  })
  it("should respond for getUser", () => {
    User.getUser(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  it("should respond for getUsers", () => {
    User.getUsers(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  it("should respond for postUser", () => {
    User.postUser(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  it("should respond for putUser", () => {
    User.putUser(req, res);
    expect(res.send).toHaveBeenCalled();
  });
  it("should respond for deleteUser", () => {
    User.deleteUser(req, res);
    expect(res.send).toHaveBeenCalled();
  });
});
