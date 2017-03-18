---
uid: configspamwords
lang: en
title: Spamihilator &raquo; Spam Words
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; Spam Words

## Spam Words

![Settings for Spam Words]({{ site.url }}/images/docs/en/configspamwords_en.png)
{: .docs-screenshot }

Spamihilator's Word Filter examines every incoming mail. Therefore, it uses a list of well-known words that often appear in spam mails: the so-called **Spam Words**. Every one of these words has a certain probability.

By default, the sum of the probabilities of all spam words found in one mail must exceed 100% in order for Spamihilator to recognize this mail as spam. You can affect this value by altering the filter's [aggressiveness]({{ site.url }}/en/docs/configaggressiveness).

Furthermore, you can add your own spam words or change the probability of existing ones.

### Regular Expressions

Spamihilator's Word Filter has been improved a lot lately. Now it also supports regular expressions!

With regular expressions you can search not only for simple spam words but also for patterns that represent a spam word in a mail.

#### Add a spam word

Click on "**New...**" to add a new spam word to the list. A window will open where you can enter the expression (e.g. `advertisement`) and then enter a probability for it as a percentage.

<div class="noteimportant">
Please note:
<ul>
<li>Spam words are not case sensitive!</li>
<li>By default, a mail that contains a spam word that has a probability of 100% will always be blocked!</li>
</ul>
</div>

</div>
</div>
