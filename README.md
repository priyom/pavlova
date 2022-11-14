Pavlova dispatcher
==================

Given the multitude and variability of online radio receivers, the pavlova dispatcher finds an available receiver slot in the desired area, based on live probing, and redirects your web browser to it, for your listening pleasure.

For now it is mainly aimed to support instances of the [KiwiSDR receiver network](http://rx.kiwisdr.com/), given their main limitation of 4 user slots maximum. The live probing of available receivers is performed in client-side javascript in your web browser.

Usage
=====

There is a pavlova instance hosted at <http://s.printf.cc/>. It accepts two parameters: the area code, and the tuning string. The tuning string is optional. For example:

* <http://s.printf.cc/#p/6400am> will redirect to an available receiver in the Pacific ("p") area, tuned to 6400 kHz AM;
* <http://s.printf.cc/#m/9450usb> will likewise redirect to a receiver in the Mediterranean ("m") area tuned to 9450 kHz USB;
* <http://s.printf.cc/#n/> will find and redirect to an available receiver in North America ("n"), but without tuning it to any specific frequency.

The URL format is pretty flexible, so <http://s.printf.cc/?p/6400am> works too or even <http://s.printf.cc/p/6400am> could be supported, although the preferred way is using a URL fragment (the #-part), because it doesn't need to be sent to the server.

"Pavlova" ?
===========

![Pavlova dessert with kiwi slices](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pavlova_dessert.JPG/320px-Pavlova_dessert.JPG "Pavlova dessert with kiwi slices")

This dispatcher is named after the [pavlova dessert](https://en.wikipedia.org/wiki/Pavlova_%28food%29) and draws a bridge between the [KiwiSDR project](http://kiwisdr.com/KiwiSDR/index.html) and [priyom.org](https://priyom.org/).

Hosting
=======

Hosting your own instance of pavlova dispatcher is very easy: you just need to clone, link and/or copy the files, and serve them as static content over HTTP. You can also use your personal local version instead. You can fully customize your receivers list and dispatching rules, just edit the configuration file. Optionally, you can add extra matching rules to the configuration of your web server to support advanced URL formats.

Note: you generally cannot host a pavlova instance over HTTPS. Most KiwiSDR receivers - or self-hosted web-based receivers for that matter - do not have a proper HTTPS setup and are available only over unsecured HTTP. If your pavlova instance is hosted over HTTPS, its dynamic probes to unsecured HTTP receivers will be blocked by web browsers for security reasons, rendering it inoperant. Instead, you must make sure that your web server is configured to serve your pavlova instance over plain HTTP. (Beyond this, distributing secure trust into home appliances remains a complicated issue, to which the industry has found no obvious solution.)

Feedback
========

If you want to give us feedback about a particular KiwiSDR receiver which you think provides a great reception and deserves a better place, don't hesitate! You can also suggest support for a new area group if you have a use for it.

We think the project could use a little, simple HTML GUI to provide a smoother experience than raw javascript. If you want to help us with this, it's welcome!

Contact us on the chat on [priyom.org](https://priyom.org/) or on twitter, [@priyom_org](https://twitter.com/priyom_org).
