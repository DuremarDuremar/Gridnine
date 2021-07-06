import data from "./flights.json";
export default class Server {
  getServer() {
    return new Promise((resolve) => {
      resolve(data);
    });
  }
}
