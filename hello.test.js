const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola Mundo, soy Daniel Garay, chileno desde Republica Dominicana!!");
  });
});
