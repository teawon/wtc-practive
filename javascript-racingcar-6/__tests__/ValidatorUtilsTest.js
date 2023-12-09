import ValidatorUtils from "../src/Utils/ValidatorUtlis.js";

describe("ValidatorUtils 테스트", () => {
  describe("isNotNull 테스트", () => {
    test("값이 null이 아니면 에러가 발생하지 않는다", () => {
      // given
      const validValue = "test";

      // when
      const action = () =>
        ValidatorUtils.isNotNull(validValue, "[ERROR] 값이 null입니다");

      // then
      expect(action).not.toThrow();
    });

    test("값이 null이면 에러가 발생한다", () => {
      // given
      const nullValue = null;

      // when
      const action = () =>
        ValidatorUtils.isNotNull(nullValue, "[ERROR] 값이 null입니다");

      // then
      expect(action).toThrow("[ERROR] 값이 null입니다");
    });
  });

  describe("isNotOverLength 테스트", () => {
    test("값의 길이가 최대 길이를 초과하지 않으면 에러가 발생하지 않는다", () => {
      // given
      const value = "test";
      const maxLength = 5;

      // when
      const action = () =>
        ValidatorUtils.isNotOverLength(
          value.length,
          maxLength,
          "[ERROR] 길이가 초과되었습니다"
        );

      // then
      expect(action).not.toThrow();
    });

    test("값의 길이가 최대 길이를 초과하면 에러가 발생한다", () => {
      // given
      const value = "testtest";
      const maxLength = 5;

      // when
      const action = () =>
        ValidatorUtils.isNotOverLength(
          value.length,
          maxLength,
          "[ERROR] 길이가 초과되었습니다"
        );

      // then
      expect(action).toThrow("[ERROR] 길이가 초과되었습니다");
    });
  });
});
