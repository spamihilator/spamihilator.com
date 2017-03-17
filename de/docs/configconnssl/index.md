---
uid: configconnssl
lang: de
title: Spamihilator &raquo; SSL/TLS
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; SSL/TLS

## SSL/TLS

Stellen Sie hier einige Parameter ein, die mit der Sicherheit der Datenübertragung im Internet zu tun haben.

Diese Einstellungen sind nur für Experten gedacht. Ändern Sie sie nur, wenn Sie genau wissen, was Sie tun!
{: .noteimportant }

<img src="{{ site.url }}/images/docs/de/configconnssl_de.png" alt="Verbindungseinstellungen" class="docs-screenshot">

### Lokaler Server (POP3/IMAP)

Wenn Sie eine sichere Verbindung mittels <abbr title="Secure Sockets Layer">SSL</abbr>/TLS in Ihrem E-Mail-Programm bereits ohne Spamihilator eingestellt hatten, sollten Sie sie nun auf eine normale Verbindung zurücksetzen. Sie findet ja nun zwischen Ihrem Mail-Client und Spamihilator lokal auf Ihrem Computer statt und benötigt keine <abbr title="Secure Sockets Layer">SSL</abbr>/TLS-Verschlüsselung. Eine doppelte Verwendung der sicheren Ports würde Probleme verursachen.

Falls in Ihrem System Port 995 (sicherer Port für <abbr title="Post Office Protocol 3">POP3</abbr>) oder Port 993 (sicherer Port für <abbr title="Internet Message Access Protocol">IMAP</abbr>) schon belegt sind, können Sie hier als lokalen Server eine andere Port-Nummer wählen. Die Ports in Ihrem E-Mail-Programm, das sich mit Spamihilator verbindet, bleiben davon unberührt.

Die Option **Ermögliche Verbindungen über diesen Port** sollte aktiviert sein, wenn Spamihilator den Port 995 oder 993 für eine sichere Verbindung zu Ihrem Mail-Server verwenden soll.

### Sichere Verbindung (SSL/TLS)

Spamihilator ist in der Lage, eine sichere Verbindung über <abbr title="Secure Sockets Layer">SSL</abbr>/TLS zu Ihrem E-Mail-Server herzustellen.

Wenn die Einstellung **Aktiviere <abbr title="Secure Sockets Layer">SSL</abbr>/TLS automatisch, falls verfügbar** aktiviert ist, werden die Daten sicher (verschlüsselt) übertragen und sind damit vor fremden Augen geschützt.

Wenn Spamihilator eine Verbindung zu einem E-Mail-Server das erste Mal aufbaut, prüft er, ob dieser sichere Verbindungen unterstützt. Falls dies der Fall ist, wird automatisch eine sichere Verbindung aufgebaut.

Die Überprüfung der <abbr title="Secure Sockets Layer">SSL</abbr>/TLS-Fähigkeit des E-Mail-Servers dauert eine gewisse Zeit. Sie sehen dann ein kleines blinkendes Schloss im Status-Fenster. Die Überprüfung wird nur beim ersten Verbindungsversuch durchgeführt.

#### Bekannte Server ...

Hier kann manuell eingestellt werden, welche E-Mail-Server sichere Verbindungen über <abbr title="Secure Sockets Layer">SSL</abbr>/TLS unterstützen.

</div>
</div>
