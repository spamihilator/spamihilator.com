---
uid: rulefilter
lang: de
title: Spamihilator &raquo; Der Regelfilter
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Der Regelfilter

## Der Regelfilter

Der **Regelfilter** untersucht eingehende Nachrichten mit Regeln auf unerwünschte oder erwünschte Mail-Eigenschaften. Einige Regeln werden von Spamihilator bereits zur Verfügung gestellt, weitere können selbst definiert werden.

Technisch ist der Regelfilter ein Plugin, das heißt, dass er nicht ins Spamihilator-Hauptprogramm integriert, sondern als Erweiterungsmodul eingebunden ist.

Der Filter wendet seine konfigurierbare Liste von Regeln auf den Mail-Header und den Nachrichtentext an. Das Ergebnis der Auswertung entscheidet darüber, ob eine E-Mail in den [Papierkorb]({{ site.url }}/de/docs/recycle) verschoben oder an das E-Mail-Programm weitergeleitet wird. Wenn keine der Regeln auf die untersuchte E-Mail zutrifft, wird sie an den nächsten Filter in der [Filterreihenfolge]({{ site.url }}/de/docs/configpriorities) weitergereicht.

### Regeln erstellen

Eine genaue Beschreibung der Möglichkeiten zur Erstellung von Regeln finden Sie unter [Regeln]({{ site.url }}/de/docs/configrules).

Eine Regel kann beispielsweise lauten: eine Mail, die größer als 1 <abbr title="Megabyte">MB</abbr> ist, wird als reguläre Mail bewertet. Oder: eine Mail, welche die eigene Signatur oder Wörter aus einer Whitelist enthält, wird als erwünschte Mail betrachtet.

Umgekehrt können beispielsweise Mails mit leerem Nachrichtentext als Spam definiert werden. Oder es können Mails, die nicht von üblichen Top-level-domains gesendet wurden, oder die keine üblichen Character-sets enthalten, ausgesiebt werden. Mails, die bestimmte Spamwörter in Absender oder Betreff enthalten, können als Spammails gefiltert werden.

</div>
</div>
