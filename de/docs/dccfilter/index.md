---
uid: dccfilter
lang: de
title: Spamihilator &raquo; Der DCC-Filter
layout: main_with_ad
---

<div class="row">
<div class="twelve columns" markdown="1">

[Spamihilator-Dokumentation]({{ site.url }}/de/docs) &laquo; Der DCC-Filter

## Der DCC-Filter

Der **DCC-Filter** ist ein Plugin. Das heißt, dass er nicht direkt in Spamihilator integriert ist, aber trotzdem dazu benutzt werden kann, Spam zu blockieren.

Dieser Filter wird auch "**<abbr title="Peer to Peer">P2P</abbr> Plugin**" genannt, weil er das Netzwerk des Distributed Checksum Clearinghouse verwendet, um Spam zu erkennen.

Das Plugin sendet eine sichere Checksumme jeder eingehenden E-Mail an das DCC-Netzwerk und erhält dafür die Anzahl der Benutzer, die die gleiche Checksumme gesendet haben. Dadurch ist der Filter in der Lage unerwünschte Massen-Mails zu erkennen.

Der Filter benutzt eine intelligente Methode, um unscharfe Checksummen zu erzeugen. Somit wird die Spam-Erkennungsrate weiter erhöht.

Informationen über das DCC-Netzwerk gibt es unter: [http://www.rhyolite.com/anti-spam/dcc](http://www.rhyolite.com/anti-spam/dcc).

Sie können die Server des DCC-Netzwerks, zu denen der Filter Kontakt aufnehmen soll, selbst einstellen. Schauen Sie dazu in die [Einstellungen des DCC-Filters]({{ site.url }}/de/docs/configdccfilter).

</div>
</div>
