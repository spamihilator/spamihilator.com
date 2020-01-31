---
uid: update-ssl-tls-certificate
title: Abgelaufenes SSL/TLS-Zertifikat aktualisieren
lang: de
layout: post
---

Das Zertifikat für die verschlüsselte Verbindung zwischen Ihrem E-Mail-Programm
und Spamihilator ist seit dem 29. Januar 2020 abgelaufen. Wenn Sie eine
entsprechende Fehlermeldung erhalten, befolgen Sie diese Anweisungen, um das
Zertifikat durch ein neues zu ersetzen:

* Laden Sie zunächst die ZIP-Datei mit dem neuen Zertifikat herunter:<br>
  <https://www.spamihilator.com/updates/Spamihilator_Certificate_2020-01-31.zip>
* Entpacken Sie die ZIP-Datei in einen beliebigen Ordner. Darin enthalten sind
  die Dateien `cert.server.pem`, `key.server.pem` und `spamihilator.der`.
* Kopieren Sie diese Dateien in das Spamihilator-Programmverzeichnis. Sie
  finden dieses Verzeichnis unter `C:\Programme\Spamihilator` oder
  `C:\Programme (x86)\Spamihilator`.
* Überschreiben Sie die existierenden Dateien!
* Starten Sie anschließend Spamihilator oder Ihren Computer neu
* Starten Sie außerdem Ihr E-Mail-Programm neu
* Wenn Sie das nächste Mal E-Mails abholen, zeigt Ihnen Ihr E-Mail-Programm
  möglicherweise eine Warnung, dass das Zertifikat von einem unbekannten
  Aussteller kommt. Bestätigen Sie diese Warnung. In Outlook sollten Sie
  außerdem auf "Zertifikat anzeigen" und dann auf "Zertifikat installieren"
  klicken, um die Meldung dauerhaft zu entfernen.
* Danach sollte Spamihilator wieder wie gewohnt funktionieren.
