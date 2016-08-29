VERSION=1.0.6
NOMBRE="UNC++Duino"
PATHNWLINUX="/opt/nwjs-v0.12.3-linux-x64"
PATHNWWINDOWS="/opt/nwjs-v0.12.3-win-ia32"

compilar:
	python buildUNCDuino.py

zipear:
	mkdir -p compilados
	rm -f compilados/${NOMBRE}.nw
	cd src && zip -r ../compilados/${NOMBRE} *
	mv compilados/${NOMBRE}.zip compilados/${NOMBRE}.nw

empaquetarLinux: zipear
	rm -rf compilados/linux
	mkdir -p compilados/linux
	cp compilados/${NOMBRE}.nw compilados/linux
	cp -r ${PATHNWLINUX}/* compilados/linux
	rm compilados/linux/credits.html
#	cd compilados/linux && cat ${NWEBKIT} ../${NOMBRE}.nw > ${NOMBRE} # No lo puedo hacer andar
	echo "./nw ${NOMBRE}.nw" > compilados/linux/${NOMBRE}.sh # Esto esta porque no puedo hacer andar lo de arriba
	chmod +x compilados/linux/${NOMBRE}.sh

empaquetarWindows: zipear
	rm -rf compilados/windows
	mkdir -p compilados/windows
	cp -r ${PATHNWWINDOWS}/* compilados/windows
	rm compilados/windows/credits.html
	cd compilados/windows && cat nw.exe ../${NOMBRE}.nw > ${NOMBRE}.exe
	rm compilados/windows/nw.exe
	# rm -rf ~/Descargas/UNCWindows
	cp -rf compilados/windows/* ~/Descargas/UNC++Duino-Windows # Para test de Alf

full: compilar zipear empaquetarLinux

.PHONY: compilar
