(function($) {
	$.fn.log = function(val) {
		this.getType = function(val) {
			try {
				if (typeof val === 'undefined') return 'undefined';
				if (typeof val === 'object' && !val) return 'null';
				return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
			} catch (ex) {
				return 'undefined';
			}
		};
		this.isConsole = function() {
			return (this.console !== undefined && this.console !== null && this.console.log !== undefined);
		};
		this.isString = function(val) {
			var type = this.getType(val);
			return (type === 'string' || type === 'number' || type === 'boolean');
		};
		this.getConsolVal = function(val) {
			if (val !== undefined && val !== null && this.getType(val)) {
				if (this.isString(val)) {
					return val;
				} else if (this.getType(val) === 'object') {
					return val;
				} else {
					return this.getType(val);
				}
			}
			return undefined;
		};
		this.getTextVal = function(val) {
			if (val !== undefined && val !== null && this.getType(val)) {
				if (this.isString(val)) {
					return val;
				}
			}
			return undefined;
		};
		if (this.isConsole()) {
			var toLog = this.getConsolVal(val);
			if (toLog !== undefined && toLog !== null && toLog !== 'undefined' && toLog !== 'null') {
				console.log(toLog);
			} else {
				console.log('Value in undefined');
			}
		}
	};
})(jQuery);