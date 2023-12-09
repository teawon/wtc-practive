import CarRaceValidator from "../CarRaceValidator.js";

class Race {
  #cars;
  #tryCount;
  #raceStatus;

  constructor(cars, tryCount) {
    CarRaceValidator.RaceModel(cars, tryCount);
    this.#cars = cars;
    this.#tryCount = tryCount;
    this.#raceStatus = [];
  }

  play() {
    while (this.#tryCount > 0) {
      this.#cars.forEach((car) => {
        car.tryMoveOrStop();
      });
      this.#saveRaceStatus();
      this.#tryCount--;
    }
  }

  #saveRaceStatus() {
    const result = this.#cars.map((car) => {
      return {
        name: car.getName(),
        place: car.getPlace(),
      };
    });
    this.#raceStatus.push(result);
  }

  getRaceResult() {
    return this.#raceStatus;
  }

  getWinner() {
    const maxPlace = Math.max(...this.#cars.map((car) => car.getPlace()));
    const winners = this.#cars.filter((car) => car.getPlace() === maxPlace);
    return winners.map((winner) => winner.getName());
  }
}

export default Race;
