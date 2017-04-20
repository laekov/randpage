(function() {
	var seq = [];
	var cur;
	var randInt = function(x) {
		return Math.floor(Math.random() * x);
	};
	var getInt = function(id) {
		var res = 0;
		try {
			res = parseInt($(id).val());
		} catch (error) {
			return undefined;
		};
		return res;
	};
	var displayInt = function(x) {
		var biti = 0;
		for (; x > 0; ++ biti) {
			var bit = x % 10;
			$('#dig' + biti).html(bit);
			x = Math.floor(x / 10);
		}
		for (; biti < 2; ++ biti) {
			$('#dig' + biti).html('0');
		}
	};
	var animating = false;
	var trick = function(eleId) {
		// $(eleId).slideUp('fast');
		$(eleId).html(randInt(10));
		// $(eleId).slideDown('fast');
	};
	$(document).ready(function() {
		$('#act').click(function() {
			animating = true;
		});
		$('#gen').click(function() {
			animating = false;
			displayInt(randInt(getInt('#count')) + 1);
		});
		setInterval(function() {
			if (animating) {
				displayInt(randInt(getInt('#count')) + 1);
			}
		}, 100);
	});
})();
