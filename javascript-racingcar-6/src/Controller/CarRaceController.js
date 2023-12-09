import Car from "../Model/Car.js";
import Race from "../Model/Race.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";

class CarRaceController {
  async start() {
    // 자동차 이름 입력받기
    const carsInput = await InputView.readCarNames();

    // 자동차 인스턴스 생성
    const carsArr = carsInput.split(",");
    const cars = carsArr.map((carName) => new Car(carName));

    // 시도할 횟수 입력
    const tryCountInput = await InputView.readTryCount();

    // 경주 진행 및 결과 출력

    const race = new Race(cars, tryCountInput);
    race.play();

    OutputView.printRaceStatus(race.getRaceResult());
    OutputView.printWinner(race.getWinner());
  }
}

export default CarRaceController;
