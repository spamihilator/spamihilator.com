---
uid: configlearningfilter
lang: en
title: Spamihilator &raquo; Learning Filter
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; Learning Filter

## Learning Filter

![Learning Filter settings]({{ site.url }}/images/docs/en/configlearningfilter_en.png)
{: .docs-screenshot }

### Statistics

The [settings window]({{ site.url }}/en/docs/config) contains some statistics about the [Learning Filter]({{ site.url }}/en/docs/learningfilter). There you can see the number of spam and non-spam words in the filter's database and the memory it occupies. Furthermore, you can see the number of spam and non-spam mails the [Learning Filter]({{ site.url }}/en/docs/learningfilter) has analyzed.

### Settings

#### Limit Spamihilator's memory to [x] KB

The [Learning Filter]({{ site.url }}/en/docs/learningfilter) creates a list of words that often occur in spam or non-spam mails. This list will be saved in a file and then read into memory when filtering mails. You can limit the size of this file to a certain amount of kilobytes.

#### Compact the Learning Filter's memory

Use this feature to delete seldomly appearing words from the Learning Filters memory.

Important: Do not use this feature too often. Otherwise, the Learning Filter will not be able to build up a good database.
{: .noteimportant }

Press "**Compact**" to delete some words. In the Compact dialog window, you can specify if you want to delete only from the spam words list, or from the non-spam words list, or both.

Then press "**Run**" to start the process.

</div>
</div>
