---
uid: configpriorities
lang: en
title: Spamihilator &raquo; Priorities
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; Priorities

## Priorities

![Filter Priorities]({{ site.url }}/images/docs/en/configpriorities_en.png)
{: .docs-screenshot }

In this window you can specify the priorities of the filters for the filtering process.

The number in the left column specifies the order in which the filters will be executed. A lower number means a higher priority. By default, the filtering process will be aborted if a certain filter recognizes a mail as spam or non-spam. Thus, you can define your favorite filters.

To change the order of a filter, simply click on the filter in the list and then press "Up" or "Down".

You can also define what will happen if a specific filter recognizes a spam or non-spam mail. If you choose "**stop filtering process**", the current result will be saved and no other filters will be executed on that mail. This is the recommended default value.

If you click on "**continue with next filter**", the current result will be discarded and the mail will be processed by the next filter in the priority list. You can use this feature to disable specific functions of a certain filter.

Please note, a filter may return neither "Spam" nor "Non-Spam". In this case, the mail will be processed by the next filter. If the mail has been processed by all filters and the result is not clear, Spamihilator renders it to your mail client.

</div>
</div>
