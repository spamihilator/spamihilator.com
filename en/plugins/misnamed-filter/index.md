---
uid: plugin-misnamed-filter
lang: en
title: Spamihilator &raquo; Plugins &raquo; Misnamed Filter
layout: main_with_ad
---

[Spamihilator Plugins]({{ site.url }}/en/plugins) &laquo; Misnamed Filter

### Misnamed Filter

_by Alex Vallat_

This plugin's purpose is to detect spam emails which have been sent to valid email addresses, but using the wrong display names. For example, if an email is addressed to: "Richard Meyer"  then it is very likely to be spam (unless your name is Richard Meyer, of course!).

This filter is capable of learning the valid display names for addresses, based on the non-spam emails learnt through the training area, and can also be manually configured using regular expressions to exactly specify your email addresses and valid display names for them.

All incoming mail will have the To:, CC: and BCC: headers scanned for email addresses with display names. The presence of any known email address with a display name that is not known as valid for that address will cause the email to be marked as spam. This filter will never mark an email as non-spam.

Since version 0.3, it is compatible with Spamihilator 0.9.9.26

<div class="downloadsection">
<a href="http://www.byalexv.co.uk/spamihilator/MisnamedFilter-0.5.exe" class="radius button left" id="download-button"><img src="{{site.url}}/images/download-arrow.png"> Download</a>
<ul id="download-notes">
<li>115 KB</li>
<li>Feb/21/2010</li>
</ul>
</div>

