---
uid: configclient
lang: en
title: Spamihilator &raquo; Mail Client Configuration
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; Mail Client Configuration

## Mail Client Configuration

Your mail client software (e.g. Microsoft® Outlook, Outlook Express, Thunderbird or Eudora) needs to be configured to enable filtering by Spamihilator.

### Mail Client Configuration with the Setup Wizard

Use the setup wizard to configure your mail client. The wizard will be launched after the installation of Spamihilator.

You can use the setup wizard later by clicking on **Spamihilator/Setup Wizard** in your start menu.

### Manual configuration

1.  Open your mail client and then open the account settings from its menu.  

2.  Enter your username in the following format:  

        pop3server&username[&port]

    If you have an <abbr title="Internet Message Access Protocol">IMAP</abbr> server you may enter your username in almost the same way:

        imapserver&username[&port]

    _The port is optional._  

    Examples:

        pop.gmx.net&anyuser@gmx.net&110
        pop3.web.de&freemailuser
        mail.anyserver.com&anyuser
        imap.theserver.com&myself&143
        imap.anotherserver.com&someoneelse
3.  Enter _localhost_ (or _127.0.0.1_ alternatively) as <abbr title="Post Office Protocol 3">POP3</abbr>/<abbr title="Internet Message Access Protocol">IMAP</abbr> server.  

4.  Save your settings by clicking on **OK**.

### Significant Note

It is very important to use separate server entries for mail _reception_ and for mail _sending_.

The server entries for the mail _reception_ have to be modified for Spamihilator, so he can interconnect the mail client with the mail server.

However, the mail _sending_ entries have to keep the preexisting informations. The reason is, that Spamihilator only operates with the mail reception, and never is involved in sending mail.

Some mail clients tend to change both entries together, which can cause some confusion in mail handling.

### Examples

This is an example from Microsoft® Outlook Express:

![]({{ site.url }}/images/docs/en/mailclientaccountsettings.png)

Now an example from the mail account configuration in Microsoft® Outlook 2010:

![]({{ site.url }}/images/docs/en/mailclientaccountsettings--.png)

</div>
</div>
