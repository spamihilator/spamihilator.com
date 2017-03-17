---
uid: configlinks
lang: de
title: Spamihilator &raquo; Links
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Links

## Links

<img src="{{ site.url }}/images/docs/de/configlinks_de.png" alt="Liste der Links" class="docs-screenshot">

Diese Einstellungen gehören zum [Link-Filter]({{ site.url }}/de/docs/linkfilter).

Der Link-Filter sucht nach Links in eingehenden Nachrichten und kann dadurch erkennen, ob eine Mail Spam oder Non-Spam ist.

Sie können neue Links hinzufügen, indem Sie auf "**Neu**" klicken.

Existierende Links können Sie durch einen Klick auf "**Ändern**" konfigurieren. Stellen Sie z.B. die Art des Links (_Spam_, _Non-Spam_ oder _Ignoriert_) ein, oder schützen Sie einen Link vor automatischen Veränderungen durch die [Optimierungsmaßnahmen des Filters]({{ site.url }}/de/docs/linkfilter).

Natürlich können Sie auch bestimmte Links aus der Liste entfernen. Klicken Sie dazu einfach auf "**Löschen**".

### Einstellungen

<img src="{{ site.url }}/images/docs/de/configlinks_settings_de.png" alt="Einstellungen des Link-Filters" class="docs-screenshot">

In den Einstellungen des Link-Filters können Sie die Optimierungsmaßnahmen konfigurieren.

#### Automatische Bereinigung der Link-Liste

Aktivieren Sie diese Option, wenn Sie möchten, dass der Link-Filter alte Links automatisch aus seiner internen Liste entfernt. Dies erhöht die Geschwindigkeit des Filtervorgangs und spart Speicherplatz.

#### Lösche Links, die älter sind als [x] Tage

Stellen Sie hier ein, wie alt ein Link sein muss, damit er automatisch aus der Liste gelöscht wird.

#### Ähnliche Links mit unterschiedlichen Subdomains zusammenfassen

Wenn Sie diese Option aktivieren, werden ähnliche Links mit unterschiedlichen Subdomains zusammengefasst. Dadurch kann die Filterleistung erhöht werden.

#### Mindestanzahl von Subdomains

Geben Sie an, wieviele ähnliche Links mit unterschiedlichen Subdomains zu einem zusammengefasst werden sollen.

#### Nur Links gleichen Typs zusammenfassen

Aktivieren Sie diese Option, damit ähnliche Links mit unterschiedlichen Subdomains nur zusammengefasst werden, wenn Sie gleichen Typs sind, d.h. wenn sie nur Spam-, Non-Spam- oder ignorierte Links sind. Ist diese Option nicht aktiviert, werden Links unterschiedlicher Art zu einem ignorierten zusammengefasst.

</div>
</div>
