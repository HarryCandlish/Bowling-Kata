function scoreFrame(frame) {
  return frame[0] + frame[1];
}

function sumOfFrames(frames) {
  return frames.reduce((acc, frame, i) => {
    return acc + scoreFrame(frame);
  }, 0);
}

function isSpare(frame) {
  if (frame[0] != 10 && frame[0] + frame[1] === 10) return true;
}

function scoreSpare(frame, nextFrame) {
  if (isSpare(frame)) return frame[0] + frame[1] + nextFrame[0];
}

function isStrike(frame) {
  if (frame[0] || frame[1] === 10) return true;
}

function scoreStrike(frame, nextFrame) {
  if (isStrike(frame)) return frame[0] + nextFrame[0] + nextFrame[1];
}

function isDoubleStrike(frame, nextFrame) {
  return frame[0] === 10 && nextFrame[0] === 10;
}

module.exports = {
  scoreFrame,
  sumOfFrames,
  isSpare,
  scoreSpare,
  isStrike,
  scoreStrike,
  isDoubleStrike
};
