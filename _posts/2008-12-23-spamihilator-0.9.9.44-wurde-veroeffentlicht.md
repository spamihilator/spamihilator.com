---
uid: spamihilator-0.9.9.44-has-been-released
title: Spamihilator 0.9.9.44 wurde veröffentlicht!
lang: de
layout: post
---

Die neue Spamihilator-Version 0.9.9.44 wurde soeben veröffentlicht.
Diese Version behebt ein paar kleinere Fehler. Außerdem lassen sich der
Trainingsbereich und der Papierkorb nun leichter bedienen. Die Installation
wird allen Benutzern empfohlen, die häufig mit diesen Fenstern arbeiten.

Bitte laden Sie sich Spamihilator von folgender Website herunter:  
<{{ site.url }}/de/download>

Im Folgenden werden alle Änderungen in dieser Version beschrieben.

### Trainingsbereich und Papierkorb

* Die Fenster lassen sich nun mit mehr Tastaturkürzeln bedienen.
* Die Menüs wurden durch Symbole ergänzt, die die Übersichtlichkeit erhöhen.
* Die Toolbars sind nun vollständig anpassbar. Sie können außerdem versteckt werden.
* Die Spalten in der Listenansicht können nun verschoben und versteckt werden.
* Der Wechselbutton kann nun so eingestellt werden, dass zwischen den Fenstern
  umgeschaltet werden kann. Das jeweilige andere Fenster wird dabei geschlossen.
* Die Listenansicht erhält nun den Eingabefokus, wenn das Nachrichtenansichtsfenster
  geschlossen wird.
* Die Sortierung in der Listenansicht wurde verbessert.

### Link-Filter

* Effektive Top-Level-Domains werden nun korrekt behandelt, sodass Links wie
  test1.co.uk, test2.co.uk und test3.co.uk nicht mehr zu co.uk zusammengefasst werden.

### Allgemein

* Antworten auf Nachrichtenfenster können nun zurückgesetzt werden.
* Im Einstellungsfenster lässt sich nun die Qualität einer Sprachdatei begutachten.
* Das IMAP-Kommando FETCH RFC822 wird nun vollständig unterstützt

### Behobene Fehler

* Nachrichten werden nun vormarkiert, auch wenn der Trainingsbereich schon offen ist.
* Unter Windows Vista wird das Symbol für die Spaltensortierung nun korrekt angezeigt.
* Wenn die Konfigurationsdatei des DCC-Filters aktualisiert werden muss, bleibt das
  Installationsprogramm nun nicht mehr stehen.
* Das Datum, an dem ein Link vom Link-Filter zuletzt gesehen wurde, wird nun
  korrekt aktualisiert.
* Ein Fehler wurde behoben, der dazu führte, dass der Link-Filter dieses Datum
  nicht sofort anzeigte, wenn ein Link manuell hinzugefügt wurde.
