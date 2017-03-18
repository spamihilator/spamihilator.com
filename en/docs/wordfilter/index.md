---
uid: wordfilter
lang: en
title: Spamihilator &raquo; The Spam Word Filter
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; The Spam Word Filter

## The Spam Word Filter

Spamihilator uses a Word Filter to recognize spam mails. This filter scans new mails for common keywords: So called **Spam Words**.

The default installation of Spamihilator has many common spam words pre-defined. Of course, you can [add custom spam words]({{ site.url }}/en/docs/configspamwords). Every keyword has a certain spam probability. If a word is most likely indicating a spam mail, its probability should have a value of 100%.

Spamihilator will block a mail if it contains keywords whose total spam probability exceeds the defined threshold. By default, the threshold level is set to 100%. You can adjust the behavior of the Word Filter by changing the [aggressiveness]({{ site.url }}/en/docs/configaggressiveness) or changing the [spam probabilities]({{ site.url }}/en/docs/configaggressiveness).

### Regular Expressions

Spamihilator's Word Filter has been improved a lot lately. Now it also supports regular expressions!

With regular expressions you can search not only for simple spam words but also for patterns that represent a spam word in a mail.

### Examples of a Word Filter scan

Text of the mail:

    You are very sexy. I'd like to see you again!

    You receive this mail because you are subscribed to our mailing list. Please unsubscribe here!

Spamihilator's recognized words and spam probability (default settings):

    sex - 50%
    subscribed - 70%
    unsubscribe - 100%
    receive - 50%

Total spam probability: **270%**

⇒ **This mail will be exterminated!**

</div>
</div>
