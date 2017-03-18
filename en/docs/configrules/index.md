---
uid: configrules
lang: en
title: Spamihilator &raquo; Rules
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; Rules

## Rules

![List of rules]({{ site.url }}/images/docs/en/configrules_en.png)
{: .docs-screenshot }

The settings described here belong to the [Rule Filter]({{ site.url }}/en/docs/rulefilter).

The Rule Filter checks mails using configurable **Rules**.

You can add new rules by clicking on "**New**".

You can configure existing rules by clicking on "**Edit**".

Of course, you can remove particular rules from the list. Just click on "**Delete**".

### Add a New Rule

![Add rule]({{ site.url }}/images/docs/en/addrule_en.png)
{: .docs-screenshot }

Every rule is named by a unique name, so you can find it easily in the list of rules. If the Rule Filter has processed an e-mail, the rule's name will be shown in the [Recycle Bin]({{ site.url }}/en/docs/recycle) or in the [Training Area]({{ site.url }}/en/docs/trainingarea) (in the filter reason section), respectively.

Moreover, you can define, what should happen, if a rule matches an e-mail. With **Action** you can choose the respective e-mail to be moved into the Recycle Bin (spam-messages) or to be forwarded to your e-mail client (non-spam).

#### Conditions

All rules contain one ore more **Conditions**, which can evaluate to true or false. While adding a rule, you can specify, whether all conditions have to be true (logical AND), or at least one (logical OR), to let the action defined be executed.

A condition consists of a **Subject**, a **Relation** and an **Argument**.

With the **Subject**, you are declaring, which part of an e-mail you want to be examined. The following subjects are available:

* Subject (of the mail)
* Sender
* Recipient
* CC
* Date
* Size (KB)
* Message text
* Message (with <abbr title="HyperText Markup Language">HTML</abbr>)
* Others ...

Choosing the entry **Others**, you can add further message header lines you want to be checked by the Rule Filter.

You can choose one of the following **Relations**:

* contains
* contains not
* is
* is not
* begins with
* ends with
* is larger than
* is smaller than
* contains (RegEx)
* contains not (RegEx)
* matches (RegEx)
* matches not (RegEx)

The **Argument** can be any text you want to be compared by the chosen relation with the subject. If you use "is larger than", respectively "is smaller than", Spamihilator will try to interpret the argument as a number. With the relations tagged with "(RegEx)", you can specify the argument using regular expressions.

### Examples

The following rule will move an e-mail into the Recycle Bin, if it has already been already labeled as spam by the mail server:

**Name**: Already Labeled as Spam by the Mail Server  
**Action**: Move Message to the Recycle Bin  
**Condition**: "`X-Spam-Flag`" begins with "`YES`"

With the following Rule, all e-mails larger than 1 <abbr title="Megabyte">MB</abbr> will be transferred to your mail client automatically:

**Name**: Large Non-Spam Message  
**Action**: Send Message to the E-Mail Client  
**Condition**: "Size (KB)" is larger than "`1024`"

### Advanced Settings

Click on **Advanced** to enable [Rule Specific Settings]({{ site.url }}/en/docs/configrulessettings) for a particular rule.

</div>
</div>
