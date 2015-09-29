VERSION=0.0.1
NOMBRE="UNC++Duino"
PATHNW="/opt/node-webkit-v0.8.6-linux-x64"
NWEBKIT=${PATHNW}"/nw"

compilar:
	python buildUNCDuino.py
	
zipear:
	mkdir -p compilados
	cd src && zip -r ../compilados/${NOMBRE} *
	mv compilados/${NOMBRE}.zip compilados/${NOMBRE}.nw

nwLinux: zipear
	rm -rf compilados/linux
	mkdir -p compilados/linux
	cp compilados/${NOMBRE}.nw compilados/linux
	cp -r ${PATHNW}/* compilados/linux
	rm compilados/linux/credits.html
#	cd compilados/linux && cat ${NWEBKIT} ../${NOMBRE}.nw > ${NOMBRE} # No lo puedo hacer andar
	echo "nw ${NOMBRE}.nw" > compilados/linux/${NOMBRE}.sh # Esto esta porque no puedo hacer andar lo de arriba
	chmod +x compilados/linux/${NOMBRE}.sh
	
	

full: compilar zipear empaquetarLinux
	
.PHONY: compilar
