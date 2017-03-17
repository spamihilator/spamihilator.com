---
uid: configrules
lang: de
title: Spamihilator &raquo; Regeln
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Regeln

## Regeln

<img src="{{ site.url }}/images/docs/de/configrules_de.png" alt="Liste der Regeln" class="docs-screenshot">

Diese Einstellungen gehören zum [Regelfilter]({{ site.url }}/de/docs/rulefilter).

Der Regelfilter untersucht E-Mails anhand von konfigurierbaren Regeln. Sie können neue Regeln hinzufügen, indem Sie auf "**Neu**" klicken.

Existierende Regeln können Sie durch einen Klick auf "**Ändern**" konfigurieren

Natürlich können Sie auch bestimmte Regeln aus der Liste entfernen. Klicken Sie dazu einfach auf "**Löschen**".

### Neue Regel hinzufügen

<img src="{{ site.url }}/images/docs/de/addrule_de.png" alt="Regel hinzufügen" class="docs-screenshot">

Jede Regel hat einen eindeutigen Namen, damit Sie sie in der Liste der Regeln wiederfinden. Wenn der Regelfilter eine E-Mail bearbeitet hat, wird dieser Name auch im [Papierkorb]({{ site.url }}/de/docs/recycle) bzw. [Trainingsbereich]({{ site.url }}/de/docs/trainingarea) als Filterungsgrund angezeigt.

Außerdem können Sie für jede Regel einstellen, was passieren soll, wenn sie auf eine E-Mail zutrifft. Unter **Aktion** können Sie auswählen, ob die E-Mail dann in den Papierkorb verschoben (Spam-Nachrichten) oder an Ihr E-Mail-Programm weitergeleitet werden soll (Non-Spam).

#### Bedingungen

Jede Regel hat eine oder mehrere Bedingungen, die wahr oder falsch sein können. Beim Hinzufügen einer Regel können Sie angeben, ob alle Bedingungen wahr sein müssen (logisches Und) oder mindestens eine (logisches Oder), damit die eingestellte Aktion ausgeführt wird.

Eine Bedingung besteht aus **Subjekt**, **Relation** und **Argument**. Mit dem **Subjekt** geben Sie an, welcher Teil der E-Mail untersucht werden soll. Es stehen folgende Subjekte zur Verfügung:

* Betreff
* Absender
* Empfänger
* CC
* Datum
* Größe (KB)
* Nachrichtentext
* Nachricht (mit <abbr title="HyperText Markup Language">HTML</abbr>)
* Andere...

Wenn Sie den Eintrag "Andere..." auswählen , können Sie außerdem eigene Nachrichtenkopfzeilen hinzufügen, die untersucht werden sollen.

Als **Relationen** können Sie folgende auswählen:

* enthält
* enthält nicht
* ist
* ist nicht
* beginnt mit
* endet mit
* ist größer als
* ist kleiner als
* enthält (Regex)
* enthält nicht (Regex)
* passt zu (Regex)
* passt nicht zu (Regex)

Als **Argument** können Sie einen beliebigen Text eingeben, der über die ausgewählte Relation mit dem Subjekt verglichen wird. Wenn Sie "ist größer als" bzw. "ist kleiner als" verwenden, versucht Spamihilator das Argument als Zahl zu interpretieren. Bei den mit "(Regex)" gekennzeichneten Relationen können Sie im Argument reguläre Ausdrücke angeben.

### Beispiele

Die folgende Regel verschiebt eine Nachricht in den Papierkorb, wenn Sie von auf dem Server bereits als Spam erkannt wurde:

**Name**: Bereits auf dem Server als Spam erkannt  
**Aktion**: Nachricht in den Papierkorb verschieben  
**Bedingung**: "`X-Spam-Flag`" beginnt mit "`YES`"

Mit der folgenden Regel werden alle E-Mails, die größer als 1 <abbr title="Megabyte">MB</abbr> sind, automatisch an Ihr E-Mail-Programm weitergeleitet:

**Name**: Große Non-Spam-Nachricht  
**Aktion**: Nachricht an das E-Mail-Programm weiterleiten  
**Bedingung**: "Größe (KB)" ist größer als "`1024`"

### Erweiterte Einstellungen

Klicken Sie auf **Erweitert...**, um die [Einstellungen für den Regelfilter]({{ site.url }}/de/docs/configrulessettings) für eine bestimmte Regel zu überschreiben.

</div>
</div>
