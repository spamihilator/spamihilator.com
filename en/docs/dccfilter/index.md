---
uid: dccfilter
lang: en
title: Spamihilator &raquo; The DCC Filter
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; The DCC Filter

## The DCC Filter

The **DCC Filter** is a Plugin. That means it is not directly integrated in Spamihilator, but it can be used to block Spam mails.

This filter is also called "**<abbr title="Peer to Peer">P2P</abbr> Plugin**", because it uses the Distributed Checksum Clearinghouse network to recognize Spam.

The plugin sends a secure checksum of every incoming mail to the network and receives the number of users who also sent the same checksum. Because of that, it is able to recognize unsolicited bulk mail.

The plugin uses an intelligent way to create fuzzy checksums. This increases the spam recognition rate.

More about the DCC network at: [http://www.rhyolite.com/anti-spam/dcc](http://www.rhyolite.com/anti-spam/dcc)

You can define the DCC servers the filter shall contact. Therefore use the [DCC Filter Settings]({{ site.url }}/en/docs/configdccfilter).

</div>
</div>
