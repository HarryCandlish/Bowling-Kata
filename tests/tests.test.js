var game = require("../game");
test("scoreFrame", () => {
  var frame = [1, 2];
  var expected = 3;
  var actual = game.scoreFrame(frame);
  expect(actual).toBe(expected);
});
