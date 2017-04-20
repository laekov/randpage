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
		while (x > 0) {
			var bit = x % 10;
			$('#dig' + biti).html(bit);
			x = Math.floor(x / 10);
			++ biti;
		}
		while (biti < 1) {
			$('#dig' + biti).html('0');
			++ biti;
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
				trick('#dig0');
				trick('#dig1');
			}
		}, 100);
	});
})();
