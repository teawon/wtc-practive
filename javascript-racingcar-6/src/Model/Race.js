class Race {
  #cars;

  constructor(cars) {
    this.#validator(cars);
    this.#cars = cars;
  }

  #validator(cars) {
    if (cars.length === 0) {
      throw new Error("[ERROR] 1개 이상의 자동차가 경기에 참여해야합니다");
    }
  }
  play() {
    this.#cars.forEach((car) => {
      car.tryMoveOrStop();
    });
  }

  getRaceStatus() {
    return this.#cars?.map((car) => {
      return {
        name: car.getName(),
        place: car.getPlace(),
      };
    });
  }
}

export default Race;
