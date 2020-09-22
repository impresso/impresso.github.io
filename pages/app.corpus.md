---
title: "Newspaper corpus"
permalink: /theapp/corpus/
nolang: /theapp/corpus/
lang: en
parenturl: /theapp/
figure:
  - src: posts/pr-corpus-stats-plot1.png
  - src: posts/pr-corpus-stats-plot2.png
---

*Impresso* newspaper digitized materials were provided by our associated partners, namely: the Bibliothèque nationale de Luxembourg, the Swiss National Library, the Valais Media Library and State Archives, and the newspapers *Neue Zürcher Zeitung* and *Le Temps* (Ringier group). Further Swiss institutions also participates to impresso endeavour with their sources, that is to say: the newspapers *La Liberté*, *Freiburger Nachrichten*, *L'Essor*, *Le Confédéré*, *Bote vom Untersee*, the group *ArcInfo* in collaboration of the Bibliothèque de la Chaux-de-Fonds, the Bibliothèque cantonale et universitaire de Fribourg, and the Swiss Social Archives in collaboration with UNIA. Physical acquisition of the material would not have been possible without the contribution of RERO, the Library Network of Western Switzerland. In the final stages of the project we have added smaller subsets of collections of new partners: BNF, the British Library and the collections BE. We take the opportunity here to thank all these partners for their support and contributions.

{% assign figure=page.figure[0] %}
{% include figure.html %}

This raises the question of the representativity of our corpus. The short answer is, that it is not. Within impresso, we have incorporated the digitised newspapers the Luxembourg National Library had available in 2017. With regard to Swiss archives, our selection was based on the following considerations:

- Legal: Can the material be republished by us and made accessible to researchers? Does it match our preference for public domain licensing?
- Pragmatic: Since the inclusion of all digitised newspaper titles in Switzerland would have been impossible to handle by our small team, we were forced to select from the existing catalogues. We preferred titles with better scan and OCR quality. Finally, existing contacts to the newspapers Le Temps and NZZ opened the door for bilateral negotiations.
- Scholarly: We strived for a balanced representation of different types of titles over time (e.g. political orientation, regional vs. national publication)

All these considerations moved us further away from the ideal of a representative corpus and made it clear that instead of building the perfect corpus we had to be transparent about the composition of the one we created.

{% assign figure=page.figure[1] %}
{% include figure.html %}

The impresso project had very limited capacities to conduct OCR and article layout recognition but worked with the materials it received from its partners. This required the development of importers for different flavours of the METS/ALTO and Olive standards but also revealed the imperfections which are inherent in any large-scale collection: There were errors which occurred during filing of the hard copies, their digitisation and processing or during the transfer to our servers which caused problems: not all the articles our metadata suggests are there, are in fact accessible. Not all newspaper titles underwent the same digitisation pipeline; there are significant variations in OCR quality and the degree to which institutions added additional metadata to their collections.

We therefore chose to carefully normalise and complement existing metadata across all institutions and to automatically add information e.g. on language use or OCR quality.

The creation of such a corpus bears its own challenges and has its trade-offs. It is all the more important for historians to develop awareness of these often processes and was our effort to shed more light on them. We therefore recommend that you familiarise yourself first of all with the [Newspaper page](https://impresso-project.ch/app/newspapers/) in the impresso app but also the materials we have prepared in the [How to use it](https://impresso-project.ch/theapp/usage/) segment.
