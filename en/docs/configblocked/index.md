---
uid: configblocked
lang: en
title: Spamihilator &raquo; Blocked Senders
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; Blocked Senders

## Blocked Senders

![Settings for Blocked Senders]({{ site.url }}/images/docs/en/configblocked_en.png)
{: .docs-screenshot }

Spamihilator manages a list of blocked senders. Mails from these senders will not be delivered to the mail client.

#### Add a sender

Click the "**New...**" button to add a new sender to the list. A window will appear where you can enter a sender name and mail address that you want to block. The mail address can contain wildcards (* and ?).

_Some examples:_

    user@server.com
    *@server.com
    ads@*.com

If you want to block all senders from a specific domain (for example `domain.com`), add a wildcard address to the list: `*@domain.com`
{: .notetip }

Never add the wildcard address `*@*` to the list of blocked senders. Otherwise you will not receive mail anymore.
{: .notewarning }

</div>
</div>
