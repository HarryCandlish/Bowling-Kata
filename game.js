// Score 119:
// var frames = [
//   [
//     [1, 2],
//     [6, 4],
//     [5, 4],
//     [10, 0],
//     [7, 2],
//     [10, 0],
//     [10, 0],
//     [5, 2],
//     [7, 0],
//     [4, 4]
//   ]
// ];
//
// Score 141:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
//Score 300:
// var frames = [
//  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
// ]

function scoreFrame(frame) {
  return frame[0] + frame[1];
}

function sumOfFrames(frames) {
  return frames.reduce((acc, frame, i) => {
    // accumulator = adds the contents of each array together
    // frame(current value) = the contents of each individual array within the array
    // i (current index)= index of each array within the array
    return acc + scoreFrame(frame);
  }, 0);
}

function isSpare(frame) {
  if (frame[0] != 10 && frame[0] + frame[1] === 10) return true;
}

module.exports = {
  scoreFrame,
  sumOfFrames,
  isSpare
};
