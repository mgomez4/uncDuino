goog.provide("Blockly.Arduino.Melodies");
goog.require("Blockly.Arduino.Pitches");

Blockly.Arduino.melodies = {};

Blockly.Arduino.melodies.Melody = function(melodyName){
	this._name = melodyName;
	this._notes = Blockly.Arduino.melodies[melodyName];
};

Blockly.Arduino.melodies.Melody.prototype = {
	name: function(){ return this._name; },

	noteNames: function(){
		return this._notes.map(function(n){ return n.note; });
	},

	noteDurations: function(){
		return this._notes.map(function(n){ return n.duration; });
	},

	length: function(){
		return this._notes.length;
	},
};

Blockly.Arduino.melodies.get = function(melodyName){
	return new Blockly.Arduino.melodies.Melody(melodyName);
};

Blockly.Arduino.melodies["TAPA"] = [
	{ note: "NOTE_C4", duration: "4" },
	{ note: "NOTE_G3", duration: "8" },
	{ note: "NOTE_G3", duration: "8" },
	{ note: "NOTE_A3", duration: "4" },
	{ note: "NOTE_G3", duration: "4" },
	{ note: "0",       duration: "4" },
	{ note: "NOTE_B3", duration: "4" },
	{ note: "NOTE_C4", duration: "4" },
];

Blockly.Arduino.melodies["NAVIDAD"] = [
	{ note: "NOTE_G4", duration: "4" },
	{ note: "NOTE_C5", duration: "4" },
	{ note: "NOTE_C5", duration: "8" },
	{ note: "NOTE_D5", duration: "8" },
	{ note: "NOTE_C5", duration: "8" },
	{ note: "NOTE_B4", duration: "8" },
	{ note: "NOTE_A4", duration: "4" },
	{ note: "NOTE_A4", duration: "4" },
	{ note: "NOTE_A4", duration: "4" },
	{ note: "NOTE_D5", duration: "4" },
	{ note: "NOTE_D5", duration: "8" },
	{ note: "NOTE_E5", duration: "8" },
	{ note: "NOTE_D5", duration: "8" },
	{ note: "NOTE_C5", duration: "8" },
	{ note: "NOTE_B4", duration: "4" },
	{ note: "NOTE_G4", duration: "4" },
	{ note: "NOTE_G4", duration: "4" },
	{ note: "NOTE_E5", duration: "4" },
	{ note: "NOTE_E5", duration: "8" },
	{ note: "NOTE_F5", duration: "8" },
	{ note: "NOTE_E5", duration: "8" },
	{ note: "NOTE_D5", duration: "8" },
	{ note: "NOTE_C5", duration: "4" },
	{ note: "NOTE_A5", duration: "4" },
	{ note: "NOTE_G4", duration: "8" },
	{ note: "NOTE_G4", duration: "8" },
	{ note: "NOTE_A4", duration: "4" },
	{ note: "NOTE_D5", duration: "4" },
	{ note: "NOTE_B4", duration: "4" },
	{ note: "NOTE_C5", duration: "2" },
	{ note: "NOTE_G4", duration: "4" },
	{ note: "NOTE_C5", duration: "4" },
	{ note: "NOTE_C5", duration: "8" },
	{ note: "NOTE_D5", duration: "8" },
	{ note: "NOTE_C5", duration: "8" },
	{ note: "NOTE_B4", duration: "8" },
	{ note: "NOTE_A4", duration: "4" },
	{ note: "NOTE_A4", duration: "4" },
	{ note: "NOTE_A4", duration: "4" },
	{ note: "NOTE_D5", duration: "4" },
	{ note: "NOTE_D5", duration: "8" },
	{ note: "NOTE_E5", duration: "8" },
	{ note: "NOTE_D5", duration: "8" },
	{ note: "NOTE_C5", duration: "8" },
	{ note: "NOTE_B4", duration: "4" },
	{ note: "NOTE_G4", duration: "4" },
	{ note: "NOTE_G4", duration: "4" },
	{ note: "NOTE_E5", duration: "4" },
	{ note: "NOTE_E5", duration: "8" },
	{ note: "NOTE_F5", duration: "8" },
	{ note: "NOTE_E5", duration: "8" },
	{ note: "NOTE_D5", duration: "8" },
	{ note: "NOTE_C5", duration: "4" },
	{ note: "NOTE_A5", duration: "4" },
	{ note: "NOTE_G4", duration: "8" },
	{ note: "NOTE_G4", duration: "8" },
	{ note: "NOTE_A4", duration: "4" },
	{ note: "NOTE_D5", duration: "4" },
	{ note: "NOTE_B4", duration: "4" },
	{ note: "NOTE_C5", duration: "2" },
	{ note: "NOTE_G4", duration: "4" },
	{ note: "NOTE_C5", duration: "4" },
	{ note: "NOTE_C5", duration: "4" },
	{ note: "NOTE_C5", duration: "4" },
	{ note: "NOTE_B4", duration: "2" },
	{ note: "NOTE_B4", duration: "4" },
	{ note: "NOTE_C5", duration: "4" },
	{ note: "NOTE_B4", duration: "4" },
	{ note: "NOTE_A4", duration: "4" },
	{ note: "NOTE_G4", duration: "2" },
	{ note: "NOTE_D5", duration: "4" },
	{ note: "NOTE_E5", duration: "4" },
	{ note: "NOTE_D5", duration: "8" },
	{ note: "NOTE_D5", duration: "8" },
	{ note: "NOTE_C5", duration: "8" },
	{ note: "NOTE_C5", duration: "8" },
	{ note: "NOTE_G5", duration: "4" },
	{ note: "NOTE_G4", duration: "4" },
	{ note: "NOTE_G4", duration: "8" },
	{ note: "NOTE_G4", duration: "8" },
	{ note: "NOTE_A4", duration: "4" },
	{ note: "NOTE_D5", duration: "4" },
	{ note: "NOTE_B4", duration: "4" },
	{ note: "NOTE_C5", duration: "2" },
];