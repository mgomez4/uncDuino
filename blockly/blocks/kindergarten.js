/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2015 Marcos J. Gomez
 * https://github.com/mgomez4/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating N6 (duinoblock 1.2 && 2.3) blocks,
 * for little kids.
 * @author mgomez4@famaf.unc.edu.ar (Marcos J. Gomez)
 */

Blockly.Blocks['n6_move_foward'] = {
  helpUrl: '',
  init: function() {
    this.setColour(250);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("media/images/avanzar2.jpg", 64, 64))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Avanza 20 cm :)');
  }
};

Blockly.Blocks['n6_turn_left'] = {
  helpUrl: '',
  init: function() {
    this.setColour(250);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("media/images/girar_izquierda2.png", 64, 64))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Gira <-');
  }
};

Blockly.Blocks['n6_turn_right'] = {
  helpUrl: '',
  init: function() {
    this.setColour(250);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("media/images/girar_derecha2.png", 64, 64))
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Gira ->');
	//this.setMovable(false);
  }
};

Blockly.Blocks['n6_melody']  = {
  helpUrl: '',
  init: function() {
    this.setColour(20);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldImage("media/images/musica3.png", 64, 64))
		.appendField(new Blockly.FieldDropdown([["\uD83C\uDF85 Navidad", "NAVIDAD"], ["\uD83D\uDE36 TAPA-TAPITA", "TAPA"], ["", "NONE"]]), 'SONG')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Canta una canción');
  }
};

Blockly.Blocks['object_ducker'] = {
  helpUrl: '',
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
    this.setColour(160);
    this.appendStatementInput("IF")
        .appendTitle(new Blockly.FieldImage("media/images//object2.jpg", 256, 256));
    this.appendStatementInput("ELSE")
        .appendTitle(new Blockly.FieldImage("media/images/no_object1.jpg", 256, 256));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Decidimos');
  }

};

Blockly.Blocks['run_button_push'] = {
  helpUrl: '',
  init: function() {
    //this.setHelpUrl('http://www.example.com/');
    this.setColour(160);
    this.appendStatementInput("IF")
        .appendTitle(new Blockly.FieldImage("media/images/boton1.png", 30, 30));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Si presionamos el botón');
  }
};

Blockly.Blocks['repeatForever'] = {
  /**
   * Block for 'do while/until' loop.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL);
    this.setColour(Blockly.Blocks.loops.HUE);
    this.appendStatementInput('DO')
        .appendTitle(new Blockly.FieldImage("media/images/repetir.png", 64, 64))
        //.appendField(Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return "Repetir siempre";
    });
  }
};
