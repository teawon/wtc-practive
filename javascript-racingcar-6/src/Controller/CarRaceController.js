import Car from "../Model/Car.js";
import Race from "../Model/Race.js";
import { Console } from "@woowacourse/mission-utils";

class CarRaceController {
  async start() {
    // 자동차 이름 입력받기
    const carsInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,) 기준으로 구분)"
    );

    // 자동차 인스턴스 생성
    const carsArr = carsInput.split(",");
    const cars = carsArr.map((carName) => new Car(carName));

    // 시도할 횟수 입력
    let tryCountInput = await Console.readLineAsync(
      "시도할 횟수는 몇회인가요?\n"
    );

    // 경주 진행 및 결과 출력

    const race = new Race(cars, tryCountInput);
    race.play();

    this.#printRaceStatus(race.getRaceResult());
    this.#printWinner(race.getWinner());
  }

  #printRaceStatus(raceStatus) {
    Console.print("실행 결과");
    raceStatus.forEach((status) => {
      status.forEach((car) => {
        Console.print(`${car.name} : ${"-".repeat(car.place)}\n`);
      });
    });
  }

  #printWinner(winners) {
    const winnderNames = winners.join(", ");
    Console.print(`최종 우승자 : ${winnderNames}\n`);
  }
}

export default CarRaceController;
