---
uid: configclient
lang: de
title: Spamihilator &raquo; Mail-Programm einstellen
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Mail-Programm einstellen

## Mail-Programm einstellen

Damit Ihre E-Mails von Spamihilator gefiltert werden können, ist es erforderlich, das Mail-Programm so zu konfigurieren, daß der Mailempfang über Spamihilator umgelenkt wird.

Das geht bei den meisten Mail-Programmen, zum Beispiel Microsoft Outlook, Thunderbird oder Eudora, ganz einfach mit dem Setup-Assistenten, wie unten beschrieben.

Sollte die automatische Konfiguration einmal nicht gelingen oder der Mailempfang oder -versand nicht richtig funktionieren, dann ist eine manuelle Konfiguration erforderlich. Diese ist ebenfalls ganz einfach durchzuführen, wie unten erklärt wird.

### Bitte "getrennte Einstellungen" beachten!

Bitte beachten Sie, daß im Mail-Konto für Empfangen und Senden getrennte Einstellungen eingestellt werden müssen, denn Spamihilator wird nur beim Mail-_Empfang_ eingeschaltet.

Das ist ein wichtiger Punkt, den man vielleicht sogar mit einem Blick in die Mailkonto-Einstellungen überprüfen sollte, bevor man das erste Mal mit Spamihilator Mails empfängt. Siehe auch Screenshots unten.

### Konfiguration mit dem Setup-Assistenten

Am Einfachsten benutzen Sie zum Konfigurieren des Mailprogramms den mitgelieferten Setup-Assistenten, der nach der Installation automatisch gestartet wird.

Sie können den Setup-Assistenten auch später noch aufrufen, indem Sie **Spamihilator/Setup-Assistent** aus dem Startmenü wählen.

Der Setup-Assistent führt Sie intuitiv durch ein paar wenige Entscheidungen und erledigt den Rest automatisch.

### Manuelle Konfiguration

1.  Öffnen Sie Ihr E-Mail-Programm und dann die Einstellungen Ihres aktuellen Mail-Kontos  

2.  Geben Sie den Benutzernamen in folgendem Format an:  

        pop3server&benutzername[&port]

    Oder wenn Sie einen <abbr title="Internet Message Access Protocol">IMAP</abbr>-Server benutzen:

        imapserver&benutzername[&port]

    _Die Angabe des Ports ist dabei optional._  

    Beispiele:

        pop.gmx.net&anyuser@gmx.net&110
        pop3.web.de&freemailuser
        mail.anyserver.com&anyuser
        imap.theserver.com&myself&143
        imap.anotherserver.com&someoneelse

3.  Geben Sie als <abbr title="Post Office Protocol 3">POP3</abbr>-Server/<abbr title="Internet Message Access Protocol">IMAP</abbr>-Server _localhost_ an (alternativ: _127.0.0.1_)  

4.  Speichern Sie Ihre Einstellungen, indem Sie auf **OK** klicken.

### Hinweise

Im Spamihilator-Forum gibt es eine Liste von bekannten Providern mit den jeweilgen Einstellungen: [http://www.spamihilator.com/forum](http://www.spamihilator.com/forum/viewtopic.php?t=523).

### Beispiele

Nachfolgend ein Beispiel aus Microsoft® Outlook:

![]({{ site.url }}/images/docs/de/mailclientaccountsettings.png)

Das folgende Beispiel zeigt die Kontoeinstellungen in in Microsoft® Outlook 2010:

Der erste Screenshot enthält die Angaben für den Mailempfang. Für Spamihilator wurden die Einträge in "Posteingangsserver" und "Benutzername" modifiziert.

![]({{ site.url }}/images/docs/de/outlook-2010-internet-e-mail-einstellungen-a.png)

![]({{ site.url }}/images/docs/de/outlook-2010-internet-e-mail-einstellungen-b.png)

Der Reiter "Postausgangsserver" verdient besondere Beachtung, denn hier befindet sich die entscheidende Einstellungsmöglichkeit für getrennte Einstellungen für Empfangen und Senden. Per Default ist meist aktiviert "Gleiche Einstellungen ...", für Spamihilator müssen hier die Original-Einstellungen extra nochmals eingegeben werden, da Spamihilator am Senden nicht beteiligt ist.

![]({{ site.url }}/images/docs/de/outlook-2010-internet-e-mail-einstellungen-c.png)

![]({{ site.url }}/images/docs/de/outlook-2010-internet-e-mail-einstellungen-d.png)

Bei Posteingangsserver sollte keine gesicherte Verbindung mit <abbr title="Secure Sockets Layer">SSL</abbr>/TLS aktiviert werden, selbst wenn das Mail-Konto diese benötigt, denn Spamihilator übernimmt die sichere Verbindung zum Mail-Server automatisch. Dagegen muß für den Postausgangsserver ggf. eine sichere Verbindung eingestellt werden.

![]({{ site.url }}/images/docs/de/outlook-2010-internet-e-mail-einstellungen-e.png)

</div>
</div>
