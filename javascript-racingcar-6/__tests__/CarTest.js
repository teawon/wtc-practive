import Car from "../src/Model/Car.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("Car 모델 테스트", () => {
  test("이름을 입력받으면 해당 이름과 0의 위치를 가진 인스턴스가 생성된다", () => {
    // given
    const name = "test";

    // when
    const car = new Car(name);

    // then
    expect(car.getName()).toBe(name);
    expect(car.getPlace()).toBe(0);
  });

  test("잘못된 이름이 입력된다면 에러가 발생한다", () => {
    // given
    const longName = "abcdefg";
    const nullName = "";

    // when
    const badAction1 = () => {
      new Car(longName);
    };
    const badAction2 = () => {
      new Car(nullName);
    };

    // then
    expect(badAction1).toThrow("[ERROR] 이름이 5자를 초과합니다");
    expect(badAction2).toThrow("[ERROR] 이름이 존재하지 않습니다");
  });

  test("4이상의 값이 나오면 위치를 이동한다", () => {
    // given
    const MOVE = 4;
    const STOP = 3;
    const randoms = [MOVE, STOP];
    mockRandoms([...randoms]);

    // when
    const moveCar = new Car("test");
    const stopCar = new Car("test");
    moveCar.tryMoveOrStop();
    stopCar.tryMoveOrStop();

    // then
    expect(moveCar.getPlace()).toBe(1);
    expect(stopCar.getPlace()).toBe(0);
  });
});
