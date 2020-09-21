'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_HEIGHT = 30;
const BAR_GAP = 50;
const BAR_WIDTH = 40;
const MAX_BAR_HEIGHT = 150;

const renderCloud = function(ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

const getMaxElement = function(arr) {
	let maxElement = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > maxElement) {
			maxElement = arr[i];
		}
	}
	return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
	renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');	

	ctx.fillStyle = '#000000';
	const maxTime = getMaxElement(times);	

	for (let i = 0; i < names.length; i++) {	
		ctx.fillText(
			names[i],
			CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
			CLOUD_HEIGHT - CLOUD_Y);
		ctx.fillRect(
			CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
			CLOUD_HEIGHT - MAX_BAR_HEIGHT - FONT_HEIGHT,
			BAR_WIDTH,
			(times[i] * MAX_BAR_HEIGHT) / maxTime);
		ctx.fillText(
			Math.round(times[i]),
			CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
			80);
	}

	ctx.font = '16pt PT Mono';
	ctx.fillStyle = '#000000';
	ctx.fillText('Ура вы победили!', 120, 40);
	ctx.fillText('Список результатов:', 120, 60);

};