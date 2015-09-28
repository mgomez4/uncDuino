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
 * @fileoverview Helper functions for generating n6 robotgroup code.
 * @author mgomez4@famaf.unc.edu.ar (Marcos J. Gomez)
*/

goog.provide('Blockly.Arduino.n6_blocks');

goog.require('Blockly.Arduino');

Blockly.Arduino.n6_ultrasonic_sensor = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var dropdown_unit = this.getFieldValue('UNIT');
  Blockly.Arduino.definitions_['define_ultrasonic'] = '#include <Ping.h>\n';
  Blockly.Arduino.definitions_['var_ultrasonic'+dropdown_pin] = 'PingSensor ultrasonic_'+dropdown_pin+'('+dropdown_pin+');\n';
  var code;
  if(dropdown_unit==="cm"){
     //Blockly.Arduino.setups_['setup_ultrasonic_'+dropdown_pin] = 'ultrasonic_'+dropdown_pin+'.MeasureInCentimeters();';
     code = 'ultrasonic_'+dropdown_pin+'.measureCM()';
   }
   else {
     //Blockly.Arduino.setups_['setup_ultrasonic_'+dropdown_pin] = 'ultrasonic_'+dropdown_pin+'.MeasureInInches();';
     code = 'ultrasonic_'+dropdown_pin+'.measureInches()';
   }

   return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.n6_infrared_sensor = function() {
  var dropdown_pin = this.getFieldValue("PIN");

  Blockly.Arduino.setups_["setup_infrared"] = "pinMode(" + dropdown_pin + ", INPUT);\n";
  var code = "";
  code = "analogRead(" + dropdown_pin + ")\n";

  return code;
};

Blockly.Arduino.n6_one_motor_move = function() {
  var motor = this.getFieldValue('MOTOR');
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';

  Blockly.Arduino.definitions_['define_DCmotor'] = '#include <DCMotor.h>\n';

  if(motor === "motor0"){
 	  Blockly.Arduino.definitions_['define_motor0'] = "DCMotor motor0(M0_EN, M0_D0, M0_D1);\n";
    var code = "motor0.setSpeed("+speed+");\n";
  }
  else{
    Blockly.Arduino.definitions_['define_motor1'] = "DCMotor motor1(M1_EN, M1_D0, M1_D1);\n";
    var code = "motor1.setSpeed("+speed+");\n";
  }
  Blockly.Arduino.setups_["setup_motor"] = "motor1.setClockwise(false);\n "

  return code;
};

Blockly.Arduino.n6_both_motors_move = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION');
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';
  var code = "";

  Blockly.Arduino.definitions_['define_DCmotor'] = "#include <DCMotor.h>\n"
  Blockly.Arduino.definitions_['define_motor0'] = "DCMotor motor0(M0_EN, M0_D0, M0_D1);\n";
  Blockly.Arduino.definitions_['define_motor1'] = "DCMotor motor1(M1_EN, M1_D0, M1_D1);\n";

  Blockly.Arduino.setups_["setup_motor"] = "motor1.setClockwise(false);\n "

  if(dropdown_direction==="forward")
  {
    Blockly.Arduino.definitions_['define_forward'] = "void avanzar()\n"+
    "{\n"+
    "  motor0.setSpeed("+speed+");\n"+
    "  motor1.setSpeed("+speed+");\n"+
    "}\n";
    code="avanzar();\n";
   }
   else if (dropdown_direction==="right")
   {
     Blockly.Arduino.definitions_['define_right'] = "void girar_derecha()\n"+
     "{\n"+
     "  motor0.setSpeed(0);\n"+
     "  motor1.setSpeed("+speed+");\n"+
     "}\n\n";
     code="girar_derecha();\n";
   }
   else if (dropdown_direction==="left")
   {
     Blockly.Arduino.definitions_['define_left'] = "void girar_izquierda()\n"+
     "{\n"+
     "  motor0.setSpeed("+speed+");\n"+
 	   "  motor1.setSpeed(0);\n"+
     "}\n\n";
     code="girar_izquierda();\n";
   }
   else if (dropdown_direction==="backward")
   {
     Blockly.Arduino.definitions_['define_backward'] = "void retroceder()\n"+
     "{\n"+
     "  motor0.setSpeed(-"+speed+");\n"+
 	   "  motor1.setSpeed(-"+speed+");\n"+
     "}\n\n";
     code="retroceder();\n";
   }
   else if (dropdown_direction==="stop")
   {
     Blockly.Arduino.definitions_['define_stop'] = "void frenar()\n"+
     "{\n"+
     "  motor0.setSpeed(0);\n"+
 	   "  motor1.setSpeed(0);\n"+
     "  delay(1000);\n"+
     "}\n\n"
     code="frenar();\n";
   }
   return code;
};

Blockly.Arduino.n6_run_button = function(){

  var button_run = this.getTitleValue('STAT');
  Blockly.Arduino.setups_['setup_button'] = 'pinMode(RUN_SW, INPUT_PULLUP);\n';
  if (button_run === 'ON'){
  var code = '!(digitalRead(RUN_SW))';
  }else{
  var code = '(digitalRead(RUN_SW))';
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];

};
