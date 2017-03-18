---
uid: plugin-trust-spamassassin-headers
lang: en
title: Spamihilator &raquo; Plugins &raquo; Trust SpamAssassin Headers
layout: main_with_ad
---

[Spamihilator Plugins]({{ site.url }}/en/plugins) &laquo; Trust SpamAssassin Headers

### Trust SpamAssassin Headers

_by Alex Vallat_

This plugin reads the X-Spam-Status email header, which is set by SpamAssassin, and uses the values found there to determine whether the email is spam or not. This is useful when your mail server or ISP is running SpamAssassin.

It looks at the score, and the required score:

* If the score is negative, then it has been whitelisted in some way by SpamAssassin, so is reported as Not Spam.
* If the score is greater than the required score, then SpamAssassin is confident that it is spam, so it is reported as Spam.
* If the score is between 0 and the required score, then it is reported as Unsure.

Compatible with Spamihilator 0.9.9.26

<div class="downloadsection">
<a href="http://www.byalexv.co.uk/spamihilator/TrustSpamAssassinHeaders-0.3.exe" class="radius button left" id="download-button"><img src="{{site.url}}/images/download-arrow.png"> Download</a>
<ul id="download-notes">
<li>505 KB</li>
<li>Dec/18/2007</li>
</ul>
</div>

