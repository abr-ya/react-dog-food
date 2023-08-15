import * as commonUtils from "./common";

describe("Тестируем утилиты проекта", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe(`Тестируем утилиту ${commonUtils.strCut.name}`, () => {
    const loremString =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam et dignissimos aut asperiores tenetur blanditiis voluptatum explicabo earum vitae quae?";

    const strCutSpy = jest.spyOn(commonUtils, "strCut");

    test("strCut успешно обрезает строку", () => {
      expect(commonUtils.strCut(loremString, 10)).toEqual("Lorem ipsu...");
      expect(strCutSpy).toBeCalledTimes(1);
    });

    test("strCut не добавляет многоточие, если оно не нужно", () => {
      expect(commonUtils.strCut("JustText", 10)).toEqual("JustText");
      expect(strCutSpy).toBeCalledTimes(1);
    });
  });
});
