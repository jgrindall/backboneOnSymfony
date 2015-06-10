(function(ns){

	"use strict";

	ns.Utils = {};

	ns.Utils.getName = function(){
		var names = ["Anne", "Ben", "Chris", "Diane", "Edward", "Florence"];
		return names[Math.floor(Math.random()*names.length)] + '-' + Math.floor(Math.random() * 100000);
	};

})(BBDemo);




