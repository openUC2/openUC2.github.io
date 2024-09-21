# Technische Spezifikationen

#### **Elektronische Komponenten**

Das OASIS-Mikroskop basiert auf einer Vielzahl von elektronischen Komponenten, die für den autonomen Betrieb, die Steuerung der Motoren, der Beleuchtung und der Kamera sorgen. Im Folgenden werden die einzelnen Komponenten und deren Funktionen im Detail beschrieben. OASIS verwendet eine ausgeklügelte Kombination aus **12V-Stromversorgung**, **ESP32-Mikrocontroller** und **Raspberry Pi 5**, um eine präzise Steuerung der Motoren, Beleuchtung und Kamera zu ermöglichen. Mit der **Monochrome USB 3 Kamera** und der flexiblen **LED-Beleuchtung** bietet das System eine hohe Bildqualität und vielseitige Anwendungsmöglichkeiten, insbesondere in der **Meeresbiologie** und **ökologischen Forschung**. Alle elektronischen Komponenten sind sorgfältig aufeinander abgestimmt, um einen robusten, autonomen Betrieb zu gewährleisten.   

##### **1. Stromversorgung**
Um das Mikroskop mit der erforderlichen Spannung zu versorgen, verwenden wir ein **12V Netzteil** der Firma **Minol**, welches die Netzspannung von 230V auf 12V reguliert. Das Netzteil hat eine maximale Ausgangsleistung von 5A, was ausreichend ist, um alle elektronischen Komponenten des Mikroskops zu betreiben.

- **Power Input**: Die 12V werden über einen **runden Steckverbinder** in das Gehäuse geführt. Bevor die Spannung die Hauptplatine erreicht, wird sie durch eine Sicherung der Marke **XXX** mit einer Auslösecharakteristik von **YYY** gesichert.
- **Spannungsverteilung**: Nach der Sicherung wird die Spannung über **WAGO-Klemmen** in zwei Bereiche aufgeteilt: einen für die Deckelelektronik (Display und Raspberry Pi) und einen für die Steuerplatine, die die Motoren und Beleuchtung steuert.
- **DC-DC-Wandler**: Ein **DC-DC Buck Converter** wandelt die 12V auf 5V herunter, um den **Raspberry Pi 5** zu versorgen. Die Versorgungsspannung für den **ESP32** und die Motortreiber wird über die Hauptplatine ebenfalls auf **5V und 3,3V** heruntergeregelt.

##### **2. Steuerung und Microcontroller (ESP32)**
Die Steuerung des Mikroskops erfolgt über einen **ESP32-Mikrocontroller**, der über ein USB-Mikro-Kabel mit dem **Raspberry Pi 5** verbunden ist. Die Kommunikation zwischen dem Raspberry Pi und dem ESP32 erfolgt seriell, wobei **Befehle im JSON-Format** ausgetauscht werden, um die Motoren und die Beleuchtung zu steuern.

- **Motortreiber**: Der ESP32 ist direkt mit den **Motortreibern** verbunden, welche die Schritt- und Richtungsbefehle an die Motoren für den Fokus (Nema 11 Schrittmotor) und die peristaltische Pumpe (Nema 17 Schrittmotor) weiterleiten.
- **Beleuchtungssteuerung**: Eine **PWM-gesteuerte LED** wird ebenfalls über den ESP32 betrieben, um die Beleuchtung der Probe zu regeln.
- **Keine Funkverbindung**: Der ESP32 wird ohne die Nutzung von Wi-Fi oder Bluetooth betrieben, um die Strahlenbelastung zu minimieren. Der ESP32 ist CE-konform und wird als unkritisches Bauelement betrachtet.

##### **3. Raspberry Pi 5 und Schnittstellen**
Der **Raspberry Pi 5** fungiert als zentrales Steuerelement für die gesamte Elektronik des Mikroskops. Er übernimmt die **Datenverarbeitung**, die **Steuerung der Kamera** und ermöglicht die Interaktion mit dem Benutzer über das **Touchscreen-Display**.

- **Anschlüsse**: Der Raspberry Pi 5 verfügt über mehrere **USB 3.0-Anschlüsse**, die zur Kommunikation mit dem ESP32, der Kamera und dem drahtlosen Keyboard sowie für die Speicherung der Daten auf einem USB-Stick genutzt werden.
- **Touchscreen-Display**: Der Raspberry Pi ist direkt hinter einem **7-Zoll-Touchscreen-Display** montiert, welches über die **CSI-Schnittstelle** verbunden ist. Das Display zeigt den Desktop des Raspberry Pi an, der in der oberen Klappe des Gehäuses integriert ist.
- **Software**: Auf dem Raspberry Pi läuft das **Raspberry Pi OS**, auf dem die Open-Source-Software **ImSwitch** installiert ist. Diese Software ermöglicht die Steuerung des Mikroskops über eine Browser-Oberfläche. Der Nutzer kann im Livestream-Modus den aktuellen Bildausschnitt verfolgen und im **Einstellungsbereich** Parameter wie den Pumpendurchfluss oder die Bildaufnahme konfigurieren.

##### **4. Kamera**
Für die Bildaufnahmen verwenden wir eine **USB 3.0 Monochrome Kamera** der Firma **HIK**. Diese Kamera ist mit einem **Sony IMX179 Sensor** ausgestattet, der eine hohe Bildqualität mit einem hohen Signal-Rausch-Verhältnis (SNR) liefert.

- **Auflösung**: Die Kamera bietet eine hohe Pixelauflösung und Bildwiederholrate, um detaillierte und schnelle Bildaufnahmen der Proben zu ermöglichen.
- **Vorteile**: Im Vergleich zur **CSI-Kamera** des Raspberry Pi bietet diese Kamera keine Randabschattungen und ist damit optimal für präzise wissenschaftliche Anwendungen. Die Integration der Kamera erfolgt über die **API** des Herstellers in die Python-basierte Benutzeroberfläche.

##### **5. Beleuchtung**
Die Probenbeleuchtung erfolgt durch eine einfache, aber leistungsstarke **weiße LED**, die auf einer separaten Platine montiert ist. Diese LED sitzt auf einem beweglichen Arm, sodass sie je nach Bedarf in verschiedene Positionen gebracht werden kann.

- **Beweglicher Arm**: Der Arm der LED kann geneigt werden, um eine **Transmissionsbeleuchtung** oder eine **schräge Beleuchtung** zu ermöglichen, was besonders für die Pseudo-Dunkelfeldmikroskopie von Vorteil ist.
- **Austauschbarkeit**: Die LED-Platine ist so konzipiert, dass der **Austausch des optischen Chips** schnell und einfach erfolgen kann.



#### **Mechanische Komponenten**

##### **3D-gedruckte Bauteile**
Das OASIS-Mikroskop ist modular aufgebaut und besteht aus zwei symmetrischen Hälften, die entlang der Mittelachse verlaufen. In diesen Hälften sind alle wichtigen Bauteile wie die Motoren für die Pumpe und den Fokus, die Optiken sowie die Kamera integriert. Diese Bauweise sorgt für einen kompakten und robusten Aufbau, bei dem keine sichtbaren beweglichen Teile nach außen hin vorhanden sind. Alle mechanischen Teile wurden mit **PETG** in einer Fülldichte von **50 %** auf einem **Bambulab P1P** 3D-Drucker hergestellt, wodurch sie langlebig und recycelbar sind.

Zusätzlich ist das Optik-Modul (bestehend aus Objektiv, Kamera und zugehörigen Halterungen) auf eine Trägerplatte geschraubt, die in die untere Hälfte der Gehäusestruktur eingesetzt wird. Auf dieser Platte befinden sich ebenfalls Halterungen für die **Elektronik** und die **Beleuchtung**. Zwischen der **Flusszelle** und dem Optik-Modul können **Spacer** eingesetzt werden, um den Fokus des Mikroskops präzise anzupassen. Der Fokusmechanismus nutzt das **Fokussiersystem eines Überwachungskamera-Objektivs**, wobei der Fokusring über einen Schrittmotor und ein Schneckengetriebe gesteuert wird, um die Optik entlang der optischen Achse zu fokussieren. Dies ermöglicht präzise Fokusanpassungen ohne Bewegung der anderen Komponenten.

##### **Gehäuse**
Das Gehäuse des Mikroskops bietet einen **initialen Spritzwasserschutz**. Es wurde jedoch eine Belüftung hinzugefügt, um den Luftaustausch zu gewährleisten und die Elektronik zu kühlen. Dazu wurde in den Gehäusedeckel ein **belüftetes Loch** gefräst, das mit einem 3D-gedruckten **Gitter** abgedeckt ist, um die Sicherheit der Komponenten zu gewährleisten und zu verhindern, dass Benutzer versehentlich die empfindliche Elektronik beschädigen. Wir verwenden das Gehäuse der Marke Stier [STIER Universal Outdoor Koffer flugtauglich LxBxH 240x266x170 mm
](https://www.contorion.de/p/stier-universal-outdoor-koffer-flugtauglich-lxbxh-240x266x170-mm-86455090?aid=705434676178&targetid=pla-2313898235228&campaignid=21452477640&gad_source=1&gclid=Cj0KCQjwrp-3BhDgARIsAEWJ6SyAdajByWTfw_oahWo8I6poZGt4beGAkFwX2eg3m7vMoJT4m7T1mOsaAsTcEALw_wcB).

Alle Kabeldurchführungen und Schlauchverbindungen sind mit speziellen **Adaptern** versiegelt, um einen spritzwassergeschützten Betrieb zu gewährleisten. Zudem können alle externen Kabel nach der Nutzung vom Hauptgehäuse abgekoppelt werden. Für die Wasserversorgung der Flusszelle wird ein **5 × 3 mm Silikonschlauch** verwendet, der über **Luer-Lock-Adapter** sowohl die Pumpe als auch die Flusszelle verbindet.

#### **Bewegliche Teile**

Das OASIS-Mikroskop kombiniert präzise Steuerungskomponenten, recycelbare 3D-gedruckte Gehäuse und moderne Elektronik, um eine robuste, autonome Plattform für die Untersuchung von Wasserproben zu schaffen. Die Kombination aus leistungsfähigen Motoren, flexibler Beleuchtung und einer hochwertigen USB-Kamera macht das Mikroskop zu einem leistungsstarken Werkzeug für ökologische und maritime Forschung.

##### **Pumpe**
Für den präzisen Wasserfluss durch die Flusszelle wird eine **Peristaltikpumpe** verwendet, die von einem **Nema 17 Schrittmotor** angetrieben wird. Diese Pumpe ist ein Zukaufteil und direkt am Schrittmotor montiert. Durch die präzise Steuerung der **Schrittweite des Motors** kann der Flüssigkeitsdurchfluss äußerst genau eingestellt werden. Der Durchfluss wird in der Software (GUI) konfiguriert, wobei er bis auf den **Milliliter pro Umdrehung** genau definiert werden kann.

##### **Motoren**
- **Nema 17 Schrittmotor**: Dieser Motor treibt die Peristaltikpumpe an und ermöglicht die präzise Steuerung des Wasserflusses.
- **Mikroschrittmotor mit Getriebe**: Dieser Schrittmotor ist mit einem Schneckengetriebe gekoppelt und steuert den Fokusmechanismus des Überwachungskamera-Objektivs. Die Kombination aus Getriebe und Schrittmotor sorgt für präzise Fokusanpassungen ohne große Bewegungen der Optikkomponenten.

Beide Motoren arbeiten mit **12V Spannung** und werden von der **openUC2-Steuerplatine** betrieben. Nach jeder Bewegung werden die Motoren stromlos geschaltet, um eine Überhitzung der Bauteile zu vermeiden.

#### **Technische Spezifikationen**

##### **NEMA 17 Schrittmotor**:
- **Modell**: 42BYGHW811
- **Spannung**: 12V
- **Strom**: 1.7A
- **Haltemoment**: 59N·cm
- **Schrittauflösung**: 1.8° pro Schritt (200 Schritte pro Umdrehung)
- **Anwendung**: Treibt die Peristaltikpumpe an

##### **Mikroschrittmotor mit Getriebe**:
- **Modell**: 17HS19-2004S1
- **Spannung**: 12V
- **Getriebeübersetzung**: 1:20
- **Schrittauflösung**: 0.09° pro Schritt (400 Schritte pro Umdrehung nach Getriebeübersetzung)
- **Anwendung**: Steuert den Fokusring des Überwachungskamera-Objektivs

##### **Raspberry Pi 5**:
- **Prozessor**: Quad-Core ARM Cortex-A76 64-bit SoC @ 1.8 GHz
- **RAM**: 4GB oder 8GB LPDDR4-3200 SDRAM
- **USB-Anschlüsse**: 2x USB 3.0, 2x USB 2.0
- **Display**: 7-Zoll-Touchscreen über die **DSI**-Schnittstelle
- **Betriebssystem**: Raspberry Pi OS mit der vorinstallierten **ImSwitch**-Software
- **Anwendung**: Zentrale Steuerung des Mikroskops, Bildverarbeitung, Benutzeroberfläche

##### **Touchscreen (7 Zoll)**:
- **Auflösung**: 800 x 480 Pixel
- **Schnittstelle**: DSI
- **Funktionen**: Zeigt den Desktop des Raspberry Pi an und ermöglicht die direkte Steuerung über die **Touchscreen-Benutzeroberfläche**.

##### **12V Netzteil**:
- **Marke**: MeanWell
- **Spannungseingang**: 230V AC
- **Spannungsausgang**: 12V DC
- **Leistung**: 60W
- **Maximaler Strom**: 5A
- **Anwendung**: Versorgt das gesamte Mikroskop mit Strom, inklusive der Motoren, Kamera und Steuerung.
