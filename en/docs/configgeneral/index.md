---
uid: configgeneral
lang: en
title: Spamihilator &raquo; General Settings
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator Documentation]({{ site.url }}/en/docs) &laquo; General Settings

## General Settings

![General Settings]({{ site.url }}/images/docs/en/configgeneral_en.png)
{: .docs-screenshot }

#### Launch Spamihilator at Windows startup

Activate this option if you want Spamihilator to automatically launch when starting Windows.

### Updates

#### Automatically check for updates

Here you can enable Spamihilator to automatically contact the Spamihilator server and search for updates to keep your Spamihilator program version up-to-date. This will happen in the background and only when an Internet connection is already established.

#### Every [x] days

This will set the frequency of the automatic update search.

#### Check now!

Click on this button to manually search for updates.

### Message boxes

Some messages boxes displayed by Spamihilator have the option "Do not display this message again" or "Save my answer". If you want to reset the saved answers use the button "**Reset all answers**".

### Backup your settings

#### Export...

You can save all of your Spamihilator settings in a backup file. This is useful if you have to re-install Spamihilator on another computer or after a system crash.

When clicking on "**Export...**", a dialog will appear where you can choose a filename and location for the backup file. Spamihilator is able to save the following settings:

* General Configuration (includes Friends, Blocked Senders and the Spam Statistics)
* Plugin configuration files
* User-defined Spam Words
* Memory of the [Learning Filter]({{ site.url }}/en/docs/learningfilter)
* All mails in the Recycle Bin
* All mails in the Training Area

#### Import...

When clicking on "**Import...**", a dialog will appear where you must choose the file that should be imported and you can select which data will be imported from that file. You can restore all information that has been saved to a backup file with the export function of Spamihilator, or you can restore just some of it.

Please note: The imported data will overwrite the existing Spamihilator settings, including mails in the Recycle Bin. If you are not sure about this, please create an additional backup file of the current settings in case you need to revert back to your current settings.
{: .noteimportant }

</div>
</div>
