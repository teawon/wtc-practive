import Car from "../Model/Car.js";
import Race from "../Model/Race.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import CarRaceValidator from "../CarRaceValidator.js";
import { MESSAGE, RACE_CAR } from "../constants.js";
class CarRaceController {
  async start() {
    const cars = await this.#getCars();
    const tryCount = await this.#getTryCount();

    this.#playRace(cars, tryCount);
  }

  async #getCars() {
    const carsInput = await InputView.readCarNames();
    CarRaceValidator.carInput(carsInput);

    const carsArr = carsInput.split(MESSAGE.carsSeparator);
    const cars = carsArr.map((carName) => new Car(carName));
    return cars;
  }

  async #getTryCount() {
    const tryCountInput = await InputView.readTryCount();
    CarRaceValidator.tryCountInput(tryCountInput);

    return tryCountInput;
  }

  #playRace(cars, tryCount) {
    const race = new Race(cars, tryCount);
    race.play();

    this.#printResult(race);
  }

  #printResult(race) {
    OutputView.printRaceStatus(race.getRaceResult());
    OutputView.printWinner(race.getWinner());
  }
}

export default CarRaceController;
