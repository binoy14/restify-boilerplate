import User from "./users";

const routes = (server) => {
  server.get("/", (req, res) => {
    res.send("Hello from restify boilterplate");
  });

  server.get("/user", User.getUsers);
  server.get("/user/:id", User.getUser);
  server.post("/user", User.postUser);
  server.put("/user/:id", User.putUser);
  server.del("/user/:id", User.deleteUser);
};

export default routes;
