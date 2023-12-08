import BaseballController from "./Controller/BaseballController.js";
class App {
  async play() {
    const baseballController = new BaseballController();
    await baseballController.start();
  }
}

export default App;
