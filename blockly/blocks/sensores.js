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
 * @fileoverview Helper functions for generating sensors blocks.
 * @author mgomez4@famaf.unc.edu.ar (Marcos J. Gomez)
 */

goog.provide('Blockly.Blocks.sensores');

goog.require('Blockly.Blocks');

Blockly.Blocks['ultrasonic_sensor'] = {
  helpUrl: '',
  init: function() {
    this.setColour(50);
    this.appendDummyInput()
	    .appendField("Sensor Ultrasonido")
      .appendField(new Blockly.FieldImage("media/images/ultrasonido-4.png", 64, 64))
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "ECHO")
      .appendField("PIN#TRIG")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "TRIG");
    this.setOutput(true, Number);
    this.setTooltip('Este bloque nos da información de la distancia a la cual se encuentra un objeto');
  }
};

Blockly.Blocks['both_motors_move'] = {
  helpUrl: '',
  init: function() {
    this.setColour(250);
    this.appendDummyInput()
        .appendField("Motor1")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "MOTOR1A")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "MOTOR1B")
    this.appendDummyInput()
        .appendField("Motor2")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "MOTOR2A")
        .appendField(new Blockly.FieldDropdown(profile.default.digital), "MOTOR2B")
        .appendField(new Blockly.FieldDropdown([["Avanzar", "forward"], ["Derecha", "right"], ["Izquierda", "left"], ["Retroceder", "backward"]]), "DIRECTION");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Permite manejar los dos motores correspondientes a las ruedas de manera simultánea. Podemos definir su velocidad.');
  }
};
