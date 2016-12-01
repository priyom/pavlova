// Receiver configuration for pavlova dispatcher
// Comments copyright 2016 Pierre Ynard
// Licensed under GPLv3+

var receivers = {
	// Each supported area is defined by a short code that will be
	// matched against the URL (e.g. "#r/4625" will be dispatched
	// to a receiver in area "r" on 4625 kHz); and by a list of
	// receiver URLs, sorted by preference with the best one at the
	// top (which should be based on location, antenna, reception
	// quality...).
	area: {
	},
	timeout: 5000, // Timeout when probing receivers, in milliseconds
};
