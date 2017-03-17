---
uid: configfilter
lang: de
title: Spamihilator &raquo; Filter-Eigenschaften
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Filter-Eigenschaften

## Filter-Eigenschaften

<img src="{{ site.url }}/images/docs/de/configfilter_de.png" alt="Filter-Eigenschaften" class="docs-screenshot">

Spamihilator überprüft die E-Mails nach Werbung, indem es verschiedene Filter einsetzt (siehe [Filtermethoden]({{ site.url }}/de/docs/filtermethods)).

### Plugins

Mit Plugins können Sie die Filtereigenschaften von Spamihilator erweitern. Sie sollten die Option "**Aktiviere Plugin-Filter**" unbedingt aktiviert lassen und je nach Bedarf Plugins einzeln deaktivieren (siehe [Plugins]({{ site.url }}/de/docs/configplugins)).

### Automatisches Lernen

Der [Lerndende Filter]({{ site.url }}/de/docs/learningfilter) muss trainiert werden, damit er zuverlässig funktioniert. Dazu benutzen Sie in der Regel den [Trainingsbereich]({{ site.url }}/de/docs/trainingarea).

Wenn Sie die Optionen "**Lerne automatisch von meinen Freunden**" bzw. "**Lerne automatisch von blockierten Absendern**" einschalten, brauchen Sie E-Mails von diesen Absendern nicht mehr per Hand im [Trainingsbereich]({{ site.url }}/de/docs/trainingarea) zu markieren.

Spamihilator kann auch automatisch von Nachrichten aus dem [Papierkorb]({{ site.url }}/de/docs/recycle) lernen. Wenn Sie die Option "**Lerne automatisch von wiederhergestellten Mails aus dem Papierkorb**" aktivieren, markiert das Programm eine Nachricht beim Wiederherstellen als Non-Spam im Trainingsbereich und lernt davon. Die Nachricht befindet sich danach nicht mehr im Trainingsbereich.

Diese Optionen wirken sich auch auf alle lernfähigen Plugins aus.
{: .noteimportant }

</div>
</div>
