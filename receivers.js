// Receiver configuration for pavlova dispatcher
// Copyright 2016-2022 Pierre Ynard
// Licensed under GPLv3+

var receivers = {
	// Each supported area is defined by a short code that will be
	// matched against the URL (e.g. "#r/4625" will be dispatched
	// to a receiver in area "r" on 4625 kHz); and by a list of
	// receiver URLs, sorted by preference with the best one at the
	// top (which should be based on location, antenna, reception
	// quality...).
	area: {
		// All listed here are KiwiSDR instances
		a: [ // Asia, transmitted from Far East
			'http://railgun.proxy.kiwisdr.com:8073/', // China
			'http://szsdr.ddns.net:8073/', // China
			'https://nsk.swl.su/', // Novosibirsk, Russia
			'https://nsk2.swl.su/', // Novosibirsk, Russia
			'http://hl3amo.ddns.net:8074/', // South Korea
			'http://hl5ntr.ddns.net:8073/', // South Korea
			'http://jp7fso-kiwisdr.sytes.net:8073/', // Fukushima, Japan
			'http://126.80.167.175:8073/', // Kobe, Japan
			'https://khv.swl.su/', // Khabarovsk, Russia
			'http://hbsdr.proxy.kiwisdr.com:8073/', // China
			'http://msk.swl.su:8073/', // Moscow, Russia
		],
		m: [ // Mediterranean sea / Middle East
			'http://sv1btl.no-ip.org:8073/', // Athens, Greece
			'http://sdr.telcosol.gr:8073/', // Western Greece
			'http://9k2ra-1.proxy.kiwisdr.com:8073/', // Kuwait
			'http://9k2ra-2k.proxy.kiwisdr.com:8073/', // Kuwait
			'http://midskiwi.ddns.net:8073/', // Qatar
			'http://sibamanna.duckdns.org:8073/', // Sardinia, Italy
			'http://kiwisdr.briata.org:8073/', // Northern Italy
		],
		n: [ // North America, transmitted from Cuba
			'http://lounix.net:8073/', // Kansas
			'http://ka7u.no-ip.org:8073/', // Idaho
			'http://76.127.43.125:8073/', // Las Cruces, New Mexico
			'http://ranch-pt.no-ip.org:8073/', // Texas
			'http://ka7u.no-ip.org:8074/', // Idaho
			'http://71.200.243.35:8073/', // Southwest Florida
			'http://km4rt.ddns.net:8073/', // Tipton County, Tennessee
			'http://raleigh.twrmon.net:8073/', // North Raleigh, North Carolina
		],
		p: [ // Pacific
			'http://jp7fso-kiwisdr.sytes.net:8073/', // Fukushima, Japan
			'http://126.80.167.175:8073/', // Kobe, Japan
			'http://123.255.237.170:8073/', // Kanuma, Japan
			'http://hl3amo.ddns.net:8074/', // South Korea
			'http://kfs.wsprdaemon.org:8073/', // Half Moon Bay, CA
			'http://mauisdr.wsprdaemon.org:8073/', // Hawaii
			'http://wa6our.ddns.net:8073/', // Seattle, WA
			'http://kiwisdr.ece.uvic.ca:8073/', // Victoria, BC
			'http://119.224.45.205:8073/', // New Zealand
			'http://rjdevlin47.sytes.net:8073/', // Hawaii
		],
	},
	timeout: 5000, // Timeout when probing receivers, in milliseconds
};
