var game = require("../game");

test("scoreFrame", () => {
  var frame = [1, 2];
  var expected = 3;
  var actual = game.scoreFrame(frame);
  expect(actual).toBe(expected);
});

test("add all frames", () => {
  var frames = [
    [1, 2],
    [6, 4],
    [5, 4],
    [10, 0],
    [7, 2],
    [10, 0],
    [10, 0],
    [5, 2],
    [7, 0],
    [4, 4]
  ];
  var expected = 83;
  var actual = game.sumOfFrames(frames);
  expect(actual).toBe(expected);
});

test("is spare", () => {
  var frame = [6, 4];
  var expected = true;
  var actual = game.isSpare(frame);
  expect(actual).toBe(expected);
});
