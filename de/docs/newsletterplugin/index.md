---
uid: newsletterplugin
lang: de
title: Spamihilator &raquo; Das Newsletter-Plugin
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Das Newsletter-Plugin

## Das Newsletter-Plugin

Dieses Plugin schaltet sich standardmäßig vor alle anderen Filter. Es überprüft alle eingehenden E-Mails auf folgende Kriterien:

### Empfänger

Viele Newsletter-Versender benutzen für jede Nachricht die gleiche Empfängeradresse (z.B. newsletter@server.de). Das gleiche gilt für Newsgroups (z.B. von [Yahoo](http://www.yahoo.com/)). Wenn Sie in einer Newsgroup angemeldet sind, erhalten Sie alle Nachrichten, die ein Mitglied an die E-Mail-Adresse der Gruppe sendet (z.B. gruppe@yahoo.com).

Diese Adressen können Sie in den [Einstellungen des Newsletter-Plugins]({{ site.url }}/de/docs/confignewsgroups) eingeben. E-Mails, die an solche Adressen gerichtet sind, werden direkt an Ihr E-Mail-Programm weitergeleitet und landen niemals im Papierkorb. Diese Methode hilft _False-Positives_ zu vermeiden, d.h. Nachrichten, die fälschlicherweise blockiert wurden.

### Signaturen

Oftmals enthalten die Betreffzeilen eines Newsletters eine bestimmte Signatur des Versenders (z.B. `[Spamihilator Newsletter]`).

Diese Signaturen können Sie in den [Einstellungen des Newsletter-Plugins]({{ site.url }}/de/docs/configsignatures) eingeben. E-Mails, deren Betreffzeile eine solche Signatur enthält, werden direkt an Ihr E-Mail-Programm weitergeleitet und landen niemals im Papierkorb. Diese Methode hilft _False-Positives_ zu vermeiden, d.h. Nachrichten, die fälschlicherweise blockiert wurden.

### Filter-Reihenfolge

Es wird empfohlen dieses Plugin in den Filter-Einstellungen an oberster Stelle in der Reihenfolge der Filter zu halten. Nur so kann gewährleistet werden, dass Newsletters und Mails von Newsgroups durch dieses Plugin erkannt und an Ihr E-Mail-Programm weitergeleitet werden.

</div>
</div>
