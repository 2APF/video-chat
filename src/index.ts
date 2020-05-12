import { Server } from "./server";

const server = new Server();

server.listen(port => {
  console.log(`Server is listeing on http://localhost:${port}`);
});