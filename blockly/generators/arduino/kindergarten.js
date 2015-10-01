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

 Blockly.Arduino.n6_move_foward = function() {
   //var dropdown_direction = this.getTitleValue('DIRECTION');
   var speed = 50;//Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
   var code = "";
   Blockly.Arduino.definitions_['define_DCmotor'] = "#include <DCMotor.h>\n"
   Blockly.Arduino.definitions_['define_motor0'] = "DCMotor motor0(M0_EN, M0_D0, M0_D1);\n";
   Blockly.Arduino.definitions_['define_motor1'] = "DCMotor motor1(M1_EN, M1_D0, M1_D1);\n";
   Blockly.Arduino.setups_["setup_motor"] = "motor1.setClockwise(false);\n "

   Blockly.Arduino.definitions_['define_forward'] = "void avanzar()\n"+
    "{\n"+
    "  motor0.setSpeed("+speed+");//input a simulation value to set the speed\n"+
    "  motor1.setSpeed("+speed+");\n" +
    "  delay(1000);\n" +
    "  motor0.setSpeed(0);//input a simulation value to set the speed\n" +
    "  motor1.setSpeed(0);\n" +
    "  delay(3000);\n" +
    "}\n";

   code = "avanzar();\n";

   return code;
 };

 Blockly.Arduino.n6_turn_right = function() {
   //var dropdown_direction = this.getTitleValue('DIRECTION');
   var speed = 50;//Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
   var code = "";

   Blockly.Arduino.definitions_['define_DCmotor'] = "#include <DCMotor.h>\n"
   Blockly.Arduino.definitions_['define_motor0'] = "DCMotor motor0(M0_EN, M0_D0, M0_D1);\n";
   Blockly.Arduino.definitions_['define_motor1'] = "DCMotor motor1(M1_EN, M1_D0, M1_D1);\n";

   Blockly.Arduino.setups_["setup_motor"] = Blockly.Arduino.configuracion.placa.correccionDireccionMotores;

   Blockly.Arduino.definitions_['define_right'] = "void girar_derecha()\n"+
    "{\n"+
    "  motor0.setSpeed(0);//input a simulation value to set the speed\n"+
    "  motor1.setSpeed("+speed+");\n" +
    "  delay(910);\n" +
    "  motor0.setSpeed(0);//input a simulation value to set the speed\n" +
    "  motor1.setSpeed(0);\n" +
    "  delay(3000);\n" +
    "}\n";

   code = "girar_derecha();\n";

   return code;
 };

 Blockly.Arduino.n6_turn_left = function() {
   //var dropdown_direction = this.getTitleValue('DIRECTION');
   var speed = 50;//Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
   var code = "";

   Blockly.Arduino.definitions_['define_DCmotor'] = "#include <DCMotor.h>\n"
   Blockly.Arduino.definitions_['define_motor0'] = "DCMotor motor0(M0_EN, M0_D0, M0_D1);\n";
   Blockly.Arduino.definitions_['define_motor1'] = "DCMotor motor1(M1_EN, M1_D0, M1_D1);\n";
   Blockly.Arduino.setups_["setup_motor"] = Blockly.Arduino.configuracion.placa.correccionDireccionMotores;

   Blockly.Arduino.definitions_['define_left'] = "void girar_izquierda()\n"+
      "{\n"+
      "  motor0.setSpeed("+speed+");//input a simulation value to set the speed\n"+
      "  motor1.setSpeed(0);\n" +
      "  delay(910);\n" +
      "  motor0.setSpeed(0);//input a simulation value to set the speed\n" +
      "  motor1.setSpeed(0);\n" +
      "  delay(3000);\n" +
      "}\n";

   code = "girar_izquierda();\n";

   return code;
 };


 Blockly.Arduino.n6_melody = function() {
   //var dropdown_direction = this.getTitleValue('DIRECTION');
   var song = this.getFieldValue('SONG');
   var code = "";

   Blockly.Arduino.definitions_['define_melody'] = Blockly.Arduino.Pitches;

   Blockly.Arduino.definitions_['define_melody_init_1'] = "int melody1[] = {NOTE_C4, NOTE_G3,NOTE_G3, NOTE_A3, NOTE_G3,0, NOTE_B3, NOTE_C4};\n" +
      "int noteDurations1[] = {4, 8, 8, 4,4,4,4,4 };\n";

   Blockly.Arduino.definitions_['define_melody_init_2'] = "int melody2[] = {NOTE_G4,NOTE_C5,NOTE_C5,NOTE_D5,NOTE_C5,NOTE_B4,NOTE_A4,NOTE_A4, NOTE_A4,NOTE_D5,NOTE_D5,NOTE_E5,NOTE_D5,NOTE_C5,NOTE_B4,NOTE_G4, NOTE_G4,NOTE_E5,NOTE_E5,NOTE_F5,NOTE_E5,NOTE_D5,NOTE_C5,NOTE_A5,NOTE_G4,NOTE_G4,NOTE_A4,NOTE_D5,NOTE_B4,NOTE_C5, NOTE_G4,NOTE_C5,NOTE_C5,NOTE_D5,NOTE_C5,NOTE_B4,NOTE_A4,NOTE_A4, NOTE_A4,NOTE_D5,NOTE_D5,NOTE_E5,NOTE_D5,NOTE_C5,NOTE_B4,NOTE_G4, NOTE_G4,NOTE_E5,NOTE_E5,NOTE_F5,NOTE_E5,NOTE_D5,NOTE_C5,NOTE_A5,NOTE_G4,NOTE_G4,NOTE_A4,NOTE_D5,NOTE_B4,NOTE_C5, NOTE_G4,NOTE_C5,NOTE_C5,NOTE_C5,NOTE_B4,NOTE_B4,NOTE_C5,NOTE_B4,NOTE_A4,NOTE_G4, NOTE_D5,NOTE_E5,NOTE_D5,NOTE_D5,NOTE_C5,NOTE_C5,NOTE_G5,NOTE_G4,NOTE_G4,NOTE_G4,NOTE_A4,NOTE_D5,NOTE_B4,NOTE_C5};\n" +
      "int noteDurations2[] = {4,4,8,8,8,8,4,4, 4,4,8,8,8,8,4,4, 4,4,8,8,8,8,4,4,8,8,4,4,4,2, 4,4,8,8,8,8,4,4, 4,4,8,8,8,8,4,4, 4,4,8,8,8,8,4,4,8,8,4,4,4,2, 4,4,4,4,2,4,4,4,4,2, 4,4,8,8,8,8,4,4,8,8,4,4,4,2};\n";

   if(song === "TAPA"){
     code = "for (int thisNote = 0; thisNote < 8; thisNote++) {\n" +
 	          "  int noteDuration = 1000/noteDurations1[thisNote];\n" +
            "  tone(23, melody1[thisNote],noteDuration);\n" +
 		        "  int pauseBetweenNotes = noteDuration * 1.30; \n" +
 		        "  delay(pauseBetweenNotes);\n" +
 		        "  noTone(23);\n" + "}\n" +
 		        "delay(5000);\n"
 		 }
    else if (song === "NAVIDAD"){
      code = "for (int thisNote = 0; thisNote < 8; thisNote++) {\n" +
 	           "  int noteDuration = 1000/noteDurations2[thisNote];\n" +
             "  tone(23, melody2[thisNote],noteDuration);\n" +
 		         "  int pauseBetweenNotes = noteDuration * 1.30; \n" +
 		         "  delay(pauseBetweenNotes);\n" +
 		         "  noTone(23);\n" + "}\n" +
 		         "delay(5000);\n"
 		}

   return code;
 };

 Blockly.Arduino.object_ducker = function() {
   var statements_if = Blockly.Arduino.statementToCode(this, 'IF');
   var statements_else = Blockly.Arduino.statementToCode(this, 'ELSE');

   // TODO: Assemble JavaScript into code variable.
   var if_code = "";
   var else_code = "";
   var code = "";
   Blockly.Arduino.definitions_['define_ultrasonic_2'] = '#include <Ping.h>\n';
   // We define that ultrasonic sensor is connect to analogic pin S2 of N6 robotgroup
   Blockly.Arduino.definitions_['var_ultrasonic_2'] = 'PingSensor ultrasonic(A2);\n';

   if_code = "if(ultrasonic.measureCM() <= 18){\n "+statements_if+"}\n";
   else_code = "else{\n"+statements_else+"}";
   code = if_code + else_code;

   return code;
 };

 Blockly.Arduino.run_button_push = function(){
   var statements_if = Blockly.Arduino.statementToCode(this, 'IF');
   var code = "";
   Blockly.Arduino.setups_['setup_button']= "pinMode(RUN_SW, INPUT_PULLUP);";
   code = 'if(!(digitalRead(RUN_SW))){\n' + statements_if + '\n}';

   return code;
 }
