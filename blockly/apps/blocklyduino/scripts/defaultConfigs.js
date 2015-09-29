Blockly.Arduino.configuracion = {
    placa: "duinobot23",
    pinIR: "A0",
    pinUS: "A1",
    pinLI: "A2",
    pinLD: "A3",
};

function guardarConfig(){
    pines = ["pinIR", "pinUS", "pinLI", "pinLD"];
    for (var i = pines.length - 1; i >= 0; i--) {
        Blockly.Arduino.configuracion[pines[i]] = document.getElementById(pines[i]).value;
    };
}

