---
uid: update-ssl-tls-certificate
title: How to update the expired SSL/TLS certificate
lang: en
layout: post
---

The certificate for encrypted connections between your email client and
Spamihilator has expired on 29 January 2020. If you get an error message,
follow these instructions to replace the certificate with a new one:

* First, download the ZIP file with the new certificate:<br>
  <https://www.spamihilator.com/updates/Spamihilator_Certificate_2020-01-31.zip>
* Extract the ZIP file into any folder. Inside, you will find the files
  `cert.server.pem`, `key.server.pem`, and `spamihilator.der`.
* Copy these files into the Spamihilator program directory. You can find this
  directory under `C:\Program Files\Spamihilator` or
  `C:\Program Files (x86)\Spamihilator`.
* Overwrite the existing files!
* Restart Spamihilator or your computer
* Also restart your email client
* When your email client looks for new messages the next time, you may get a
  warning that the certificate has been issued by an unknown authority. Confirm
  this warning. In Outlook, you should also click on "View certificate" and
  then on "Install certificate" to permanently disable this warning.
* After this, Spamihilator should work as usual.
