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

goog.require('Blockly.Arduino.Pitches');


Blockly.Arduino.addMotorsSetUp = function(){
  Blockly.Arduino.definitions_['define_DCmotor'] = "#include <DCMotor.h>\n"
  Blockly.Arduino.definitions_['define_motor0'] = "DCMotor motor0(M0_EN, M0_D0, M0_D1);\n";
  Blockly.Arduino.definitions_['define_motor1'] = "DCMotor motor1(M1_EN, M1_D0, M1_D1);\n";
  Blockly.Arduino.setups_["setup_motor"] = Blockly.Arduino.configuracion.placa.correccionDireccionMotores;
  
};

Blockly.Arduino.n6_move_foward = function() {
  Blockly.Arduino.addMotorsSetUp();

  var cfgArd = Blockly.Arduino.configuracion;
  Blockly.Arduino.definitions_['define_forward'] = "void avanzar()\n"+
    "{\n"+
    "  motor0.setSpeed("+cfgArd.robot.velocidad()+");//input a simulation value to set the speed\n"+
    "  motor1.setSpeed("+cfgArd.robot.velocidad()+");\n" +
    "  delay(" + cfgArd.robot.delayPara(cfgArd.distanciaPorPaso) + ");\n" +
    "  motor0.setSpeed(0);//input a simulation value to set the speed\n" +
    "  motor1.setSpeed(0);\n" +
    "  delay(" + cfgArd.esperaEntreInstrucciones + ");\n" +
    "}\n";
  return "avanzar();\n";
};

Blockly.Arduino.n6_turn_right = function() {
  Blockly.Arduino.addMotorsSetUp();

  var cfgArd = Blockly.Arduino.configuracion;
  Blockly.Arduino.definitions_['define_right'] = "void girar_derecha()\n"+
    "{\n"+
    "  motor0.setSpeed(0);//input a simulation value to set the speed\n"+
    "  motor1.setSpeed("+cfgArd.robot.velocidad()+");\n" +
    "  delay(910);\n" +
    "  motor0.setSpeed(0);//input a simulation value to set the speed\n" +
    "  motor1.setSpeed(0);\n" +
    "  delay(" + cfgArd.esperaEntreInstrucciones + ");\n" +
    "}\n";

  return "girar_derecha();\n";
};

Blockly.Arduino.n6_turn_left = function() {
  Blockly.Arduino.addMotorsSetUp();

  var cfgArd = Blockly.Arduino.configuracion;
  Blockly.Arduino.definitions_['define_left'] = "void girar_izquierda()\n"+
    "{\n"+
    "  motor0.setSpeed("+cfgArd.robot.velocidad()+");//input a simulation value to set the speed\n"+
    "  motor1.setSpeed(0);\n" +
    "  delay(910);\n" +
    "  motor0.setSpeed(0);//input a simulation value to set the speed\n" +
    "  motor1.setSpeed(0);\n" +
    "  delay(" + cfgArd.esperaEntreInstrucciones + ");\n" +
    "}\n";

  return "girar_izquierda();\n";
};


Blockly.Arduino.n6_melody = function() {
  //var dropdown_direction = this.getTitleValue('DIRECTION');
  var song = this.getFieldValue('SONG');
  var code = "";

  Blockly.Arduino.setups_["setup_speaker"] = "pinMode(SPEAKER, OUTPUT);\n";

  Blockly.Arduino.definitions_['define_melody'] = Blockly.Arduino.Pitches;

  Blockly.Arduino.definitions_['define_melody_init_1'] = "int melody1[] = {NOTE_C4, NOTE_G3,NOTE_G3, NOTE_A3, NOTE_G3,0, NOTE_B3, NOTE_C4};\n" +
    "int noteDurations1[] = {4, 8, 8, 4,4,4,4,4 };\n";

  Blockly.Arduino.definitions_['define_melody_init_2'] = "int melody2[] = {NOTE_G4,NOTE_C5,NOTE_C5,NOTE_D5,NOTE_C5,NOTE_B4,NOTE_A4,NOTE_A4, NOTE_A4,NOTE_D5,NOTE_D5,NOTE_E5,NOTE_D5,NOTE_C5,NOTE_B4,NOTE_G4, NOTE_G4,NOTE_E5,NOTE_E5,NOTE_F5,NOTE_E5,NOTE_D5,NOTE_C5,NOTE_A5,NOTE_G4,NOTE_G4,NOTE_A4,NOTE_D5,NOTE_B4,NOTE_C5, NOTE_G4,NOTE_C5,NOTE_C5,NOTE_D5,NOTE_C5,NOTE_B4,NOTE_A4,NOTE_A4, NOTE_A4,NOTE_D5,NOTE_D5,NOTE_E5,NOTE_D5,NOTE_C5,NOTE_B4,NOTE_G4, NOTE_G4,NOTE_E5,NOTE_E5,NOTE_F5,NOTE_E5,NOTE_D5,NOTE_C5,NOTE_A5,NOTE_G4,NOTE_G4,NOTE_A4,NOTE_D5,NOTE_B4,NOTE_C5, NOTE_G4,NOTE_C5,NOTE_C5,NOTE_C5,NOTE_B4,NOTE_B4,NOTE_C5,NOTE_B4,NOTE_A4,NOTE_G4, NOTE_D5,NOTE_E5,NOTE_D5,NOTE_D5,NOTE_C5,NOTE_C5,NOTE_G5,NOTE_G4,NOTE_G4,NOTE_G4,NOTE_A4,NOTE_D5,NOTE_B4,NOTE_C5};\n" +
    "int noteDurations2[] = {4,4,8,8,8,8,4,4, 4,4,8,8,8,8,4,4, 4,4,8,8,8,8,4,4,8,8,4,4,4,2, 4,4,8,8,8,8,4,4, 4,4,8,8,8,8,4,4, 4,4,8,8,8,8,4,4,8,8,4,4,4,2, 4,4,4,4,2,4,4,4,4,2, 4,4,8,8,8,8,4,4,8,8,4,4,4,2};\n";

  if(song === "TAPA"){
    code = "for (int thisNote = 0; thisNote < 8; thisNote++) {\n" +
            "  int noteDuration = 1000/noteDurations1[thisNote];\n" +
          "  tone(SPEAKER, melody1[thisNote],noteDuration);\n" +
            "  int pauseBetweenNotes = noteDuration * 1.30; \n" +
            "  delay(pauseBetweenNotes);\n" +
            "  noTone(SPEAKER);\n" + "}\n" +
            "delay(" + cfgArd.esperaEntreInstrucciones + ");\n" 
  }
  else if (song === "NAVIDAD"){
    code = "for (int thisNote = 0; thisNote < 84; thisNote++) {\n" +
             "  int noteDuration = 1000/noteDurations2[thisNote];\n" +
           "  tone(SPEAKER, melody2[thisNote],noteDuration);\n" +
  	         "  int pauseBetweenNotes = noteDuration * 1.30; \n" +
  	         "  delay(pauseBetweenNotes);\n" +
  	         "  noTone(SPEAKER);\n" + "}\n" +
  	         "delay(" + cfgArd.esperaEntreInstrucciones + ");\n"
  }
  return code;
};

Blockly.Arduino.ultrasonido = {};
Blockly.Arduino.ultrasonido.corregirCM = function(deseado){
  // Empíricamente cuando pongo 18cm sensa 21cm. 
  // Este cálculo de corrección puede no ser lineal, sin embargo.
  return Math.round(21/18*deseado);
};

function distanciaDeteccion(){
  var cfgArd = Blockly.Arduino.configuracion;
  // Idealmente esto sería sólo la distancia de giro.
  // Hay que sumarle la distancia de paso porque como sensa y avanza,
  // podría quedar más cerca de la pared que lo que queremos
  return Blockly.Arduino.ultrasonido.corregirCM(
    cfgArd.robot.distanciaParaGirar() + cfgArd.distanciaPorPaso );
};

Blockly.Arduino.object_ducker = function() {
  var cfgArd = Blockly.Arduino.configuracion;
  Blockly.Arduino.definitions_['define_ultrasonic_2'] = '#include <Ping.h>\n';
  Blockly.Arduino.definitions_['var_ultrasonic_2'] = 'PingSensor ultrasonic('+ cfgArd.pinUS +');\n';

  return "if(ultrasonic.measureCM() <= " + distanciaDeteccion() + "){\n "
    + Blockly.Arduino.statementToCode(this, 'IF') + "}\n"
    + "else{\n" + Blockly.Arduino.statementToCode(this, 'ELSE') + "}\n";
};

Blockly.Arduino.run_button_push = function(){
  Blockly.Arduino.setups_['setup_button']= "pinMode(RUN_SW, INPUT_PULLUP);";

  var statements_if = Blockly.Arduino.statementToCode(this, 'IF');  
  return 'if(!(digitalRead(RUN_SW))){\n' + statements_if + '\n}';
};


Blockly.Arduino.repeatForever = function() {
  // Do while/until loop.
  var until = false;
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + this.id + '\'') + branch;
  }
  return 'while (true) {\n' + branch + '}\n';
};