---
uid: newsletterplugin
lang: en
title: Spamihilator &raquo; The Newsletter Plugin
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; The Newsletter Plugin

## The Newsletter Plugin

By default, this plugin has a higher priority than other filters. It checks all incoming mails for the following criteria:

### Receivers

Many newsletter senders use the same receiver address for every mail they send (e.g. newsletter@server.com). The same procedure is used for newsgroups (e.g. [Yahoo](http://www.yahoo.com/)). If you are subscribed to a newsgroup, you will receive every mail that is addressed to the newsgroup's mail address (e.g. group@yahoo.com).

You can enter these addresses in the [Newsletter Plugin settings]({{ site.url }}/en/docs/confignewsgroups). Mails that are sent to these addresses will be forwarded to your mail client. They won't be blocked by Spamihilator. This procedure reduces _false positives_ (mails that have been blocked by mistake).

### Signatures

The subject of most newsletters contains a specific signature (e.g. `[Spamihilator Newsletter]`).

You can enter these signatures in the [Newsletter Plugin settings]({{ site.url }}/en/docs/configsignatures). Mails that have such a signature in the subject will be forwarded to your mail client. They won't be blocked by Spamihilator. This procedure reduces _false positives_ (mails that have been blocked by mistake).

### Filter Priority

It is recommended that you give this plugin a very high priority. This ensures that the plugin is able to recognize all incoming newsletters and newsgroup mails as non-spam and forward them to your mail client.

</div>
</div>
