Arduino = {
    placas: {},
    enviadores: [],
    //Constructores
    Placa: function(idHW){
        this.idHW = idHW;
        this.correccionDireccionMotores = '';
    },

    elegirEnviador: function(){
        this.enviadores.forEach(function(CEnv){
            var env = new CEnv();
            if(env.corresponde()){
                this.enviador = env;
            }
        }.bind(this));
    },
};

Arduino.EnviadorOS = function(){
    this.nombreArchivoIno = 'programa';
}
Arduino.EnviadorOS.prototype = {
    escribirProgramaADisco: function(){
        var fs = require('fs');
        fs.mkdir(this.pathDirIno(), 0777, function(err) {
            if (err && err.code != 'EEXIST') {
                throw "No se pudo crear la carpeta del programa"
            } else {
                fs.writeFileSync(this.pathArchivoIno(), Blockly.Arduino.workspaceToCode(Blockly.mainWorkspace));
                console.log("Archivo creado en" + this.pathArchivoIno());
            }
        }.bind(this));
        
        
    },
    enviar: function(){
        var exec = require('child_process').exec;
        console.log("Comando corriendo:" + this.comando());
        exec(this.comando(), function(error, stdout, stderr) {
            console.log("Salida del comando:\n" + stdout + "\n");
            if(error){console.log("Salida de error:\n" + stderr + "\nError completo:\n" + error + "\n")};
            popup('popupEnviar');
        });
    },
    pathArchivoIno: function(){
        var path = require('path');
        return path.resolve(this.pathDirIno(), this.nombreArchivoIno + '.ino' )
    },
    
    pathDirIno: function(){ //Arduino requiere que para compilar la carpeta y el archivo se llamen igual
        var path = require('path');
        return path.resolve(path.dirname(process.execPath), this.nombreArchivoIno );
    },

    addPropsFrom: function(otherObj){ //FEEEOOOOO Esto es por la falta de herencia. TODO.
        for(attrname in otherObj){
            this[attrname] = otherObj[attrname];
        }
        return this;
    }
};

Arduino.EnviadorWindows = function(){};

Arduino.EnviadorWindows.prototype = (new Arduino.EnviadorOS()).addPropsFrom( {
    corresponde: function(){
        if(typeof require === 'undefined') return false;
        var os = require('os');
        return os.platform() === 'win32'; // && (process.arch === 'x64' || process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432'));

    },
    comando: function(){
        return '"' + this.path + '" -v --port ' + Arduino.puerto + ' --board multiplo:avr:' + Arduino.placaElegida.idHW + ' --upload "' + this.pathArchivoIno() + '" ';
    },
});


//Defaults
Arduino.enviadores = [Arduino.EnviadorWindows];
Arduino.elegirEnviador();
if (Arduino.enviador){
    var path = require('path');
    Arduino.enviador.path = path.resolve(path.dirname(process.execPath),'arduino-1.6.5-r5','arduino_debug.exe');
};
Arduino.placas.duinobot23 = new Arduino.Placa("DuinoBotv2x_1284_HID");
Arduino.placas.duinobot23.correccionDireccionMotores = "motor1.setClockwise(false);\nmotor0.setClockwise(false);\n ";
Arduino.placas.duinobot12 = new Arduino.Placa("DuinoBotv1x_HID");
Arduino.placas.duinobot12.correccionDireccionMotores = "motor1.setClockwise(false);\n ";
Arduino.placaElegida = Arduino.placas.duinobot23;
Arduino.puerto = "COM1";

Blockly.Arduino.configuracion = {
    placa: Arduino.placaElegida,
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
    Blockly.Arduino.configuracion.placa = Arduino.placas[document.getElementById('placa').value];
    Arduino.puerto = document.getElementById('puerto').value;
}

function enviarAlRobot(){
    if(!Arduino.enviador){
        window.alert("BUUHH... Por algún problema no se puede enviar el código al robot. Vas a tener que copiar manualmente el código de la solapa \"Arduino\" al programa Arduino IDE")
        return;
    };
    Arduino.enviador.escribirProgramaADisco();
    Arduino.enviador.enviar();
}



