---
id: odmr_experiment_ger
title: ODMR – Optically Detected Magnetic Resonance (Deutsch)
---


## ODMR – Optically Detected Magnetic Resonance (Deutsch)

![](./IMAGES/image1.png)

![](./IMAGES/image2.png)

![](./IMAGES/image3.jpeg)

# Inhaltsverzeichnis

* 02 – Sicherheitshinweise
* 05 – Experimente mit den Optik-Würfeln
* 06 – Teileliste
* 07 – Bling bling – Luxus im Physiklabor (NV-Diamanten)
* 08 – Anleitung Experiment
* 13 – Technologie in der Anwendung

# SICHERHEITSHINWEISE

## Laser

* Der Laser wird nur eingeschaltet, wenn er sich auf der Grundplatte befindet.
* Der Laser wird jedes Mal ausgeschaltet, wenn er neu positioniert wird.
* Vor dem Einschalten wird überprüft, in welche Richtung sich der Strahl ausbreitet. Der Laserstrahl sollte immer parallel zur Tischplatte verlaufen.
* Reflektierender Schmuck wird abgelegt oder abgeklebt, insbesondere Ringe, Uhren, Armbänder.
* Reflektierende Gegenstände werden vom Tisch entfernt (Etui, Geodreieck, Lineal, Geldbörse, Handy).

## Magnete

* Personen mit Implantaten informieren die Lehrperson. Eventuell müssen besondere Vorkehrungen getroffen werden.
* Geräte wie Handy, Tablet, Computer, EC-Karte vom Tisch entfernen oder fernhalten.
* Lose Magnete dürfen niemals verschluckt werden. Lehrkraft informieren, falls sich ein Magnet löst.

## Optik-Würfel

* Alle goldenen Teile sind Funktionsbauteile.
* Weiße Bauteile dienen der Einstellung der Funktionsbauteile.

![](./IMAGES/image4.jpeg)

# Was ist ODMR?

Optisch detektierte magnetische Resonanz ist ein Verfahren, bei dem der Spinzustand eines Systems ("magnetisch") durch Mikrowellenstrahlung manipuliert wird ("Resonanz"). Dieser Zustand kann durch Beleuchtung mit Laserlicht und der daraus resultierenden Fluoreszenz gemessen werden ("optisch detektiert").

Die Frequenz der Mikrowellenstrahlung, bei der Resonanz auftritt, hängt direkt von der Magnetfeldstärke ab. So kann ein Magnetfeld präzise bestimmt werden.

![](./IMAGES/image5.png)

# Teileliste

1. Grundplatte
2. Laserdiode, grün
3. 45° Spiegel (2x)
4. Strahlteiler mit Filter
5. Linse
6. Lichtsensor
7. Steuerkasten Elektronik
8. XY-Stage mit NV-Diamanten
9. Schirm
10. Farbfilter
11. Magnet

![](./IMAGES/image6.png)

![](./IMAGES/image7.png)

## NV-Diamanten

NV steht für Nitrogen-Vacancy, also Stickstoff-Fehlstelle. Es handelt sich um einen Diamanten mit einer besonderen "Verunreinigung", meist an einer pinken Färbung erkennbar.

### Wie entstehen NV-Diamanten?

Diamanten bestehen aus Kohlenstoffatomen in einem Gitter. Bei einem NV-Diamanten fehlt ein Kohlenstoffatom, dafür sitzt dort ein Stickstoffatom. Neben diesem entsteht eine Vakanz.

![](./IMAGES/image8.png)

![](./IMAGES/image9.jpeg)

### Was ist das Besondere an NV-Diamanten?

* Die Spin-Zustände können durch Laser, Magnetfelder und Mikrowellenstrahlung manipuliert und ausgelesen werden.
* NV-Zentren sind bei Raumtemperatur stabile Quantensysteme und daher potenziell nutzbar für Quantencomputer.

![](./IMAGES/image11.png)

![](./IMAGES/image12.png)

* Baue den Aufbau wie abgebildet.
* Justiere den Laser so, dass er die Linse mittig trifft.
* Justiere die XY-Stage so, dass der Diamant im Fokus der Linse liegt.
* Der Diamant sollte durch den roten Filter hell leuchten.

![](./IMAGES/image13.png)

* Ergänze den Aufbau wie auf der Abbildung.
* Verbinde dich mit der Benutzeroberfläche des Lichtsensors.

![](./IMAGES/image14.png)

* Justiere den 45°-Spiegel, sodass möglichst viel Licht in den Lichtsensor fällt.

![](./IMAGES/image14.png)

* Schließe die Mikrowellenantenne an den Steuerkasten an.
* Baue den Magnetwürfel ein.
* Überprüfe Veränderungen der Lichtintensität bei Positionsänderung.

![](./IMAGES/image15.png)

## Wird die Technologie heute schon eingesetzt?

NV-Diamanten finden Anwendung in der Grundlagenforschung und in Prototypen für ODMR. Eine kommerzielle Nutzung ist noch nicht etabliert.

## Was erhofft man sich?

* Einsatz als Quantensensoren (z. B. Temperatur, Magnetfelder, pH-Werte in Zellen)
* Anwendung in der Nuklearen Magnetresonanz (Ergänzung zur MRT)
* Nutzung als stabile, manipulierbare Qubits in Quantencomputern

# Das Verbundprojekt QuantumMiniLabs

## Motivation

Quantentechnologien sind für viele Menschen unzugänglich und abstrakt. Selbst an Hochschulen sind entsprechende Experimente oft nur mit großem Aufwand möglich.

Ziel des odmr Aufbaus bis zu verstehen wie wir Magnetfelder optisch vermessen können durch die Reduktion von floristenz im Resonanz Fall bei dem Mikrowellen mit einem Diamanten interagieren.
Dieser Effekt interessant dafür um Magnetfelder indirekt über eine optische auslesung der präzise zu vermessen. Darüber hinaus eine Anwendung in XX
Was wir konkret vermessen ist die Resonanz der störstelle eines Diamanten mit nv-zentrum. Hierzu haben wir kleine Diamanten mit einem Durchmesser von ungefähr 100 newtonmetern und mehreren nv-stellen auf einer leiterplatte die als Antenne dient platziert und Regen diese mit einem laserlicht deiner bestimmten Wellenlänge an. Bereits ohne eine anliegende Mikrowelle können wir die floristenz des Diamanten ausmessen. Das heißt wir regen den Diamanten mit grünem Licht 532 nanometer und können die Emissionen im roten mit über 600 nanometer messen. Kernidee ist nun dass wir beim Anlegen einer Mikrowelle den seemann-effekt beobachten können indem wir den spin-flip aufteilen in einen negativen und positiven Anteil wobei sich die Reduktion der Fluoreszenz symmetrisch zum jeweils negativen und positiven Teil der Öffentlichkeit vom positiven oder negatives spin verschiebt.


Der optische Aufbau ist relativ einfach gehalten. Er folgt dem eines konfokalen Laser fluoreszenzmikroskops. Die Idee ist dass wir mit einem laserpointer der einen kuliniertes monochromatisches Licht aus senden mit einer hohen Intensität nach Fokussierung auf einen Punkt hernehmen und mit dieser Energie eine Anregung von Elektronen im grundzustand eines Diamanten in einen angeregten S1 Zustand überführen. Internet Gitter Vibrationen oder auch phononem genannt relaxiert das Elektronen von einem reduzierten energieniveau aus dem S1 Zustand zurück in den grundzustand S0. Diese Reduktion der Energie macht sich in einem farbshift bemerkbar. Auch stokesshift bezeichnet. Es werden also kontinuierlich Elektronen in einen angeregten Zustand gebracht wobei diese dann wieder in einen grundzustand zurückfallen und eine fluoreszente und somit sichtbare Strahlung aussenden.


Im nächsten Schritt legen wir nun eine zusätzliche energiequelle an wobei wir mit einer deutlich reduzierteren Energie Arbeiten werden. Das Meer zustandsystem des Diamanten mit nv-zentrum hat noch einen zusätzlichen Zustands mit einer energiedifferenz von 2,87 GHz dass ich umwandelt oder umrechnet in Joule. Es ist also nun möglich ähnlich wie mit einer laserlichtquelle die Elektronen vom grundzustand in den angehobenen Zustand des Name ich gerade nicht weiß. Zu versetzen. Die Elektronen relaxierem von da aus quasi sofort wieder zurück in den grundzustand. Wenn wir diese zusätzliche Energie die die Elektronen in den zwischenzustand versetzen aber nun kombinieren mit der zusätzlichen Energie eines Lasers der ebenfalls die Elektronen in einen angeregten höheren Zustand versetzen kann dann sind die Elektronen in einem Zustand von dem sie nicht mehr finanzierend übergehen können. Es folgt somit ein nicht florescenter Übergang über den triple-zustand. Wenn wir also nur die Summe aller übergänge von grundzustand über S1 Zustand zurück in den grundzustand und vom mittelzustand über den angeregten Zustand über den triple-zustand in den grundzustand Betrachten fällt auf dass eine gerade an nicht fluoreszenden übergängen ansteigt was dazu führt dass die effektive touristenz bzw die Anzahl an erzeugten Photonen reduziert wird. Das passiert eben genau bei der resonanzfrequenz des nv-zentrums wo wir genau die energiedifferenz vom grundzustand in den mittelzustand überbrücken.

Der Aufbau funktioniert so dass wir den laserpointer am Ende auf den Diamanten fokussieren müssen und sie mit einem fotodetektor auslesen müssen. Wir nehmen also nun den laserpointer her der einen polimiertes grünes Licht aussendet was dazu führt dass der Strahl parallel aus dem Gehäuse des laserpointers herausgeht. Wir lenken den Strahl mit einem sogenannten kinematischen und somit einstellbaren Spiegel um 45° um und richten ihn auf einen sogenannten dikroetischen strahlteiler. Dieses besondere Stück Glas relativ Fähigkeit bestimmte wellenlängen zu reflektieren und andere wellenlängen zu transmittieren.

 In unserem Fall ist der Spiegel bzw der Filter reflektiv für grünes Licht und lässt rotes Licht durch. Der grüne Strahl reflektiert also und wird von einer sammellinse fokussiert eine sammellinse fokussiert Licht aus dem unendlichen bzw einen parallelo strahlende immer in der brennweite Punkt hier verwenden wir eine Linse mit 40mm brennweite wobei der Fokus direkt auf der Platine liegt mit einer XYZ stage können wir nun die Platine so bewegen dass wir den fokuspunkt möglichst klein auf der Platine wählen und den und einen von den drei Diamanten auf der Platine direkt im Fokus der Stahls wissen. Rote Filter in einer der insels hilft dir dabei den kleinen roten Punkt auf der Platine zu sehen indem er das grüne Licht linksherum abblockt.
Das Licht was von dem Diamanten in fluoreszentes rotes Licht konvertiert wird wird dann wieder von der gleichen Linse durch die wir auch schon das rote Licht geschickt haben aufgesammelt und rückwärts kolimiert. Verzicht geht also nun wieder auf den die kroatischen streithalle dazu wobei der strahlteile nun transparent wirkt für das Rotlicht. Ein zusätzlicher roter Filter absorbiert unnötiges hintergrundrauschen z.b Reflexionen des grünen lasers um die Sensitivität zu erhöhen.. nun geht das Licht auf einen umlen Spiegel mit dem wir ebenfalls noch einmal den Strahl einstellen können auf eine Kombination aus Linse und fotodiode. Dieses Modul ist so aufgebaut dass das Licht aus dem unendlichen mit einer zusätzlichen sammellinse direkt auf der Foto die oder abgebildet wird sie sind also auf der fotodiode konfokal also quasi mit dem Fokus was heißt dass wir Focus von der Probe auf dem Fokus der Diode abbilden.

Wenn wir nun das Experiment in der web App durchführen passiert folgendes, wir schalten die Mikrowelle an für unterschiedliche Frequenzen Starten von z.b 2,8 gigahertz und fahren die Werte mit 0, 01 gigahertz Schritten durch bis 2,9 GHz. Dazu messen wir parallel die fotodiode aus und vermessen die Intensität zu jeder Frequenz. Was sie nun beobachten können ist der charakteristische dip um die resonanzfrequenz herum. Legen wir nun ein externes Magnetfeld an spaltet sich diese Frequenz in einen positiven und negativen Betrag um die resonanzfrequenz um hier näher wir mit dem Magneten an den Diamanten kommen desto größer ist die Aufspaltung der Frequenzen bzw der spins.

Was haben wir gelernt?
Was ist das für eine Anwendung in der realen Welt?

Highlighte die wichtigsten Aspekte

## Ziele und Vorgehen

Ein Open-Source-Ökosystem wird entwickelt, das günstige, skalierbare, modulare und reparierbare Quantentechnologie-Experimente ermöglicht. 100 Lernorte in Deutschland sollen damit ausgestattet werden.

## Innovation und Perspektiven

![](./IMAGES/image16.png)
![](./IMAGES/image17.png)

QuantumMiniLabs bieten erstmals eine kostengünstige DIY-Umgebung für Experimente mit Quantensystemen der zweiten Generation. NV-Diamanten erlauben stabile Experimente bei Raumtemperatur.

Ziel ist eine weitreichende Verbreitung, um eine kritische Masse an Nutzenden zu erreichen und das Projekt nachhaltig weiterzuführen.

![](./IMAGES/image18.png)
![](./IMAGES/image3.jpeg)
