---
uid: configfilter
lang: en
title: Spamihilator &raquo; Filter Properties
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; Filter Properties

## Filter Properties

![Filter Properties]({{ site.url }}/images/docs/en/configfilter_en.png)
{: .docs-screenshot }

Spamihilator checks every incoming mail for Spam by using certain filters (see [Filter Methods]({{ site.url }}/en/docs/filtermethods)).

### Plugins

You can extend Spamihilator's filtering capabilities with Plugins. You should always leave the option "**Enable Plugin Filters**" enabled. If you need to disable a specific Plugin, you can do so in the [Plugins]({{ site.url }}/en/docs/configplugins) section.

### Automatic Learning

The [Learning Filter]({{ site.url }}/en/docs/learningfilter) must be trained to work reliably. Therefore you should use the [Training Area]({{ site.url }}/en/docs/trainingarea).

If you enable the options "**Automatically learn from messages from my friends**" or "**Automatically learn from messages from blocked senders**" respectively, you won't need to mark mails from these senders in the [Training Area]({{ site.url }}/en/docs/trainingarea) manually.

Spamihilator can automatically learn from the [Recycle Bin]({{ site.url }}/en/docs/recycle). If you enable "**Automatically learn from restored messages from the Recycle Bin**", the program will mark a restored mail as non-spam in the [Training Area]({{ site.url }}/en/docs/trainingarea) and will automatically learn from it. The mail will no longer be in the [Training Area]({{ site.url }}/en/docs/trainingarea) after this procedure.

These options affect all learning plugins.
{: .noteimportant }

</div>
</div>
