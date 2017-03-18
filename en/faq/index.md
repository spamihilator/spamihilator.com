---
uid: faq
lang: en
title: Spamihilator FAQ
layout: main
---

<div class="row">
<div class="twelve columns" markdown="1">

## Support
{: .page-title }

### Frequently Asked Questions (FAQ)

This is a list of frequently asked questions.

#### Table of contents

##### General Questions

[A01. How does the program recognize a spam mail?](#a01)  
[A02. Will spam mails be saved anywhere?](#a02)  
[A03. Can I use Spamihilator with multiple accounts?](#a03)  
[A04. Spamihilator and Hotmail](#a04)  
[A05. Spamihilator and Microsoft Exchange](#a05)  
[A06. Spamihilator and SSL](#a06)  
[A07. How can I block all mails that are not in English?](#a07)  
[A08. Why doesn't Spamihilator send faked error messages back to the spam sender?](#a08)  
[A09. May I use Spamihilator in a commercial environment (i.e. on my company's computers)?](#a09)  
[A10. Does Spamihilator work with my email client?](#a10)  
[A11. How do I find my configuration directory?](#a11)  

##### Problems

[P01. I get a "Socket-Error" on startup!](#p01)  
[P02. I cannot send emails anymore!](#p02)  
[P03. I cannot receive emails anymore!](#p03)  
[P04. Spamihilator doesn’t recognize any spam mail](#p04)  
[P05. I accidentally added an email address to the list of blocked senders. How can I remove it from there?](#p05)  
[P06. I accidentally emptied the Recycle Bin. How can I get a certain message back?](#p06)  
[P07. I accidentally deleted a mail from the Training Area. How can I get it back?](#p07)  

</div>
</div>

<div class="row">
<div class="twelve columns">
<hr>
</div>
</div>

<div class="row">
<div class="twelve columns" markdown="1">

### General Questions

#### <a id="a01"></a>A01. How does the program recognize a spam mail?

Spamihilator uses two filtering methods to reach maximum spam protection. By default,
Spamihilator scans every new email with the Learning Filter. If this method is not
able to classify an email, it will be processed by the Spam Word Filter.
There are also several [plugins]({{ site.url }}/en/plugins) which extend Spamihilator.

The Spam Word Filter scans new emails for common keywords: So-called Spam Words.
The default installation of Spamihilator has many common spam words predefined. Of
course you can add custom spam words. Every keyword has a certain spam probability.
If a word is most likely indicating a spam mail, its probability should have a value of 100%.

While the Spam Word Filter only recognizes common spam words, the Learning Filter
also recognizes common non-spam words, which indicate regular emails that should
not be deleted. Every word has a certain probability. With the rules defined from
Thomas Bayes (English mathematician, 18. century) Spamihilator calculates whether an
email is spam or not. This filtering method is also called Bayesian Method or Bayesian Filter.

In addition you can add email addresses to the list of blocked senders. You will
find this list in the options dialog.

#### <a id="a02"></a>A02. Will spam mails be saved anywhere?

Basically all emails will be downloaded. Messages, that are declared to
be spam, will be saved in Spamihilator's Recycle Bin. You can open it by
right-clicking on the Spamihilator icon in your tray. Of course you
can undelete messages, view messages and finally delete messages.

Spamihilator takes care of the recycle bin's content size. Old messages will be
deleted automatically.

#### <a id="a03"></a>A03. Can I use Spamihilator with multiple accounts?

Yes. The Setup Wizard automatically configures all accounts. Click on
"Start/Programs/Spamihilator/Setup-Wizard" to set up each account.

If the Setup Wizard doesn't find one of your accounts you will have to
configure it manually. Please read the help files:  
<http://www.spamihilator.com/en/docs/configclient/>

#### <a id="a04"></a>A04. Spamihilator and Hotmail

Spamihilator only supports POP3 and IMAP at this moment. Unfortunately,
Hotmail doesn't work with these protocols.

#### <a id="a05"></a>A05. Spamihilator and Microsoft Exchange

Spamihilator only supports POP3 and IMAP at this moment. You have to configure your
Microsoft Exchange-Server to use one of these protocols.

#### <a id="a06"></a>A06. Spamihilator and SSL

Spamihilator support secure connections over TLS/SSL. Enable the option "Automatically use SSL/TLS
if available" in Spamihilator's settings window ("Connections/SSL/TLS"). The program will
automatically try to establish a secure connection. If this does not work, Spamihilator will
use an unencrypted connection.

Older versions of Spamihilator (before 0.9.8) do not support SSL. Please disable
this feature in your mail client or [download]({{ site.url }}/en/download) the
latest program version.

#### <a id="a07"></a>A07. How can I block all mails which are not in English?

Use the Training Area frequently and mark all messages which are not English
as Spam and the other ones as Non-spam. Eventually the program will learn
to differentiate between English and other languages and so it will be able
to block all foreign mails.

#### <a id="a08"></a>A08. Why doesn’t Spamihilator send faked error messages back to the spam sender?

It seems to be a nice idea to send faked error messages back to the spam sender,
so that he might think the respective mail account does not exist or that his
own account will get jammed. Unfortunately this is considered counterproductive,
for the following reasons:

1. Most spam senders use their mail accounts only once, just to send a few spam mails.
   After that they delete these accounts. Sending faked error messages would produce
   further error messages which will be sent back to you.
2. Usually spam senders fake their email addresses or even use the ones of other
   Internet users. Hence, faked error messages could get into the mailboxes of innocent people!
3. You cannot thoroughly fake an error message. Spam senders could find out that the
   message is faked and, thus, that there is a real person behind your mail address.

#### <a id="a09"></a>A09. May I use Spamihilator in a commercial environment (i.e. on my company's computers)?

Spamihilator is Freeware and, thus, you can use it on your private computer or on
any computer at your company for free. You don’t have to pay anything. You can find
more information in the [Spamihilator License](#).

#### <a id="a10"></a>A10. Does Spamihilator work with my email client?

Basically, Spamihilator works with all email clients supporting POP3 or IMAP.
The Setup Wizard is able to configure the following programs automatically:
Outlook 2000/XP/2003/Express, Eudora, Mozilla Thunderbird, IncrediMail, Pegasus Mail, Phoenix Mail and Opera.

Grundsätzlich funktioniert Spamihilator mit jedem E-Mail-Programm, das POP3 oder IMAP verwendet.
Der Setup-Assistent von Spamihilator kann folgende Programme automatisch konfigurieren:
Outlook 2000/XP/2003/Express, Eudora, Mozilla Thunderbird, IncrediMail, Pegasus Mail, Phoenix Mail und Opera.

Other mail clients have to be configured manually. Please have a look at the
[online help]({{ site.url }}/de/help).

#### <a id="a11"></a>A11. How do I find my configuration directory?

The latest Spamihilator versions are multi-user compatible, that means settings (incl. Recycle Bin, Training Area etc.) will be saved in the users application data directory and not in the program folder. This ensures, changed settings can always be saved correctly, even though the user has no write-access to the program folder, just like under Windows Vista. But also Windows 2000 and XP protect the program folder if the user has a non-privileged account.

Important files in the configuration directory are for example: `spamihilator.ini`, `client.log`, `server.log`, `recyclebin.xml` and `training.xml`.

You can find this directory at one of the following places:

1.  If Spamihilator has been installed with the option "Separate settings per user account" (recommended, default method):
    Windows 2000/XP:  
    _C:\Documents and Settings\\**Username**\Application Data\Spamihilator_  
    Windows Vista:  
    _C:\Users\\**Username**\AppData\Roaming\Spamihilator_  
2.  If Spamihilator has been installed with the option "Shared settings for all users" (old method):  
    _C:\Program Files\Spamihilator_

</div>
</div>

<div class="row">
<div class="twelve columns">
<hr>
</div>
</div>

<div class="row">
<div class="twelve columns" markdown="1">

### Problems

#### <a id="p01"></a>P01. I get a "Socket-Error" on startup!

There is another programm installed on your PC using the POP3 port 110. Open
Spamihilator's settings dialog by right-clicking the program icon in the tray area
and choosing "Settings". Open "Connection" and change the POP3 port from 110 to
another value. I suggest 120.

Restart the program. "Socket-Error" should not appear again.

Now you have to change the settings in your email client. Open your account
settings. Choose "Server-Settings" or "Connection-Settings" or something like that
and change the port of the POP3 server to the same value you entered in Spamihilator.

Now, everything should work.

#### <a id="p02"></a>P02. I cannot send emails anymore!

Your email provider requires authentication before you can send emails, but
Spamihilator changes your user name in your email client.

In Outlook you can enable the authentication as follows:
Launch Outlook and open your account settings. Choose your email account from
the list and click on "Properties". Open the "Server" pane and enable the
option "Server-Authentication" (below). Click on the "Settings" button. Enter
your right user name and your right password. Close the dialog by clicking on OK.

In Eudora you cannot specify an extra username for outgoing connections. You have to
follow the advices of Qualcomm:  
<http://www.eudora.com/techsupport/kb/2107hq.html>

#### <a id="p03"></a>P03. I cannot receive emails anymore!

Please make sure, that the "Secure Password Authentication" is disabled in
the account settings of your email client, since Spamihilator doesn't support the
AUTH command yet.

Maybe you have a Firewall installed. Please make sure that it doesn't prevent
Spamihilator to fully access the Internet. The program should be able to act as a
local mail server, too.

On some systems the email client is not able to resolve the address of the local POP3
server "localhost". In this case, open the email client's account settings and change
the POP3 server from "localhost" to "127.0.0.1" (without quotation marks).

#### <a id="p04"></a>P04. Spamihilator doesn’t recognize any spam mail

Please make sure that your email client is configured properly. If you're downloading
messages and the yellow status window does not show up, you have to configure your email
client manually.

You can either use the Setup Wizard (Start/Programs/Spamihilator/Setup-Wizard) or
configure your client by hand. Therefore read the [help files](http://www.spamihilator.com/en/help/configclient).

Furthermore make sure, that the spam filters are not disabled. Open Spamihilator's
settings dialog and click on "Filter-Properties". Enable all filters (such as
the Learning Filter and the Spam Word Filter).

#### <a id="p05"></a>P05. I accidentally added an email address to the list of blocked senders. How can I remove it from there?

Right click Spamihilator's main icon in the tray area in the right bottom
corner of your screen. Choose "Settings" from the menu to open Spamihilator's
settings window. Click "Blocked Senders" in the list view on the left and then
select the address you want to remove in the list view on the right. Delete
it via the "Delete" button.

#### <a id="p06"></a>P06. I accidentally emptied the Recycle Bin. How can I get a certain message back?

The Recycle Bin is the last resort for mails deleted by Spamihilator. It
works just like the Windows Recycle Bin or your real bin beneath your desk:
If you empty it all items will be lost forever. You cannot restore a
message from an empty Recycle Bin.

There is a real chance a copy of the mail you're looking for is still in the
Training Area. If you find it there you can save it to your hard drive by
clicking "File/Save as...".

#### <a id="p07"></a>P07. I accidentally deleted a mail from the Training Area. How can I get it back?

Please note that the Training Area just saves a copy of every incoming mail.
The real message is either in Spamihilator's Recycle Bin (if it has been declared
as Spam before) or in your mail client's inbox.

</div>
</div>
