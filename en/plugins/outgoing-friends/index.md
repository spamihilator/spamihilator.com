---
uid: plugin-outgoing-friends
lang: en
title: Spamihilator &raquo; Plugins &raquo; Outgoing Friends
layout: main_with_ad
---

[Plugins/Add-Ons]({{ site.url }}/en/plugins) &laquo; Outgoing Friends

### Outgoing Friends

_by Alex Vallat_

Anyone I send an email to is not a spammer, so what this utility does is scan every outgoing email and adds all the recipients to the Spamihilator Friends list. It does this by using acting as an SMTP proxy (courtesy of the EmailRelay project), in much the same way as Spamihilator is behaving as a POP proxy.

You configure your email client to use localhost as an SMTP server, and configure this utility with your actual SMTP server details.

An Installer/Uninstaller is provided. The .net CLR runtimes are required (the installer will give you the option to download and install them if they are missing).

Source code in C# (and NSIS for the installer) is included.

<div class="downloadsection">
<a href="http://www.byalexv.co.uk/spamihilator/OutgoingFriends-0.5.exe" class="radius button left" id="download-button"><img src="{{site.url}}/images/download-arrow.png"> Download</a>
<ul id="download-notes">
<li>543 KB</li>
<li>Jan/25/2008</li>
</ul>
</div>

