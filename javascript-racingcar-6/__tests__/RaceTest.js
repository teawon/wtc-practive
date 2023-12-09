import Race from "../src/Model/Race.js";
import Car from "../src/Model/Car.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("Race 모델 테스트", () => {
  test("경기를 진행후 결과를 반환한다", () => {
    // given
    const cars = [new Car("test1"), new Car("test2")];
    const MOVE = 4;
    const STOP = 3;
    const randoms = [MOVE, STOP, MOVE, MOVE];
    mockRandoms([...randoms]);
    const race = new Race(cars, 2);

    // when

    race.play();
    const reacResult = race.getRaceResult();

    // then
    expect(reacResult).toEqual([
      [
        {
          name: "test1",
          place: 1,
        },
        {
          name: "test2",
          place: 0,
        },
      ],
      [
        {
          name: "test1",
          place: 2,
        },
        {
          name: "test2",
          place: 1,
        },
      ],
    ]);
  });

  test("경기를 진행후 우승자 정보를 반환한다", () => {
    // given
    const cars = [new Car("test1"), new Car("test2"), new Car("test3")];
    const MOVE = 4;
    const STOP = 3;
    const randoms = [MOVE, STOP, MOVE];
    mockRandoms([...randoms]);
    const race = new Race(cars, 1);

    // when

    race.play();
    const winner = race.getWinner();

    // then
    expect(winner).toEqual(["test1", "test3"]);
  });
});
