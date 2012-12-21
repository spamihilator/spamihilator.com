---
uid: spamihilator-0.9.9.44-has-been-released
title: Spamihilator 0.9.9.44 has been released!
lang: en
layout: post
---

The new Spamihilator version 0.9.9.44 has just been released. This version
fixes a few minor bugs. Besides the usability of the Training Area and Recycle
Bin has been improved a lot. Installing the new version is recommended for
all users who frequently work with these windows.

Please download Spamihilator from the following website:  
<{{ site.url }}/en/download>

The complete list of changes in this version follows.

### Training Area and Recycle Bin

* More shortcut keys have been added.
* Icons have been added to the menu.
* Toolbars are fully customizable now. They can even be hidden completely.
* Added possibility to move and hide list view columns.
* Added option to switch between Recycle Bin and Training Area via the shortcut button.
  The Recycle Bin window will be closed when the Training Area is opened and vice versa.
* The list view will gain keyboard focus again when the view message window has been closed.
* Improved sorting.

### Link filter

* Added effective top level domain handling. So, links like test1.co.uk,
  test2.co.uk and test3.co.uk will not be merged to co.uk anymore.

### General

* Added possibility to reset all answers to message boxes.
* Added language detail window with estimation about a language file's quality.
* Added support for the IMAP FETCH RFC822 command.

### Fixed bugs

* Messages will be premarked even when the Training Area is already open.
* Fixed display of the column sort icon in the Recycle Bin and Training Area under Vista.
* Updating the DCC Filter configuration file will not cause the installer to stall anymore.
* The last seen timestamp in the Link Filter's list of links will be updated correctly now
* Fixed a bug in the link filter that did not display the last seen date immediately
  when a new link was added manually.
