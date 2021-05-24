# Going on a quizt

## Setup Backend & Frontend
Auf Root Ebene von Frontend/Backend jeweils "npm i" in der Konsole ausführen um die abhängigen Node Pakete zu installieren. 

## Starten der Applikation
Mit "npm start" wird das jeweilige End gestartet.
Das Frontend verwendet expo, welches im Web-browser geöffnet wird. 
Falls Android Studio installiert ist, kann die Applikation darauf simuliert werden.

## Anpassungen Frontend
Damit das Frontend mit dem Backend kommunizieren kann, muss im Frontend folgende Anpassung gemacht werden:
unter frontend/src/components/ducks.ts "const IP: string = "172.24.112.1";" durch die entsprechende lokale IP-Adresse ersetzt werden.

## Starten im Browser
Die Startseite, die durch Expo aufgerufen wird, dient als Navigation.
Mit dem Button Run in web browser, kann die Applikation ohne Android Studio gestartet werden.

## Simulation mit Android Studio
Für das Simulieren auf dem Smartphone kann die Software "Android Studio" verwendet werden.
Nach dem Start:
    - Configure
    - AVD Manager
    - (optional) Create Virtual Device
    - Wunschgerät mit Android 11 starten
    - Im Expo Browser "Run on Android device/emulator" starten

## Problembehandlung
Teilweise sind die Pakete nicht richtig konfiguriert.
Löschen der Node Modules, neu Installieren mit "npm install"
Sonst zusätzlich "npm audit fix"