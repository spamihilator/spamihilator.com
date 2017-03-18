---
uid: configconn
lang: en
title: Spamihilator &raquo; Connection
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; Connection

## Connection

All of these options are related to your Internet connection.

Attention: These settings should only be changed by experts. You have to know what you are doing.
{: .noteimportant }

![Connection settings]({{ site.url }}/images/docs/en/configconn_en.png)
{: .docs-screenshot }

### Local server

If port 110 (<abbr title="Post Office Protocol 3">POP3</abbr>) or port 143 (<abbr title="Internet Message Access Protocol">IMAP</abbr>) is already occupied by another program, you can choose another one here. Please change the port in your mail client, too.

#### Enable connections through this port

You should always leave this option enabled, so Spamihilator can listen to the local port 110 respectively 143. Otherwise, it's not possible to establish a connection between your e-mail client and Spamihilator.
{: .noteimportant }

### Timeout

If Spamihilator doesn't receive anything from the server for a certain period of time, a window will pop up where you will be asked if you want to abort the connection or wait a little longer. Please enter the time (in seconds) for how long Spamihilator should wait.

If you don't want to see this window, enable the "**Always abort on timeout**" option.

### Logging

The communication between your mail client and Spamihilator, and between Spamihilator and the server, will be logged to these files, respectively: `client.log` and `server.log`. You can find these files in your application data folder (`C:\Documents and Settings\_Username_\Application Data\Spamihilator`). Their size is limited to ensure that your hard drive won't fill up.

You can specify the **file names** and their **maximum size** here.

</div>
</div>
