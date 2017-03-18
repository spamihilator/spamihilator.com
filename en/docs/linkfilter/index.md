---
uid: linkfilter
lang: en
title: Spamihilator &raquo; The Link Filter
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; The Link Filter

## The Link Filter

The **Link Filter** is a Plugin. That means it is not directly integrated in Spamihilator, but it can be used to block Spam mails.

The filter uses a list of links often contained in spam and non-spam mails. Each link has a certain type:

* **Spam**: Such a link often occurs in spam mails
* **Non-Spam**: Often occurs in non-spam mails
* **Ignored**: Such a link will not be used for mail classification

The filter counts the number of spam and non-spam links in an incoming mail and calculates its probability of being spam. If there are more spam links than non-spam ones the mail will be moved to the [Recycle Bin]({{ site.url }}/en/docs/recycle).

You can configure the links the filter uses to classify incoming messages. Open Spamihilator's [settings dialog]({{ site.url }}/en/docs/config) and click on [Links]({{ site.url }}/en/docs/configlinks).

### Training

This filter can be trained, just like the [Learning Filter]({{ site.url }}/en/docs/learningfilter). Please use the [Training Area]({{ site.url }}/en/docs/trainingarea) to tell the Link Filter which links occur in spam and non-spam mails respectively.

This method ensures that the filter will be adjusted to work with your daily mails. This will increase the recognition rate and minimize the possibility of "false positives" (non-spam mails that accidentally get into the [Recycle Bin]({{ site.url }}/en/docs/recycle)).

### Optimization

The Link Filter automatically tries to improve its recognition rate. Therefore it uses the following methods:

* **Compact the list of links**: The filter removes links which have not been found since several days. This increases the filter performance and saves disc space.
* **Merge links**: Similar links with different subdomains will be merged into on link. This results in a higher recognition rate.

The methods of optimization can be configured in the [Link Filter's settings]({{ site.url }}/en/docs/configlinks).

</div>
</div>
