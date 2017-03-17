---
uid: linkfilter
lang: de
title: Spamihilator &raquo; Der Link-Filter
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Der Link-Filter

## Der Link-Filter

Der **Link-Filter** ist ein Plugin. Das heißt, dass er nicht direkt in Spamihilator integriert ist, aber trotzdem dazu benutzt werden kann, Spam zu blockieren.

Der Filter benutzt eine Liste von Links, die häufig in Spam- bzw. Non-Spam-Nachrichten vorkommen. Jeder Link besitzt einen bestimmten Typ:

* **Spam**: Ein solcher Link kommt häufig in Spam-Mails vor
* **Non-Spam**: Kommt häufig in Non-Spam-Mails vor
* **Ignoriert**: Ein solcher Link wird nicht in die Bewertung einer Mail einbezogen

Bei der Filterung wird die Anzahl der Spam- und Non-Spam-Links in einer Mail gezählt und berechnet, mit welcher Wahrscheinlichkeit sie Spam ist. Kommen mehr Spam- als Non-Spam-Links in einer Mail vor, wird sie in den [Papierkorb]({{ site.url }}/de/docs/recycle) verschoben.

Sie können die Links, die für die Filterung benutzt werden sollen, einstellen. Öffnen Sie dazu die [Einstellungen]({{ site.url }}/de/docs/config) von Spamihilator und klicken Sie auf [Links]({{ site.url }}/de/docs/configlinks).

### Training

Dieser Filter kann trainiert werden. Das Prinzip entspricht dem des [Lernenden Filters]({{ site.url }}/de/docs/learningfilter). Benutzen Sie den [Trainingsbereich]({{ site.url }}/de/docs/trainingarea), damit der Link-Filter lernt, welche Links häufig in Spam- bzw. Non-Spam-Nachrichten vorkommen.

Durch das Training kann sich der Filter auf Ihr persönliches Mail-Aufkommen einstellen. Daraus folgt eine bedeutend höhere Erkennungsrate und extrem wenige "False Positives", d.h. wichtige Nachrichten, die aus Versehen im [Papierkorb]({{ site.url }}/de/docs/recycle) landen.

### Optimierung

Der Link-Filter versucht automatisch das beste Bewertungsergebnis zu erzielen. Dazu verwendet er folgende Methoden:

* **Bereinigung der Link-Liste**: Links, die mehreren Tagen nicht in eingehenden Mails gefunden wurden, werden automatisch aus der internen Liste gelöscht. Dies erhöht die Geschwindigkeit des Filters und spart Speicherplatz.
* **Zusammenfassen von Links**: Ähnliche Links mit unterschiedlichen Subdomains werden zusammengefasst. Dadurch kann eine höhere Erkennungsrate erzielt werden.

Die Optimierungsmethoden lassen sich in den [Einstellungen des Link-Filters]({{ site.url }}/de/docs/configlinks) konfigurieren.

</div>
</div>
