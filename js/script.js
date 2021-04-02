$(function () {
	$('#yes').click(function (event) {
		modal('最美的爱情便是我们了罢，愿你我长久，愿幸福永存', function () {
			$('.page_one').addClass('hide');
			$('.page_two').removeClass('hide');
			// typeWrite();
			fireworks();

		});
	});
	$('#no').click(function (event) {
		modal('我本来以为爱情，一定非要轰轰烈烈，奔腾策马', A);
	});
});

function A() {
	modal('直到我遇见了你', B);
}

function B() {
	modal('不，直到我爱上了你', C);
}

function C() {
	modal('看破了些红尘杂念，悟出了点爱情真谛', D);
}

function D() {
	modal('我们这一生的确漫长', E);
}

function E() {
	modal('但现在，我有与你共度一生的梦想', F);
}

function F() {
	modal('这世间没有佛法能降七情六欲', G);
}

function G() {
	modal('但你却能度我的心', H);
}

function H() {
	modal('我不留恋于其他，不舍情于致理', I);
}

function I() {
	modal('却独独，爱你如生命。', function () {
		fireworks();
	});
}

function fireworks() {
	$('.page_one').addClass('hide');
	$('.page_two').removeClass('hide');
	$('.page_two').fireworks({
		sound: true,
		opacity: 0.9,
		width: '100%',
		height: '100%'
	});
}
function modal(content, callback) {
	var tpl = '<div class="container">' +
		'<div class="mask"></div>' +
		'<div class="modal">' +
		'<p>' + content + '</p>' +
		'<button type="button" id="confirm" class="confirm">确定</button>' +
		'</div>' +
		'</div>';
	$('body').append(tpl);
	$(document).on('click', '.confirm', function () {
		$('.container').remove();
		callback();
	});
}