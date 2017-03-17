---
uid: configpriorities
lang: de
title: Spamihilator &raquo; Reihenfolge
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Reihenfolge

## Reihenfolge

<img src="{{ site.url }}/images/docs/de/configpriorities_de.png" alt="Einstellungen für die Reihenfolge" class="docs-screenshot">

In diesem Fenster können Sie die Reihenfolge verändern, in der die eingehenden E-Mails durch die Filter laufen.

Die Zahl in der linken Spalte gibt die Reihenfolge an. Je kleiner diese Zahl ist, desto eher wird der entsprechende Filter ausgeführt. In der Standardeinstellung wird der Filterprozess für eine bestimmte E-Mail abgebrochen, sobald ein Filter sie als Spam oder Non-Spam erkennt. Sie können mit dieser Funktion also bestimmte Filter bevorzugen.

Klicken Sie auf einen Eintrag in der Liste und dann auf "Pfeil-Nach-Oben" oder "Pfeil-Nach-Unten", um die Reihenfolge zu verändern.

Außerdem können Sie noch festlegen, was geschehen soll, wenn ein Filter eine Spam- bzw Non-Spam-Nachricht findet. Wenn Sie "**beende den Filter-Prozess**" wählen, wird das aktuelle Ergebnis gespeichert und es werden keine anderen Filter mehr ausgeführt. Klicken Sie aber auf "**fahre mit dem nächsten Filter fort**", wird das aktuelle Ergebnis verworfen und die Nachricht wird an den nächsten Filter in der Reihenfolge übergeben. Diese Funktion ist sehr gut, um bestimmte Funktionen eines Filters zu deaktivieren.

Bitte beachten Sie, dass ein Filter auch weder "Spam" noch "Non-Spam" zurückgeben kann. In diesem Fall wird die Mail an den nächsten Filter übergeben. Wurden alle Filter durchlaufen und das Ergebnis ist nicht eindeutig, wird die Nachricht an das E-Mail-Programm weitergeleitet.

</div>
</div>
