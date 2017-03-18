---
uid: learningfilter
lang: en
title: Spamihilator &raquo; The Learning Filter
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; The Learning Filter

## The Learning Filter

Spamihilator introduces a new generation of Spam Filters: **The Learning Filter!**

While the [Word Filter]({{ site.url }}/en/docs/wordfilter) only recognizes common spam words, the Learning Filter also recognizes common non-spam words which indicate regular mails that should not be deleted.

This filter scans every mail for known words. Every word has a certain probability. With the rules defined by Thomas Bayes (an 18th century English mathematician), Spamihilator calculates whether a mail is spam or not. This filtering method is also called the **Bayesian Method** or **Bayesian Filter**.

The result of the scan can indicate a mail as spam or non-spam, or neither. If the last result is the case, the [Word Filter]({{ site.url }}/en/docs/wordfilter) will process the mail as well.

### Training for the filter

In the beginning, the filter cannot differentiate between spam and non-spam mails. You have to teach Spamihilator in the [Training Area]({{ site.url }}/en/docs/trainingarea).

When "training", the filter will build a list of words that appear in spam mails and another list of words that appear in non-spam mails. The filter's efficiency will increase with the amount of words added to the lists when you use the [Training Area]({{ site.url }}/en/docs/trainingarea).

This method ensures that the filter will be adjusted to work with your daily mails, while the [Word Filter]({{ site.url }}/en/docs/wordfilter) is designed to work with standard spam mails. This will increase the recognition rate and minimize the possibility of "false positives" (non-spam mails that accidentally get into the Recycle Bin).

Tests have proven that a **recognition rate of more than 98%** can be achieved when using the [Training Area]({{ site.url }}/en/docs/trainingarea) as often as possible!

</div>
</div>
