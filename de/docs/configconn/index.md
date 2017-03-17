---
uid: configconn
lang: de
title: Spamihilator &raquo; Verbindung
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Verbindung

## Verbindung

Stellen Sie hier einige Parameter ein, die mit der Internetverbindung zu tun haben.

Diese Einstellungen sind nur für Experten gedacht. Ändern Sie sie nur, wenn Sie genau wissen, was Sie tun!
{: .noteimportant }

<img src="{{ site.url }}/images/docs/de/configconn_de.png" alt="Verbindungseinstellungen" class="docs-screenshot">

### Lokaler Server

Falls in Ihrem System der Port 110 (<abbr title="Post Office Protocol 3">POP3</abbr>) oder der Port 143 (<abbr title="Internet Message Access Protocol">IMAP</abbr>) schon belegt sind, können Sie hier einen anderen wählen. In diesem Fall müssen Sie den Port auch in Ihrem E-Mail-Programm ändern.

Sie sollten die Option **Ermögliche Verbindungen über diesen Port** aktiviert lassen, damit Spamihilator den betreffenden Port belegt und eine Verbindung zwischen Ihrem E-Mail-Programm und Spamihilator hergestellt werden kann.

### IMAP

Manche <abbr title="Internet Message Access Protocol">IMAP</abbr>-Postfächer haben mehrere Ordner oder Unterordner. Falls Spamihilator nicht alle eingehenden Mails prüfen kann, sollten Sie diese Option aktivieren. Dann werden auch die ausgehenden Mails überprüft.

### Zeitlimit

Wenn Spamihilator längere Zeit keine Antwort vom Server erhält, wird ein Nachrichten-Fenster angezeigt, das Sie fragt, ob Sie die Verbindung beenden oder weiter warten wollen. Stellen Sie hier ein, nach welcher Zeit (in Sekunden) das Fenster erscheinen soll.

Wenn Sie nicht möchten, dass das Fenster erscheint, aktivieren Sie **Bei Timeout immer abbrechen**.

### Logging

Wählen Sie hier die **Dateinamen** und die **maximale Größe** der Log-Dateien Spamihilators.

Die Kommunikation zwischen Ihrem E-Mail-Programm und Spamihilator, sowie zwischen Spamihilator und dem Server wird aufgezeichnet (Logging).

Standardmäßig werden zu diesem Zweck zwei Dateien erstellt:

`client.log` und `server.log`.

Diese liegen im Konfigurationsverzeichnis (siehe auch [Konfigurationsverzeichnis finden]({{ site.url }}/de/docs/tutorials/configfiles))

Die Größe der Dateien ist beschränkt, damit Ihre Festplatte nicht verstopft wird.

</div>
</div>
