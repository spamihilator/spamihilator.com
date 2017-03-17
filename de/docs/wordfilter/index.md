---
uid: wordfilter
lang: de
title: Spamihilator &raquo; Der Wortfilter
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Der Wortfilter

## Der Wortfilter

Spamihilator benutzt einen Wortfilter, um Spam zu erkennen. Dieser Filter sucht nach bekannten Schlüsselwörtern in Ihren Mails: den so genannten **Spam-Wörtern**.

Es sind bereits einige Spam-Wörter bei der Installation von Spamihilator vordefiniert. Sie können aber auch eigene [hinzufügen]({{ site.url }}/de/docs/configspamwords).

Jedes Wort hat eine bestimmte Spam-Wahrscheinlichkeit, d.h. je häufiger ein Wort in Spam-Mails vorkommt, desto höher sollte seine Wahrscheinlichkeit sein. Wörter, die auf jeden Fall in Spam vorkommen, sollten eine Wahrscheinlichkeit von 100% erhalten.

Spamihilator blockiert eine Nachricht, wenn die Summe der Wahrscheinlichkeiten aller in dieser Mail gefundenen Wörter eine bestimmte Schwelle übersteigt. In der Normaleinstellung liegt die Schwelle bei 100%. Sie können die Aggressivität des Filters beeinflussen, indem Sie eine andere [Stufe wählen]({{ site.url }}/de/docs/configaggressiveness) oder andere Schwellenwerte bestimmen.

### Reguläre Ausdrücke

Der Wort-Filter in Spamihilator wurde in der neusten Version sehr verbessert. Er unterstützt nun auch reguläre Ausdrücke!

Mit regulären Ausdrücken kann man nicht nur einfache Spam-Wörter angeben, sondern auch Muster, nach denen in einer Spam-Mail gesucht werden soll.

### Beispiel für eine Filterung durch den Wortfilter

Inhalt der E-Mail:

    You are very sexy. I'd like to see you again!

    You receive this message because you are subscribed to our mailing list. Please unsubscribe here!

Gefundene Wörter und Spamwahrscheinlichkeiten in der Standardeinstellung:

    sex - 50%
    subscribed - 70%
    unsubscribe - 100%
    receive - 50%

Summe der Wahrscheinlichkeiten: **270%**

⇒ **Diese E-Mail wird also gefiltert werden!**

</div>
</div>
