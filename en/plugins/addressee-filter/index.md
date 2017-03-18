---
uid: plugin-addressee-filter
lang: en
title: Spamihilator &raquo; Plugins &raquo; Addressee Filter
layout: main_with_ad
---

[Spamihilator Plugins]({{ site.url }}/en/plugins) &laquo; Addressee Filter

### Addressee Filter

_by Carolyn Scheppner_

Quickly filters out mails that are not addressed To or Cc'd to one of your correct email addresses. This filter can be very effective if one or more of your correct email addresses is a hosted domain name and you get only spam to the underlying ISP address.

After installation, enter your own correct email address(es) in the Spamihilator Plugins settings for the Addressee Filter.

Example:  If your correct email address is myname@mydomain.com, and mydomain.com is hosted by someisp.com, and you get only spam mail to myname@someisp.com, enter your correct address, myname@mydomain.com, in the Addressee Filter configuration. If you have multiple correct email addresses, be sure to add all of them, but do not enter any addresses that receive only spam.  You may also want to add any mailing list To: addresses such as groupname@yahoo.com that bring you non-spam mail.

Using Spamihilator's Priorities settings, you can probably move Addressee Filter's priority up to just after your Newsletter and Whitestring type of filters.  However, first please read the note about Bcc's below.

NOTE: In some Bcc mail there is no addressee in any of the headers. This can occur when you receive a Bcc from someone whose email address is on the same hosted domain as yours with a mailer that strips the destination address and delivers such mail locally. If you find that this applies to you, you should add a pattern match of your own hosted domain to your Spamihilator friends list (* for name and *@mydomain.com for email), so that these Bcc's will not be marked as spam by Addressee Filter.

Version 1.0.2 both flags as spam and sets probability to 100 (1.0) as required by latest Spamihilator to indicate definite spam.

Version 1.0.3 fixes a bug that could flag multipart mail as spam even if sent to a correct email address.  In addition, descriptive text has been updated and a help file is now installed.

Version 1.0.4 was a beta release to the forum only, with new methods for spotting Bcc's to your correct email addresses.

Version 1.0.5 has a help with simplified appearance which is now installed to both the English and German help folders, although the help text is currently only in English.

<div class="downloadsection">
<a href="http://www.spamihilator.com/updates/plugins/scheppner/addresseefilter_1_0_5.exe" class="radius button left" id="download-button"><img src="{{site.url}}/images/download-arrow.png"> Download</a>
<ul id="download-notes">
<li>76 KB</li>
<li>Mar/13/2006</li>
</ul>
</div>

