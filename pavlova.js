// Pavlova dispatcher
// Copyright 2016 Pierre Ynard
// Licensed under GPLv3+

// RX class: this is meant to probe and handle a KiwiSDR instance, but
// the same interface could be implemented by other classes to support
// other types of online radio receivers.
var RX = function(url, freq, timeout) {
	this.root = url;
	this.redirect = this.root + (freq ? '?f=' + freq : '');
	this.timeout = timeout;
	this.status = null;
	this.dsc = 'Receiver at ' + url;
};

RX.prototype = {
	// Whether probing has not been completed yet and is still pending
	pending: function() {
		return (this.status == null);
	},

	// The redirection URL if this RX is available, or null otherwise
	redirection: function() {
		return this.status ? this.redirect : null;
	},

	// A description string for this RX
	description: function() {
		return this.dsc;
	},

	// Probe RX for availability and call cb() when completed
	probe: function(cb) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', this.root + 'status', true);
		xhr.timeout = this.timeout;
		var rx = this;
		xhr.ontimeout = function(evt) {
			rx.status = false;
			cb();
		};
		xhr.onreadystatechange = function(evt) {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					var result = xhr.responseText.match(/\n\s*name=\s*([^\n]+?)\s*\n/);
					if (result != null)
						rx.dsc = result[1];

					result = xhr.responseText.match(/\s+users=(\d+)\s+users_max=(\d+)\s+/);
					rx.status = (result != null && Number(result[1]) < Number(result[2]));
				} else
					rx.status = false;
				cb();
			}
		};
		xhr.send(null);
	},
};

// Pavlova dispatcher class: asynchronously probes receivers and
// redirects to the best available one
var Pavlova = function(url, receivers) {

	// Parse parameters from URL or passed string, see README.md
	var result = url.match(/(?:^|[\/\?#])([^\/\?#]+)(?:\/([^\/\?#]*))?(?:[\?#][^\/]*)?$/);
	if (result == null)
		return;
	var area = result[1];
	var freq = result[2] ? result[2] : null;
	var timeout = receivers.timeout != null ? receivers.timeout : 0;

        if (receivers.area[area] == null)
		return;
	this.rxs = receivers.area[area].map(function(rx) {
		return new RX(rx, freq, timeout);
	});
};

Pavlova.prototype = {
	// Redirect to the chosen receiver. null means no receiver could
	// be found. Monkey-patch this function to implement alternative
	// output.
	redirect: function(url) {
		if (url)
			window.location.href = url;
		else
			alert("No receiver available! Sorry, try again later.");
	},

	// Called back after each receiver has completed probing, checks
	// whether a redirection decision can be made
	check_all: function() {
		var failed = this.rxs.every(function(rx) {
			var pending = rx.pending();
			if (pending)
				return false;

			var url = rx.redirection();
			if (url)
				this.redirect(url);
			return (! url);
		}, this);
		if (failed)
			this.redirect(null);
	},

	// Launch the probing and redirection process
	dispatch: function() {
		this.rxs.forEach(function(rx) {
			var dispatcher = this;
			rx.probe(function() {
				dispatcher.check_all();
			});
		}, this);
	},
};

// Static method - this is the only function call you need
Pavlova.handle = function(arg, redirect_cb) {

	var dispatcher = new Pavlova(arg ? arg : window.location.href, receivers);
	if (dispatcher.rxs == null)
		return;
	if (redirect_cb)
		dispatcher.redirect = redirect_cb;
	dispatcher.dispatch();
};

