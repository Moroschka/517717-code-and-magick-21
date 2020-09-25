'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 30;
const BAR_GAP = 50;
const BAR_WIDTH = 40;
const MAX_BAR_HEIGHT = 150;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

const getRandomColor = function () {
  let lightness = Math.floor(Math.random() * 100);
  return `hsl(240, 100%, ${lightness}%)`;
};

const getColourByName = function (ctx, names) {
  if (names === `Вы`) {
    ctx.fillStyle = `rgba(255, 0, 0, 1)`;
  } else {
    ctx.fillStyle = getRandomColor();
  }
};

const renderHistogram = function (ctx, times, maxTime, names) {
  for (let i = 0; i < names.length; i++) {
    const barHeight = (times[i] * MAX_BAR_HEIGHT) / maxTime;
    getColourByName(ctx, names[i]);
    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT - barHeight - FONT_GAP / 2,
        BAR_WIDTH,
        barHeight);
  }
};

const renderNameSignatures = function (ctx, names) {
  ctx.fillStyle = `#000000`;
  ctx.textBaseline = `hanging`;
  for (let i = 0; i < names.length; i++) {
    ctx.fillText(
        names[i],
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT - CLOUD_Y);
  }
};

const renderTimeSignatures = function (ctx, times, maxTime) {
  ctx.fillStyle = `#000000`;
  ctx.textBaseline = `hanging`;
  for (let i = 0; i < times.length; i++) {
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT - CLOUD_Y - (times[i] * MAX_BAR_HEIGHT) / maxTime - FONT_GAP);
  }
};

const renderDescription = function (ctx, color, font) {
  ctx.fillStyle = color;
  ctx.textBaseline = `hanging`;
  ctx.font = font;
  ctx.fillText(`Ура вы победили!`, 120, 30);
  ctx.fillText(`Список результатов:`, 120, 50);
};

window.renderStatistics = function (ctx, names, times) {
  const maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#ffffff`);
  renderDescription(ctx, `#000000`, `16px PT Mono`);
  renderHistogram(ctx, times, maxTime, names);
  renderNameSignatures(ctx, names);
  renderTimeSignatures(ctx, times, maxTime);
};
