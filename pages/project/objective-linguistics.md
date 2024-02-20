---
layout: page
lang: en
permalink: /project/linguistics/
parentUrl: /project/
title: 'Natural Language Processing'
excerpt: 'Text mining techniques are of critical importance to realise impresso’s overall mission to enrich and integrate historical media collections.'
---

Text mining techniques are of critical importance to realise *impresso*’s overall mission to enrich and integrate historical media collections. Below we outline the main steps required to achieve this:

<!-- more -->

## Source consolidation: harmonizing historical document data

Historical sources come in different digital formats and with different levels of refinement, both in terms of quality, such as optical character recognition (OCR) and automatic speech recognition (ASR), and granularity, such as different document layout analyses or article segmentation. This leads to inconsistent performance for NLP and difficulties in building longitudinal research datasets for historians. Our first steps will then be to bring all data into a clean and similar format and to lift the collections to a similar level of refinement by assessing and optimising the quality of OCR and ASR, improving and homogenising the characterisation of document units (articles), and improving the links between images and their associated articles. Overall, the source consolidation will elevate the complete corpus to a consistent and higher quality level, facilitate text mining techniques, help historians navigate through potentially noisy periods or titles, and enable comparative approaches.

## Semantic enrichment: adding new layers of information

Our next objective is to enrich historical sources with structured semantic information using text mining methods. This will provide content-related search facets for the interface and serve the exploration and comparison of people, locations, keyphrases, topics and predicted semantic classes (such as news subjects and content classes) across time periods, languages and media channels. We aim to develop fine-grained NE processing, including reliable entity linking, extraction of people's titles and professions, bringing insights into historical social roles, and identification of who said what with interviews and quote recognition, enhancing the understanding of historical narratives. We will semantically qualify content units (e.g. articles, broadcast sections) to support faceted search as well as the exploration and analysis of collection themes, detect meaningful reiteration or adaptation of content across languages (text reuse) and classify image documents.

## Semantic indexing and linking: connecting sources across boundaries

To enable meaningful comparisons across languages, we will create a shared multilingual vector space for semantic indexing. This space will include representations for words, key phrases, named entities, paragraphs, documents, and images. By aligning these representations between languages, we can retrieve semantically similar content. This indexing approach, combined with hierarchical clustering, will facilitate the grouping of related items at different levels of granularity, allowing, for example, for the exploration of content reuse patterns across languages. We also aim to connect our content with external knowledge repositories, such as Wikipedia, to provide additional context and comparison with broader historical knowledge.

## Performance assessment: ensuring reliable results

Evaluating source consolidation enrichment, and linking is key. From a user perspective, it is a precondition for an informed and transparent use of data. Users will benefit from confidence scores associated with semantic annotations, allowing them to gauge data quality. From an NLP perspective, understanding the strengths and weaknesses of our system will guide future improvements. Evaluation will include traditional comparisons with manually created ground truths and collaboration with historians to ensure the tools meet real-world needs. Our commitment to ongoing evaluation extends to organising international evaluation shared tasks on article classification and NE processing, following up the two HIPE campaigns in [2020](https://impresso.github.io/CLEF-HIPE-2020/) and [2022](https://hipe-eval.github.io/HIPE-2022/) (https://github.com/hipe-eval).  

## Key concepts: our approach in 5 steps

To achieve our goals, we are guided by five key concepts:

   1. **Vectorization:** Creating numeric embeddings for linguistic and visual content to facilitate semantic representations.

   2. **Cross-lingual alignment:** Ensuring comparable semantic representations for different languages and media types.

   3. **Contextualization:** Enhancing linguistic content with contextualised embeddings and linking out to external resources for richer context.

   4. **Aggregation and abstraction:** Applying hierarchical clustering to provide meaningful grouping for exploration and visualization.

   5. **Relevance assessment:** Computing scores for the centrality of entities and concepts to determine their importance in historical documents.

Through these concepts, we aim to provide accessible and powerful tools for historians and researchers, enriching the exploration of historical data and fostering new insights.
