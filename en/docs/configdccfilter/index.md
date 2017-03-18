---
uid: configdccfilter
lang: en
title: Spamihilator &raquo; DCC Filter
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; DCC Filter

## DCC Filter

![DCC Filter Settings]({{ site.url }}/images/docs/en/configdccfilter_en.png)
{: .docs-screenshot }

These settings belong to the [DCC Filter]({{ site.url }}/en/docs/dccfilter).

This filter is also called "**<abbr title="Peer to Peer">P2P</abbr> Plugin**", because it uses the Distributed Checksum Clearinghouse network to recognize Spam.

The plugin sends a secure checksum of every incoming mail to the network and receives the number of users who also sent the same checksum. Because of that, it is able to recognize unsolicited bulk mail.

The plugin uses an intelligent way to create fuzzy checksums. This increases the spam recognition rate.

You can add new servers by clicking on the "**Add**" button. A complete list of all available DCC servers can be found at the following website:

[http://www.rhyolite.com/anti-spam/dcc](http://www.rhyolite.com/anti-spam/dcc)

Of course, you can remove certain items from the list, too. Just click on them and press the "**Delete**" button.

By pressing "**Edit...**" you can change an item.

</div>
</div>
