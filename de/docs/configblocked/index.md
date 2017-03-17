---
uid: configblocked
lang: de
title: Spamihilator &raquo; Blockierte Absender
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Blockierte Absender

## Blockierte Absender

<img src="{{ site.url }}/images/docs/de/configblocked_de.png" alt="Einstellungen für blockierte Absender" class="docs-screenshot">

Spamihilator verwaltetet eine Liste von blockierten Absendern. E-Mails von Absendern, die hier eingetragen sind, werden nicht an den Mail-Client übergeben.

#### Absender hinzufügen

Benutzen Sie den Button "**Neu...**", um einen neuen Absender hinzuzufügen. Es öffnet sich ein Fenster, in das Sie einen beliebigen Absendernamen eintragen können. Außerdem können Sie noch die E-Mail-Adresse angeben. Sie darf auch Platzhalter (* und ?) enthalten.

_Beispiele für Absender:_

    user@server.de
    *@server.de
    werbung@*.de

Wenn Sie alle Absender einer ganzen Domain blockieren wollen (z.B. `domain.de`), tragen Sie eine Platzhalteradresse ein: `*@domain.de`
{: .notetip }

Fügen Sie niemals die Adresse `*@*` zur Liste der Blockierten Absender hinzu, denn sonst erhalten Sie gar keine Mails mehr.
{: .notewarning }

</div>
</div>
