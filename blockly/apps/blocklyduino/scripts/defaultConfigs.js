Blockly.Arduino.Placas = {};

Blockly.Arduino.Placas.duinobot23 = {
    correccionDireccionMotores: '',
};

Blockly.Arduino.Placas.duinobot12 = {
    correccionDireccionMotores: '',
};

//Defaults
Blockly.Arduino.configuracion = {
    placa: Blockly.Arduino.Placas.duinobot23,
    pinIR: "A0",
    pinUS: "A1",
    pinLI: "A2",
    pinLD: "A3",
};

function guardarConfig(){
    pines = ["pinIR", "pinUS", "pinLI", "pinLD"];
    pines.forEach(function(pin){
        Blockly.Arduino.configuracion[pin] = document.getElementById(pin).value;
    });
    Blockly.Arduino.configuracion.placa = Blockly.Arduino.Placas[document.getElementById('placa').value];
}

