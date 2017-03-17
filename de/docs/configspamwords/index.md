---
uid: configspamwords
lang: de
title: Spamihilator &raquo; Spam-Wörter
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Spam-Wörter

## Spam-Wörter

<img src="{{ site.url }}/images/docs/de/configspamwords_de.png" alt="Einstellungen für die Spam-Wörter" class="docs-screenshot">

Der Wortfilter von Spamihilator untersucht jede eingehende E-Mail auf Werbung. Dazu benutzt er eine Liste von bekannten Wörtern, die häufig in Werbe-E-Mails vorkommen - die so genannten **Spam-Wörter**. Jedes dieser Wörter hat eine bestimmte Spam-Wahrscheinlichkeit.

In der Standardeinstellung muss die Summe aller in einer Mail gefundenen Spam-Wörter mindestens 100% betragen, damit eine E-Mail als Werbung erkannt wird. Sie können diesen Wert beeinflussen, indem Sie die [Aggressivität]({{ site.url }}/de/docs/configaggressiveness) des Filters verändern.

Außerdem können Sie eigene Wörter hinzufügen oder die Wahrscheinlichkeiten bereits vorhandener verändern.

#### Reguläre Ausdrücke

Der Wort-Filter in Spamihilator wurde in der neusten Version sehr verbessert. Er unterstützt nun auch reguläre Ausdrücke!

Mit regulären Ausdrücken kann man nicht nur einfache Spam-Wörter angeben, sondern auch Muster, nach denen in einer Spam-Mail gesucht werden soll.

#### Neue Wörter hinzufügen

Klicken Sie auf "**Neu...**", um einen neuen Ausdruck zur Liste hinzuzufügen. Es öffnet sich ein Fenster, in das Sie zuerst den Ausdruck (z.B. `advertisement`) eintragen müssen und dann die Wahrscheinlichkeit in Prozent.

<div class="noteimportant">
Bitte beachten Sie:
<ul>
<li>Es wird nicht auf Groß-/Kleinschreibung geachtet!</li>
<li>Eine E-Mail, die ein Wort enthält, das 100% Spam-Wahrscheinlichkeit hat, wird auf jeden Fall geblockt.</li>
</ul>
</div>

</div>
</div>
