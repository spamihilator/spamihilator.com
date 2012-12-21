---
uid: spamihilator-0.9.9.39-has-been-released
title: Spamihilator 0.9.9.39 has been released!
lang: en
layout: post
---

The new Spamihilator version 0.9.9.39 has just been released. This version fixes
some minor bugs. Installation is recommended.

This is the complete list of changes:

* A problem in the IMAP component has been fixed: some restored messages contained
  additional characters.
* A problem in the IMAP component has been fixed: some messages could only
  be retrieved after a restart of the mail client.
* Parsing nested multipart messages works better now. This improves the quality
  of the Learning Filter.
* Closed GDI handle leaks. So, Spamihilator needs less resources if it runs very long.
* A problem has been fixed: some systems showed a black screen when the DCC Filter got active.
* A problem has been fixed: on some systems the main icon was displayed as a black square.
* Mail preview shows less blank lines now.
* The user's default browser will be opened now when the help files are about to be shown.
* The link to the frequently asked questions (FAQ) has been fixed in the main menu.

Please download Spamihilator from the following website:  
<{{ site.url }}/en/download>
