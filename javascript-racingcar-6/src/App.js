import CarRaceController from "./Controller/CarRaceController.js";

class App {
  async play() {
    const carRaceController = new CarRaceController();
    await carRaceController.start();
  }
}

export default App;
