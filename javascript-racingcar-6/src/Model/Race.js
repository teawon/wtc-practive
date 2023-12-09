class Race {
  #cars;
  #tryCount;
  #raceStatus;

  constructor(cars, tryCount) {
    this.#validator(cars);
    this.#cars = cars;
    this.#tryCount = tryCount;
    this.#raceStatus = [];
  }

  #validator(cars) {
    if (cars.length === 0) {
      throw new Error("[ERROR] 1개 이상의 자동차가 경기에 참여해야합니다");
    }
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
