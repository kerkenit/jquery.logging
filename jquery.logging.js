$(function () {

	$.fn.logging = function (val) {

		var getType = function (val) {
			if (typeof val === 'undefined') return 'undefined';
			if (typeof val === 'object' && !val) return 'null';
			return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
		};

		var isConsole = function () {
			return (this.console !== undefined && this.console !== null && this.console.log !== undefined);
		};

		var isString = function (val) {
			var type = getType(val);
			return (type == 'string' || type == 'number' || type == 'boolean');
		};

		var getConsolVal = function (val) {
			if (val !== undefined && val != null && getType(val)) {
				if (isString(val)) {
					return val;
				}
				else if (getType(val) == 'object') {
					return val;
				}
				else {
					return getType(val);
				}
			}
			return undefined;
		};

		var getTextVal = function (val) {
			if (val !== undefined && val != null && getType(val)) {
				if (isString(val)) {
					return val;
				}
			}
			return undefined;
		};

		if (isConsole()) {
			var toLog = getConsolVal(val);
			if (toLog !== undefined) {
				console.log(toLog);
			}
			else {
				console.log('Value in undefined');
			}
		} else {
			document.write(getTextVal(val));
		};
	};
});