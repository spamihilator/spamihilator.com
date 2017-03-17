---
uid: learningfilter
lang: de
title: Spamihilator &raquo; Der Lernende Filter
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Der Lernende Filter

## Der Lernende Filter

Spamihilator bietet Ihnen eine neue Art von Spam-Filtern: **Den Lernenden Filter!**

Im Gegensatz zum [Wortfilter]({{ site.url }}/de/docs/wordfilter) arbeitet der Lernende Filter nicht nur mit Wörtern, die häufig in Spam-Nachrichten vorkommen, sondern auch mit solchen, die in Non-Spam-Nachrichten enthalten sind, also in solchen Nachrichten, die auf keinen Fall geblockt werden sollen.

Der Filter durchsucht die Mails nach bekannten Wörtern. Jedes Wort hat eine bestimmte Wahrscheinlichkeit. Mit Hilfe der Regeln von Thomas Bayes (englischer Mathematiker, 18\. Jahrhundert) wird eine Gesamtwahrscheinlichkeit berechnet, ob die Mail Spam ist oder nicht. Manchmal wird diese Filtermethode auch als diese **Bayesian Methode** oder als **Bayesian Filter** bezeichnet.

Das Ergebnis der Filterung kann bedeuten, dass die Nachricht entweder Spam ist oder kein Spam (Non-Spam) oder keins von beiden. Tritt der letzte Fall ein, wird der [Wortfilter]({{ site.url }}/de/docs/wordfilter) benutzt, um die Nachricht zu überprüfen.

### Training für den Filter

Am Anfang weiß der Filter noch nicht, wie er Spam und Non-Spam unterscheiden kann. Sie müssen es ihm erst beibringen. Verwenden Sie dazu den [Trainingsbereich]({{ site.url }}/de/docs/trainingarea).

Durch "Training" baut der Filter eine Liste von Wörtern auf, die in Spam-Nachrichten auftauchen bzw. die in Non-Spam-Nachrichten enthalten sind. Der Filter lernt also dazu, je größer die Liste wird bzw. je öfter Sie den [Trainingsbereich]({{ site.url }}/de/docs/trainingarea) benutzen.

Durch das Training kann sich der Filter auf Ihr persönliches Mail-Aufkommen einstellen. Daraus folgt eine bedeutend höhere Erkennungsrate und extrem wenige "False Positives", d.h. wichtige Nachrichten, die aus Versehen im [Papierkorb]({{ site.url }}/de/docs/recycle) landen.

Tests haben gezeigt, dass eine **Erkennungsrate von über 98%** erreicht werden kann! Es ist also ratsam, den [Trainingsbereich]({{ site.url }}/de/docs/trainingarea) so oft wie möglich zu benutzen.

</div>
</div>
