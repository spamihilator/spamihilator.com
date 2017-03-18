---
uid: configlinks
lang: en
title: Spamihilator &raquo; Links
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; Links

## Links

![List of links]({{ site.url }}/images/docs/en/configlinks_en.png)
{: .docs-screenshot }

These settings belong to the [Link Filter]({{ site.url }}/en/docs/linkfilter).

The Link Filter searches incoming mails for links. Hence, it is able to recognize if a mail is spam or non-spam.

You can add new links to the list by clicking on the "**New**" button.

Existing links can be configured by clicking on "**Edit**". Change the link's type (_Spam_, _Non-Spam_ or _Ignored_) or protect the link against changes by the automatic [optimization]({{ site.url }}/en/docs/linkfilter).

Of course, you can remove certain links from the list. Just click on them and press the "**Delete**" button.

### Settings

![The Link Filter's settings]({{ site.url }}/images/docs/en/configlinks_settings_en.png)
{: .docs-screenshot }

Configure the Link Filter's optimization methods.

#### Automatically compact the list of links

Enable this option if you want the Link Filter to automatically delete old links from its internal list. This increases the filter performance and saves disc space.

#### Delete links which are older than [x] days

Configure how old a link has to be before it gets deleted from the list automatically.

#### Merge similar links with different subdomains

If you enable this option, similar links with differents subdomains will be merged into one link. This increases the filter's recognition rate.

#### Minimum number of subdomains

Enter the number of links with different subdomains that shall be merged.

#### Only merge links having the same type

If this option is enabled, only links with the same type (Spam, Non-Spam or Ignored) will be merged. Otherwise links with different types will be merged into an ignored one.

</div>
</div>
