import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printRaceStatusInit() {
    Console.print("실행 결과");
  },

  printRaceStatus(raceStatus) {
    this.printRaceStatusInit();
    raceStatus.forEach((status) => {
      status.forEach((car) => {
        Console.print(`${car.name} : ${"-".repeat(car.place)}`);
        this.printLine();
      });
    });
  },

  printWinner(winners) {
    const winnderNames = winners.join(", ");
    Console.print(`최종 우승자 : ${winnderNames}`);
    this.printLine();
  },

  printLine() {
    Console.print("\n");
  },
};

export default OutputView;