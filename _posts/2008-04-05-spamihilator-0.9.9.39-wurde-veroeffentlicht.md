---
uid: spamihilator-0.9.9.39-has-been-released
title: Spamihilator 0.9.9.39 wurde veröffentlicht!
lang: de
layout: post
---

Die neue Spamihilator-Version 0.9.9.39 wurde soeben veröffentlicht. Diese Version
behebt ein paar kleinere Fehler der vorigen Version. Die Installation wird
allen Benutzern empfohlen.

Dies ist die vollständige Liste aller Änderungen:

* Ein Problem im IMAP-Modul wurde behoben, das dazu führte, dass manche Nachrichten
  nach dem Wiederherstellen aus dem Papierkorb zusätzliche Zeichen enthielten.
* Ein Problem im IMAP-Modul wurde behoben, das dazu führte, dass manche Nachrichten 
  erst nach einem Neustart des E-Mail-Programms heruntergeladen werden konnten.
* Verschachtelte Multipart-Nachrichten können nun besser analysiert werden.
  Dadurch funktioniert der Lernende Filter besser.
* GDI-Handle-Leaks wurden geschlossen. Dadurch verbraucht das Programm weniger
  Ressourcen wenn es lange läuft.
* Ein Problem wurde behoben, das dazu führte, dass manche Systeme kurzzeitig
  einen schwarzen Bildschirm anzeigten, wenn der DCC-Filter aktiv wurde.
* Ein Problem wurde behoben, das dazu führte, dass das Spamihilator-Symbol
  auf manchen Systemen als schwarzes Quadrat wurde.
* Die Mail-Vorschau im Papierkorb und Trainingsbereich enthält nun weniger Leerzeilen.
* Der auf dem System eingestellte Standard-Browser wird nun geöffnet, wenn die
  Hilfe-Dateien angezeigt werden sollen.
* Der Link zu den häufig gestellten Fragen (FAQ) wurde im Hauptmenü korrigiert.

Bitte laden Sie sich Spamihilator von folgender Website herunter:  
<{{ site.url }}/de/download>
