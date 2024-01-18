Bots2LEarn – selbst fahrender Roboter



# 1. Grundlagen

## 1.1 Was ist ein Arduino?

Ein Arduino ist ein Microcontroller, der darauf spezialisiert ist,
eingehende Signale (Inputs) zu verarbeiten und entsprechend seiner
Programmierung Signale auszugeben (Outputs). Der Arduino kann sowohl
digitale Signale (Spannung an/Spannung aus) als auch analoge Signale
(verschiedene Spannungen) verarbeiten. Dafür besitzt er unterschiedliche
Anschlüsse, die „Pins“ genannt werden. Es gibt verschiedene Varianten
(„Boards“) des Arduino. In diesem Kurs werden wir den Arduino-Nano
verwenden.

## 1.2. Die Arduino IDE
--------------------

Zum Programmieren des Arduinos verwenden wir die Arduino IDE. Diese
findet ihr unter:
[Download](https://www.arduino.cc/en/software#download)

Wählt hier die für euer Betriebssystem passende Version aus und ladet
sie herunter.

Ihr öffnet die IDE mit einem Doppelklick auf die Desktop-Verknüpfung.
Danach öffnet sich das folgende Fenster:

![](./IMAGES/image1.png)

***Abbildung 1: Das Fenster der IDE***


## 1.3 Aufbau eines Programms


In jedem neu geöffneten Programm („sketch“) befindet sich bereits der
folgende Code:

Abbildung 2: Grundstruktur eines Arduinoprogramms

Ein Arduino-Programm hat mindestens zwei Abschnitte: Das setup und die
loop. Über dem setup können Variablen definiert und libraries importiert
werden. Ihr könnt später eure Programme mit eigenen Abschnitten
(„Funktionen“) erweitern.

```cpp
setup
```

Alle Befehle des Setups werden nur einmal zu Beginn des Programms
ausgeführt. Dazu gehört unter anderem das Initialisieren der Pins und
des Seriellen Monitors.

```cpp
loop
```

Die Befehle der Loop („Schleife“) werden nach einmaliger Ausführung des
Setups endlos wiederholt. In der Loop befindet sich das eigentliche
Programm, also die Aktionen die der Arduino durchführen soll.

## 1.4 Erste Schritte


### 1.4.1 Das erste Programm

Das erste Programm, welches ihr selber schreiben sollt, soll die LED auf
dem Arduino-Board blinken lassen.

Material: Arduino Nano, Verbindungskabel

Im Setup fügt ihr den Befehl

```cpp
pinMode(13,OUTPUT);

hinzu. Mit dem Befehl pinMode() legt ihr fest, welche Pins ihr verwenden
wollt, und ob diese Pins Input oder Output sind.

In der loop fügt ihr die Befehle:

digitalWrite(13,HIGH);

delay(1000);

digitalWrite(13,LOW);

delay(1000);
```
hinzu. Der Befehl digitalWrite() wird benutzt, um die digitalen Pins des
Arduino anzusteuern. Angegeben wird der Pin, der angesteuert werden soll
und den Zustand, den der Pin annehmen soll. Digitale Pins können die
Zustände HIGH oder LOW annehmen.

Mit delay() könnt ihr Pausen in euer Programm einfügen. Dazu gebt ihr
eine Zeitspanne in Millisekunden an. Eine Sekunde sind 1000
Millisekunden.

Das Fenster der IDE sollte nun so aussehen:

Nun klickt ihr auf das Häkchen links oben. Anschließend wird sich ein
Fenster öffnen, dass von euch verlangt euer Programm zu speichern. Wählt
einen aussagekräftigen Namen aus und speichert das Programm unter einem
sinnfollen Namen ( LED\_Blinken\_lassen). Achtet dabei darauf keine
Sonderzeichen, Lerzeichen oder umlaute zu nutzen. Jetzt steht in der
Zeile unter eurem Code „Kompilieren abgeschlossen.“ Kompilieren
bedeutet, dass der Computer das Programm so übersetzt, dass der Arduino
es auch versteht.

Anschließend verbindet ihr euren Arduino über das Verbindungskabel mit
eurem Computer. Nun müsst ihr nur noch der IDE mitteilen, wo der Arduino
angeschlossen ist. Dazu klickt ihr auf „Werkzeuge“. Stellt sicher, dass
bei „Board“ der passende Arduino ausgewählt ist (meist der Arduino Uno).
Direkt darunter, bei „Port“ müsst ihr den Anschluss auswählen.

Jetzt seid ihr bereit, das Programm hochzuladen. Klickt dazu auf den
Pfeil nach rechts, direkt neben dem Häkchen.

Nachdem das Programm hochgeladen wurde (dies dauert einige Sekunden),
sollte die LED auf dem Arduino-Board blinken, mit jeweils einer Sekunde
leuchten und einer Sekunde Pause.

###

### 1.4.2 Eine LED am Breadboard

Für eure erste Schaltung sollt ihr eine LED auf dem Breadboard mit dem
Arduino ansteuern.

Material: LED, Widerstand mit 100Ω oder 200Ω, Breadboard, Jumperkabel,
Arduino Nano, Verbindungskabel

Steckt zunächst die LED auf dem Breadboard fest. Achtet dabei darauf,
dass die beiden Drähte (Pole) der LED nicht über das Breadboard
verbunden sind. Verbindet einen Pol des Widerstands mit dem kürzeren
Bein (Minuspol) der LED.

Anschließend verbindet ihr das längere Bein (der Pluspol) der LED mit
einem digitalen Pin und den zweiten Pol des Widerstands mit einem der
GND-Pins.

Abbildung 3: Schaltbild 1.4

Als Programm benutzen wir den Sketch aus 1.4.1. Entweder ihr schließt
die LED an Pin 13 an, oder ihr verwendet einen anderen Pin. Letzteres
bedeutet aber, dass ihr im Programm die Pinnummer ändern müsst.

# 2. Bauteile am Roboter


## 2.1 Fotowiderstand


### 2.1.1 Exkurs: Ohmsches Gesetz und Reihenschaltung

In einem Stromkreis werden drei verschiedene Werte unterschieden: Die
Spannung (U), der Strom (I) und der Widerstand (R). Verändert sich einer
der Werte, hat das auch Einfluss auf die anderen Werte. Diese
Veränderungen werden durch das Ohmsche Gesetz beschrieben.

```
*U* = *R* • *I*  
```

Eine Möglichkeit, Widerstände in einer Schaltung zu kombinieren nennt
sich Reihenschaltung. Die besondere Eigenschaft der Reihenschaltung ist,
dass der Strom durch die Widerstände gleichbleibt, sich aber die
Spannung verändert. Eine solche Schaltung mit zwei Widerständen
bezeichnet man auch als Spannungsteiler.

### 2.1.2 Den Fotowiderstand benutzen

Material: Arduino Nano, Breadboard, Fotowiderstand, 1x 1kΩ Widerstand,
Breadboardkabel

Um die Lichtstärke mit einem Fotowiderstand zu messen benötigen wir
einen Spannungsteiler. Dieser besteht aus einem festen Widerstand von
1000Ω und dem Fotowiderstand. Der Fotowiderstand wird am ersten Kontakt
mit dem Pin 5V, am zweiten Kontakt mit einem analogen Pin und dem festen
Widerstand verbunden. Der zweite Kontakt des festen Widerstands wird mit
dem Pin GND verbunden.

Abbildung 4: Schaltbild 2.1

Um die Werte des Fotowiderstands auslesen zu können benötigen wir einen
weiteren Befehl: analogRead(). Mit analogRead() lassen sich analoge Pins
auslesen. Das Ergebnis ist eine ganze Zahl im Bereich von 0 bis 1023.

```cpp
int variablenname=analogRead(Pinnummer);
```

Die Nummern von analogen Pins beginnen stets mit einem „A“.

Ein Programm zum Auslesen eines Fotowiderstandes sieht zum Beispiel so
aus:

Wenn ihr dieses Programm ausführt, liest der Arduino den Wert an Pin A3
aus. Allerdings erfahren wir nicht, welcher Wert ausgelesen wird, bzw.
wie sich der ausgelesene Wert (und damit die Lichtverhältnisse) ändern.
Damit wir die Werte lesen können benötigen wir den Seriellen Monitor.
Mit diesem kann man während der Ausführung des Programms die Werte von
Variablen und sogar Texte auf dem Bildschirm ausgeben lassen.

Zunächst muss der Serielle Monitor initialisiert werden. Dazu schreibt
ihr den Befehl:

```cpp
Serial.begin(9600);
```

In das setup. Um den Wert auszugeben ergänzt man die loop um den Befehl:

```cpp
Serial.println(wert);
```

Nun ladet ihr das Programm auf den Arduino hoch. Erst wenn das Hochladen
abgeschlossen ist könnt ihr den Seriellen Monitor öffnen. Dies geht über
den Menüpunkte „Werkzeuge“-&gt; „Serieller Monitor“ oder über dieses
Symbol rechts oben im Programmfenster:

Die Werte die der Arduino ausliest werden nun in Echtzeit ausgegeben,
viel zu schnell um sie zu lesen. Wir ergänzen daher die Loop um einen
delay-Befehl mit 100ms Dauer. Der Arduino führt nun nur noch ca. 10
Messungen pro Sekunde durch, wodurch wir die Werte besser ablesen
können.

## 2.2 Ultraschallsensor

Material: Arduino Nano, Breadboardkabel, Ultraschallsensor

Ein Ultraschallsensor wird verwendet, um Entfernungen zu messen. Er
sendet aus einem seiner „Augen“ (Pötte) einen Ultraschallimpuls. Dieser
prallt von Hindernissen vor dem Ultraschallsensor ab und wird vom
anderen „Auge“ des Sensors empfangen. Mit der Zeit, die zwischen diesen
Impulsen vergeht sowie der Schallgeschwindigkeit lässt sich die Distanz
zum Hindernis ausrechnen. ´

Der Ultraschallsensor besitzt 4 Anschlüsse. Wir verbinden den Anschluss
VCC mit 5V am Arduino, GND mit GND und Trig und Echo mit jeweils einem
digitalen Pin. Im Setup definieren wir Trig (kurz für „Trigger“) als
Output und Echo als Input.

Abbildung 5: Schaltbild 2.2

Um die Entfernung zu messen schalten wir zunächst den Trigger-Pin für
eine kurze Zeit auf LOW, und danach für 10ms auf HIGH, um einen
Ultraschallimpuls auszusenden.

Mit dem Befehl pulseIn() wird die Zeit gemessen, bis der Echo-Pin ein
Signal empfängt:
