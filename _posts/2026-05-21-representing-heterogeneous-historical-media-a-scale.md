---
title: 'Representing Heterogeneous Historical Media at Scale'
status: published
category: news
seealso:
  - /consortium/partners/
  - /project/objectives/
figure:
  - src: posts/Impresso_LREC2026.png
    caption: Toward Interoperable and Scalable Representations of Complex Heterogeneous Digitized Historical Media

---

Impresso's mission – enabling exploration of historical newspapers and radio broadcasts across languages, media, and national borders – depends on a lot of invisible work. Much attention rightly goes to the semantic enrichments, the interfaces, the historical research they enable. But before any of that can happen, there is a more fundamental question to answer: how do you actually represent and manipulate the data at scale? Not how you enrich, analyse or display it, but how you hold it together in the first place, across hundreds of sources, in different formats, with varying digitization quality and refinement levels across decades of digitization campaigns.

<!-- more -->

{% assign figure=page.figure[0] %}
{% include figure.html %}

The paper *Toward Interoperable and Scalable Representations of Complex Heterogeneous Digitized Historical Media* by [Pauline Conti](/people/pauline-conti/), [Simon Clematide](/people/simon-clematide/), and [Maud Ehrmann](/people/maud-ehrmann/) (presented at LREC 2026 and available [here](https://infoscience.epfl.ch/handle/20.500.14299/263437)) addresses exactly this, and pulls back the curtain on one of the foundational layers of the project. This post gives the key ideas.

## The challenge: bridging collection silos at scale

Impresso brings together 500+ newspaper titles and radio sources from more than 20 partner institutions across Western Europe. The value of these collections for historical research is well established, but that value is greatly amplified when research can be conducted at scale, across institutional, linguistic, and national boundaries. In practice, however, digitized collections are typically bound to a single institution, maintained in distinct formats, and designed primarily for preservation and consultation rather than programmatic processing. Bridging these silos is one of Impresso's central objectives – and it raises an immediate question: what does a framework capable of doing so actually need to achieve?

## Five principles that shaped the design

The paper articulates five requirements that pulled in partly competing directions and, together, defined the design space.

*Breaking silos* is the first and most fundamental: the framework must bridge media silos (newspapers vs. radio), digitization silos (institution-specific formats and quality levels), and language silos (multilingual tokenization and identification), bringing heterogeneous collections into a unified corpus without erasing what makes each source distinct.

*Fidelity to the source* is the second: historical newspapers and broadcasts are not merely containers of text but structured objects reflecting editorial choices and historical contexts. The framework must preserve that structure and link transcripts back to their original medium via spatial coordinates (for newspapers) or timestamps (for radio), so that a user can always read an article in the context of its page or a broadcast segment within its program.

*Amenability to machine learning and information retrieval* is the third, and it pulls against the second: NLP pipelines require uniform, lightweight representations stripped of archival overhead, while search engines require well-defined, consistently granular indexable units. The same data must serve both.

*Corpus growth and framework modularity* is the fourth: the Impresso corpus is not static. New collections are added regularly, existing ones may be re-OCRed or re-segmented, and new source types may emerge. The framework must accommodate all of this without destabilizing existing data or breaking the links between source material and enrichments.

*Returning enriched data to archival holders* is the fifth: partner institutions expect to receive back the semantic enrichments they have enabled – named entities, topics, embeddings – in formats compatible with their own systems. This directly serves the interoperability and reusability dimensions of FAIR, and closes the loop between the project and the institutions that make it possible.

## Heterogeneity is the norm, not the exception

These five principles define what the framework must do. Understanding *what it is up against* required a prior step: a structured mapping of the heterogeneity found in digitized historical media collections. The paper identifies four dimensions along which collections diverge and which any representation framework must account for.

The first is *media sources*. Newspapers and radio broadcasts differ fundamentally in medium, modality, and archival structure. Newspapers follow a clear and regular hierarchy: title, issue, page, article. Radio is more irregular: episodes group into programs, topical diversity operates at the channel level, and there is nothing equivalent to article-level segmentation. Studying them together – one of Impresso's core ambitions – requires shared abstractions that do not erase what makes each medium distinct.

The second is *digitized records*. A digitized newspaper is not simply text – it is a layered object comprising facsimiles, OCR transcripts, layout segmentation, content organization, and bibliographic metadata. The quality and granularity of all of this varies enormously. Some collections provide richly structured output with article-level segmentation; others deliver only raw page-level OCR. The paper identifies four levels of structural recovery, each requiring different handling, and documents how segmentation errors and inconsistent content-type labeling compound the challenge further.

The third is *collection organization and identification*. Each institution organizes its collections according to its own archival logic, with identifier schemes that vary in scope, permanence, and semantics. Some identifiers are persistent and institution-wide; others are internal to a digitization campaign and may be reassigned upon reprocessing – something the project encountered in practice, with real consequences for maintaining links between source material and enrichments.

The fourth is *language and tokenization*. The corpus is multilingual, and each digitization campaign has used different OCR engines with different tokenization conventions. Reconstructing running text from raw OCR output requires language-dependent normalization rules – resolving hyphenation, reattaching punctuation, handling archaic spelling – maintained per collection and per language.

## The framework: from principles and landscape to implementation

Armed with a clear set of requirements and a precise understanding of the heterogeneity involved, the paper proposes a concrete framework. At its core is a two-tier data model. The first tier, the **canonical format**, is source-faithful: it receives each collection in whatever format it arrives – METS/ALTO, hOCR, PDF-embedded OCR, ASR transcripts – and converts everything into a single unified structure that preserves the logical and physical organization of the original source, along with stable, parsable identifiers. The second tier, the **rebuilt format**, serves machine learning and information retrieval: for each content item, it reconstructs running text and produces a lightweight, uniform document ready for semantic enrichment and indexing.

The framework is implemented as two public Python modules – **importers**, which convert each source format into the canonical representation, and a **rebuilder**, which extracts content items for downstream processing – with data objects defined and validated through publicly available JSON schemas.

This open infrastructure is what has enabled the tenfold growth of the Impresso corpus: from 134 newspaper titles and 52 million content items in the 2025 release, to a 2026 release in preparation spanning 567 titles from 15 institutions, over 73 million content items, and more than 24 billion tokens. It underlies every enrichment the project produces – named entity recognition, topic modeling, text reuse detection, embedding-based similarity search – across a transnational, transmedia, multilingual corpus.

The schemas and code are open source and available [here](https://github.com/impresso/impresso-text-acquisition). If you are working on large-scale digitized historical collections and wrestling with similar challenges, we hope this work is useful – not as a standard to adopt, but as a set of design choices made explicit, and a practical foundation to build from. A tip of the hat to [Matteo Romanello](/people/matteo-romanello/), who laid early groundwork for this framework in the first phase of the project!



