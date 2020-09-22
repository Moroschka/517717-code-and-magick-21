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
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#ffffff`);

  ctx.fillStyle = `#000000`;
  const maxTime = getMaxElement(times);

  for (let i = 0; i < names.length; i++) {
    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      const getRandomColor = function () {
        let color = Math.floor(Math.random() * 100);
        return `hsl(240, 100%,` + color + `%` + `)`;
      };
      ctx.fillStyle = getRandomColor();
    }

    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT - (times[i] * MAX_BAR_HEIGHT) / maxTime - FONT_GAP,
        BAR_WIDTH,
        (times[i] * MAX_BAR_HEIGHT) / maxTime);

    ctx.fillStyle = `#000000`;
    ctx.fillText(
        names[i],
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT - CLOUD_Y);
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        CLOUD_HEIGHT - CLOUD_Y - (times[i] * MAX_BAR_HEIGHT) / maxTime - FONT_GAP);
  }
  ctx.font = `16px PT Mono`;
  ctx.fillText(`Ура вы победили!`, 120, 40);
  ctx.fillText(`Список результатов:`, 120, 60);
};
