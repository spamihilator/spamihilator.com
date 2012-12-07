---
lang: de
title: FAQ
layout: main
---

<div class="row">
<div class="twelve columns" markdown="1">

### Häufig gestellte Fragen (FAQ)

Hier finden Sie eine Liste von häufig gestellten Fragen.

#### Inhalt

##### Allgemeine Fragen

[A01. Woran erkennt das Programm eine Werbemail?](#a01)  
[A02. Wo landen die erkannten Werbemails?](#a02)  
[A03. Kann man auch mehrere E-Mail-Adressen filtern?](#a03)  
[A04. Spamihilator und Hotmail](#a04)  
[A05. Spamihilator und Microsoft Exchange](#a05)  
[A06. Spamihilator und SSL](#a06)  
[A07. Wie kann ich alle Mails filtern, die nicht in Deutsch sind?](#a07)  
[A08. Warum schickt das Programm keine gefälschten Fehlermeldungen an den Spam-Versender zurück?](#a08)  
[A09. Kann ich Spamihilator in einer kommerziellen Umgebung einsetzen?](#a09)  
[A10. Funktioniert Spamihilator mit meinem E-Mail-Programm (z.B. dem von T-Online)?](#a10)  

##### Probleme

[P01. Das Programm zeigt beim Starten “Socket-Fehler”!](#p01)  
[P02. Ich kann keine Mails mehr versenden!](#p02)  
[P03. Ich kann keine E-Mails mehr empfangen!](#p03)  
[P04. Spamihilator filtert nichts](#p04)  
[P05. Ich habe eine Absender-Adresse zur Liste der blockierten Absender hinzugefügt. Wie kann ich sie dort wieder löschen?](#p05)  
[P06. Ich habe versehentlich den Papierkorb geleert. Wie kann ich eine Nachricht zurückholen?](#p06)  
[P07. Ich habe versehentlich eine Mail aus dem Trainingsbereich gelöscht. Wie kann ich sie zurückholen?](#p07)  

</div>
</div>

<div class="row">
<div class="twelve columns">
<hr>
</div>
</div>

<div class="row">
<div class="twelve columns" markdown="1">

### Allgemeine Fragen

#### <a id="a01"></a>A01. Woran erkennt das Programm eine Werbemail?

Spamihilator arbeitet mit zwei internen Filtern, um optimalen Spamschutz zu gewährleisten.
Standarmäßig werden zuerst alle Mails durch einen sogenannten Lernenden Filter überprüft. Wenn dieser
Filter zu keinem eindeutigen Ergebnis führt, wird zusätzlich der Wortfilter benutzt.
Außerdem gibt es noch zahlreiche [Plugins]({{ site.url }}/de/plugins), mit
denen Spamihilator erweitert werden kann.

Der Wortfilter sucht nach bekannten Schlüsselwörtern in Ihren Mails: den sogenannten Spam-Wörtern.
Es sind bereits einige Spam-Wörter bei der Installation von Spamihilator vordefiniert.
Sie können aber auch noch eigene hinzufügen. Jedes Wort hat eine bestimmte Spam-Wahrscheinlichkeit,
d.h. je häufiger ein Wort in Spam-Mails vorkommt, desto höher sollte seine Wahrscheinlichkeit sein.

Im Gegensatz zum Wortfilter arbeitet der Lerndende Filter nicht nur mit Wörtern, die häufig
in Spam-Nachrichten vorkommen, sondern auch mit solchen, die in Non-Spam-Nachrichten enthalten
sind, also in solchen Nachrichten, die auf keinen Fall geblockt werden sollen. Jedes Wort hat
eine bestimmte Wahrscheinlichkeit. Mit Hilfe der Regeln von Thomas Bayes (englischer Mathematiker, 18.
Jahrhundert) wird eine Gesamtwahrscheinlichkeit berechnet, ob die Mail Spam ist oder nicht. Manchmal
wird diese Filtermethode auch als die Bayesian Methode oder als Bayesian Filter bezeichnet.

Man kann zusätzlich noch E-Mail-Adressen in die Liste "Blockierter Absender" eintragen.
Diese Liste befindet sich im Einstellungsmenü.

#### <a id="a02"></a>A02. Wo landen die erkannten Werbemails?

Grundsätzlich werden alle Emails heruntergeladen. Nachrichten, die als Werbung erkannt werden,
werden im Papierkorb von Spamihilator abgespeichert. Sie können diesen öffnen, indem Sie
mit der rechten Maustaste auf das Programm-Symbol neben der Uhr klicken und dann "Papierkorb"
wählen. Dort lassen sich die Werbenachrichten anschauen, endgültig löschen und wiederherstellen.

Spamihilator sorgt immer dafür, dass der Papierkorb nicht zu voll wird. Sehr alte Mails
werden automatisch gelöscht.

#### <a id="a03"></a>A03. Kann man auch mehrere E-Mail-Adressen filtern?

Natürlich können Sie mehrere Adressen filtern. Der Setup-Assistent konfiguriert automatisch
alle Konten, die er findet, für die Benutzung mit Spamihilator.

Wenn Sie verschiedene E-Mail-Programme verwenden, können Sie den Assistenten mehrmals aufrufen,
um alle Programme richtig einzustellen. Sie finden ihn im Startmenü in der Spamihilator-Programmgruppe.

Wenn der Setup-Assistent ein Konto nicht findet, müssen Sie es manuell konfigurieren. Schauen
Sie sich dazu folgenden Link an:  
<http://wiki.spamihilator.com/doku.php?id=de:configclient>

Dort finden Sie eine kurze Anleitung, wie man auch andere Konten per Hand einstellt.

#### <a id="a04"></a>A04. Spamihilator und Hotmail

Spamihilator unterstützt zur Zeit nur POP3 und IMAP. Leider funktioniert Hotmail nicht mit diesen Protokollen.

#### <a id="a05"></a>A05. Spamihilator und Microsoft Exchange

Spamihilator unterstützt zur Zeit nur POP3 und IMAP. Sie müssen Ihren Exchange-Server also so
einstellen, dass eines dieser beiden Protokolle benutzt wird.

#### <a id="a06"></a>A06. Spamihilator und SSL

Spamihilator unterstützt verschlüsselte Verbindungen über TLS/SSL. Wenn die Option "Aktiviere SSL/TLS
automatisch, falls verfügbar" in den Einstellungen von Spamihilator (unter "Verbindung/SSL/TLS") aktiviert ist,
dann versucht das Programm automatisch eine verschlüsselte Verbindung herzustellen. Falls dies nicht
funktionieren sollte, nutzt Spamihilator eine unverschlüsselte Verbindung.

Ältere Versionen (vor 0.9.8) von Spamihilator unterstützen kein SSL. Bitte schalten Sie diese
Funktion in Ihrem E-Mail-Programm ab oder laden Sie sich die aktuellste Spamihilator-Version
[herunter]({{ site.url }}/de/download).

#### <a id="a07"></a>A07. Wie kann ich alle Mails filtern, die nicht in Deutsch sind?

Benutzen Sie den Trainingsbereich regelmäßig und markieren Sie alle Mails, die nicht
in Deutsch sind, als Spam und alle anderen als Non-Spam. Spamihilator lernt dadurch
zwischen Deutsch und anderen Sprachen zu unterscheiden und somit, wie es alle fremdsprachigen Mails
blockieren kann.

#### <a id="a08"></a>A08. Warum schickt das Programm keine gefälschten Fehlermeldungen an den Spam-Versender zurück?

Es ist eine nette Idee, falsche Fehlermeldungen an den Spam-Versender zurückzuschicken, damit dieser
denkt, die betroffene E-Mail-Adresse würde nicht existieren, oder um das Postfach des
Spam-Versenders selbst zu verstopfen. Diese Vorgehensweise gilt jedoch im Allgemeinen als
kontraproduktiv und zwar aus folgenden Gründen:

1. Die meisten Spam-Versender benutzen eine E-Mail-Adresse nur einmalig zum Versenden der
   Spam-Mails. Danach ist die Adresse oft ungültig. Das Zurücksenden von E-Mails würde
   Fehlermeldungen erzeugen, die dann wieder zu Ihnen zurückkommen.
2. Oftmals verwenden Spam-Versender gefälschte E-Mail-Adressen oder sogar existierende Adressen von
   anderen Leuten. Die falschen Fehlermeldungen könnten also auch unschuldige Benutzer treffen!
3. Eine Fehlermeldung kann man nicht 100%ig fälschen, sodass es für den Spam-Versender sogar
   möglich wäre zu erkennen, dass sich hinter Ihrer Adresse tatsächlich ein gültiges Postfach verbirgt,
   das sogar noch abgerufen wird.

#### <a id="a09"></a>A09. Kann ich Spamihilator in einer kommerziellen Umgebung einsetzen?

Spamihilator ist Freeware und somit kostenlos. Sie können es privat und in der Firma einsetzen ohne etwas
dafür bezahlen zu müssen. Weitere Informationen finden Sie in der [Spamihilator-Lizenz](#).

#### <a id="a10"></a>A10. Funktioniert Spamihilator mit meinem E-Mail-Programm (z.B. dem von T-Online)?

Grundsätzlich funktioniert Spamihilator mit jedem E-Mail-Programm, das POP3 oder IMAP verwendet.
Der Setup-Assistent von Spamihilator kann folgende Programme automatisch konfigurieren:
Outlook 2000/XP/2003/Express, Eudora, Mozilla Thunderbird, IncrediMail, Pegasus Mail, Phoenix Mail und Opera.

Andere E-Mail-Programme müssen Sie manuell einstellen. Schauen Sie dazu bitte in die [Hilfe]({{ site.url }}/de/help).

</div>
</div>

<div class="row">
<div class="twelve columns">
<hr>
</div>
</div>

<div class="row">
<div class="twelve columns" markdown="1">

### Probleme

#### <a id="p01"></a>P01. Das Programm zeigt beim Starten “Socket-Fehler”!

Auf dem PC ist ein anderes Programm installiert, das den POP3-Standardport 110 benutzt. Öffnen
Sie deshalb den Einstellungsdialog von Spamihilator, indem Sie mit der rechten Maustaste auf das
Programm-Icon klicken und "Einstellungen" wählen. Unter "Verbindung" finden Sie die den
POP3-Port. Ändern Sie den Wert von 110 auf zum Beispiel 120.

Starten Sie nun das Programm neu. Der Socket-Fehler dürfte jetzt nicht mehr erscheinen. Wenn doch,
ändern Sie den Wert auf einen anderen beliebigen Wert.

Jetzt müssen Sie Ihrem E-Mail-Programm noch klar machen, dass Sie den Port geändert haben. Klicken Sie
dazu z.B. in Outlook auf "Extras/Konten". Wählen Sie Ihr Email-Konto aus der Liste und klicken Sie
auf Eigenschaften. Unter dem Register "Erweitert" finden Sie die Einstellungen für den
"Posteingangserver (POP3)". Tragen Sie dort den gleichen Wert ein, wie bei Spamihilator.

Danach dürfte alles funktionieren.

#### <a id="p02"></a>P02. Ich kann keine Mails mehr versenden!

Ihr E-Mail-Provider benötigt eine Authentifizierung, bevor Sie senden können. Spamihilator ändert aber
Ihren Benutzernamen in Ihrem E-Mail-Programm.

In Outlook können Sie die Server-Authentifizierung z.B. folgendermaßen aktivieren:
Öffnen Sie Outlook und wählen Sie "Extras/Konten". Klicken Sie auf Ihr E-Mail-Konto und dann
auf "Eigenschaften". Unter dem Reiter "Server" finden Sie (unten) die Server-Authentifizierung.
Aktivieren Sie das Kontrollkästchen und klicken Sie auf "Einstellungen".

Tragen Sie bei "Anmelden mit" nun Ihren richtigen E-Mail-Benutzernamen und Passwort ein. Bestätigen Sie mit OK.

In Eudora können Sie keinen gesonderten Benutzernamen fürs E-Mail-Versenden angeben. Sie müssen dort
die Hinweise des Herstellers beachten:  
<http://www.eudora.com/techsupport/kb/2107hq.html> (englisch)

#### <a id="p03"></a>P03. Ich kann keine E-Mails mehr empfangen!

Stellen Sie sicher, dass die gesicherte Kennwortauthentifizierung in den Kontoeinstellungen Ihres
E-Mail-Programms ausgeschaltet ist. Spamihilator unterstützt nämlich zur Zeit das AUTH-Kommando noch nicht.

In Outlook Express rufen Sie zum Beispiel wieder Ihr Einstellungsfenster für Ihr E-Mail-Konto
auf und öffnen den Reiter "Server". Deaktivieren Sie dort die Option "Anmeldung durch gesicherte
Kennwortauthentifizierung".

Eventuell haben Sie auch eine Firewall installiert und Spamihilator kann sich deswegen
nicht mit dem Internet verbinden. Ändern Sie die Einstellungen Ihrer Firewall, damit
Spamihilator vollen Zugriff aufs Internet hat. Es muss außerdem in der Lage sein, als
lokaler Mail-Server arbeiten zu können.

Auf manchen Systemen kann es dazu kommen, dass das E-Mail-Programm den lokalen POP3-Server "localhost"
nicht auflösen kann. Bitte öffnen Sie in so einem Fall die Konto-Einstellungen Ihres
E-Mail-Programms und tragen Sie dort unter "POP3-Server" statt "localhost" die IP-Adresse
"127.0.0.1" ein (ohne Anführungszeichen).

#### <a id="p04"></a>P04. Spamihilator filtert nichts

Sie müssen sicherstellen, dass die Konfiguration Ihres E-Mail-Programms richtig ist. Wenn Sie zum
Beispiel E-Mails abholen und es erscheint kein gelbes Fenster unten rechts in der Bildschirmecke,
das Ihnen den Download-Status anzeigt, dann müssen Sie Ihr E-Mail-Programm eventuell noch
einmal richtig einstellen.

Benutzen Sie dazu entweder den Setup-Assistenten, den Sie auch im Startmenü in der Spamihilator-Programmgruppe
finden, oder richten Sie Ihr E-Mail-Programm manuell ein. Lesen Sie dazu die^
[Anleitung in der Hilfe](http://www.spamihilator.com/de/help/configclient).

Bitte überprüfen Sie auch, ob alle Spam-Filter eingeschaltet sind. Öffnen Sie dazu das
Einstellungsfenster von Spamihilator und klicken Sie auf "Filter-Eigenschaften". Aktivieren Sie alle
Filter (wie z.B. den Lernenden Filter und den Spam-Wort-Filter).

#### <a id="p05"></a>P05. Ich habe eine Absender-Adresse zur Liste der blockierten Absender hinzugefügt. Wie kann ich sie dort wieder löschen?

Klicken Sie mit der rechten Maustaste auf das Spamihilator-Symbol unten rechts neben der
Uhr im Taskleisteninfobereich. Wählen Sie "Einstellungen" aus dem Menü, um Spamihilators
Einstellungen zu öffnen. Klicken Sie auf "Blockierte Absender" auf der linken Seite und
wählen Sie dann die Adresse, die Sie entfernen möchten, aus der Liste auf der
rechten Seite. Drücken Sie auf "Löschen", um die Adresse zu entfernen.

#### <a id="p06"></a>P06. Ich habe versehentlich den Papierkorb geleert. Wie kann ich eine Nachricht zurückholen?

Der Papierkorb ist die letzte Anlaufstelle für Nachrichten, die von Spamihilator gelöscht
wurden. Er funktioniert genauso wie der Windows-Papierkorb oder der echte Papierkorb
neben Ihrem Schreibtisch: Sobald Sie ihn geleert haben, ist der Inhalt
unwiderruflich verloren. Sie können keine E-Mails aus einem leeren Papierkorb wiederherstellen.

Es besteht jedoch die Chance, dass sich eine Kopie der Nachricht, die Sie suchen,
nach wie vor im Trainingsbereich befindet. Schauen Sie dort nach, ob Sie
sie noch finden. Sie können sie dort über den Menüpunkt "Datei/Speichern unter..." auf
der Festplatte ablegen.

#### <a id="p07"></a>P07. Ich habe versehentlich eine Mail aus dem Trainingsbereich gelöscht. Wie kann ich sie zurückholen?

Bitte beachten Sie, dass der Trainingsbereich lediglich eine Kopie jeder eingehenden Nachricht
speichert. Die echte Nachricht befindet sich im Papierkorb von Spamihilator (falls sie
zuvor als Spam eingestuft wurde) oder im Posteingang Ihres E-Mail-Programms.

</div>
</div>
