import BaseballController from "./Controller/BaseballController";
class App {
  async play() {
    const baseballController = new BaseballController();
    await baseballController.start();
  }
}

export default App;
