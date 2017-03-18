---
uid: configconnssl
lang: en
title: Spamihilator &raquo; SSL/TLS
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; SSL/TLS

## SSL/TLS

All of these options are related to your Internet connection.

Attention: These settings should only be changed by experts. You have to know what you are doing.
{: .noteimportant }

![SSL/TLS Settings]({{ site.url }}/images/docs/en/configconnssl_en.png)
{: .docs-screenshot }

### Local server (POP3/IMAP)

If port 995 (<abbr title="Post Office Protocol 3">POP3</abbr>) or port 993 (<abbr title="Internet Message Access Protocol">IMAP</abbr>) is already being used by another program, you can choose another port here. Please change the port in your mail client, too.

#### Enable connections through this port

<div class="noteimportant">You should always leave this option enabled so Spamihilator can listen to the local port 995 respectively port 993. Otherwise, it's not possible to establish a secure connection between your e-mail client and Spamihilator.</div>

### Secure Connection (SSL/TLS)

Spamihilator is able to establish secure connections over <abbr title="Secure Sockets Layer">SSL</abbr>/TLS to your mail server. All data will be transferred in an encrypted format, so no one can read your mails or find out your passwords.

#### Automatically enable SSL/TLS if available

If this option is enabled, Spamihilator will check if your mail server supports secure connections when you connect to it the next time. If so, a secure connection will be established.

Please note: This procedure takes some time. There will be a flashing lock icon in the status window during the test. Spamihilator will only check a mail server once.
{: .notetip }

#### Known hosts...

Allows you to manually specify which mail servers support <abbr title="Secure Sockets Layer">SSL</abbr>/TLS and which do not.

</div>
</div>
