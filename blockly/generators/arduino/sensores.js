/**
 * Visual Blocks Language
 *
 * Copyright 2015 Marcos J. Gomez
 * https://github.com/mgomez4/BlocklyDuino
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
 * @fileoverview Helper functions for generating sensors code.
 * @author mgomez4@famaf.unc.edu.ar (Marcos J. Gomez)
*/

goog.provide('Blockly.Arduino.sensores');

goog.require('Blockly.Arduino');

Blockly.Arduino.ultrasonic_sensor = function() {
  var dropdownPinEcho = this.getFieldValue('ECHO');
  var dropdownPinTrig = this.getFieldValue('TRIG');
  var code = null;
  Blockly.Arduino.setups_['define_pin_echo'] = "pinMode(" + dropdownPinEcho + ", INPUT);";
  Blockly.Arduino.setups_['define_pin_trig'] = "pinMode(" + dropdownPinTrig + ", OUTPUT);";

  Blockly.Arduino.definitions_['measureDistance'] = "long calcularDistancia() {\n" +
    "  long distancia;\n" +
    "  long tiempo;\n" +
    "  digitalWrite(" + dropdownPinTrig + ", LOW); // Para Estabilzar el sensor\n" +
    "  delayMicroseconds(5);\n" +
    "  digitalWrite(" + dropdownPinTrig + ", HIGH); // Enviamos pulso ultrasónico\n" +
    "  delayMicroseconds(10);\n" +
    "  tiempo = pulseIn(" + dropdownPinEcho + ", HIGH); // Medimos pulso ultrasónico \n" +
    "  distancia = int(0.0172 * tiempo); // Formula para calcular la distancia\n" +
    "  if (distancia == 0){\n" +
    "    distancia = 400;\n" +
    "  }\n" +
    "  return distancia;\n" + "}";

  code = "distancia()";

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.both_motors_move = function() {
  var dropdownDirection = this.getFieldValue("DIRECTION");
  var dropdownMotor1A = this.getFieldValue("MOTOR1A");
  var dropdownMotor1B = this.getFieldValue("MOTOR1B");
  var dropdownMotor2A = this.getFieldValue("MOTOR2A");
  var dropdownMotor2B = this.getFieldValue("MOTOR2B");
  var code = null;

  Blockly.Arduino.setups_['define_motors'] =
      "pinMode(" + dropdownMotor1A + ", OUTPUT);\n" +
      "  pinMode(" + dropdownMotor1B + ", OUTPUT);\n" +
      "  pinMode(" + dropdownMotor2A + ", OUTPUT);\n" +
      "  pinMode(" + dropdownMotor2B + ", OUTPUT);\n";
  if(dropdownDirection==="forward")
  {
    Blockly.Arduino.definitions_['define_forward'] =
    "void avanzar()\n"+
    "{\n"+
    "  digitalWrite(" + dropdownMotor1A + ", LOW);\n" +
    "  digitalWrite(" + dropdownMotor1B + ", HIGH);\n" +
    "  digitalWrite(" + dropdownMotor2A + ", LOW);\n" +
    "  digitalWrite(" + dropdownMotor2B + ", HIGH);\n" +
    "}\n";

    code = "avanzar();\n";
   }
   else if (dropdownDirection==="backward")
   {
     Blockly.Arduino.definitions_['define_backward'] =
     "void retroceder()\n"+
     "{\n"+
     "  digitalWrite(" + dropdownMotor1A + ", HIGH);\n" +
     "  digitalWrite(" + dropdownMotor1B + ", LOW);\n" +
     "  digitalWrite(" + dropdownMotor2A + ", HIGH);\n" +
     "  digitalWrite(" + dropdownMotor2B + ", LOW);\n" +
     "}\n";

     code = "retroceder();\n";
   }
   else if (dropdownDirection==="right")
   {
     Blockly.Arduino.definitions_['define_right'] =
     "void girar_derecha()\n"+
     "{\n"+
     "  digitalWrite(" + dropdownMotor1A + ", LOW);\n" +
     "  digitalWrite(" + dropdownMotor1B + ", HIGH);\n" +
     "  digitalWrite(" + dropdownMotor2A + ", HIGH);\n" +
     "  digitalWrite(" + dropdownMotor2B + ", LOW);\n" +
     "}\n";

     code = "girar_derecha();\n";
   }
   else if (dropdownDirection==="left")
   {
     Blockly.Arduino.definitions_['define_left'] =
     "void girar_izquierda()\n"+
     "{\n"+
     "  digitalWrite(" + dropdownMotor1A + ", HIGH);\n" +
     "  digitalWrite(" + dropdownMotor1B + ", LOW);\n" +
     "  digitalWrite(" + dropdownMotor2A + ", LOW);\n" +
     "  digitalWrite(" + dropdownMotor2B + ", HIGH);\n" +
     "}\n";
     code = "girar_izquierda();\n";
   }

   return code;
};
