---
title: "Objectives"
type: section
lang: en
group: project.linguistics
---

Text mining techniques are of critical importance to realise *impresso*’s overall mission to enrich and integrate historical media collections. Below we outline the main steps required to achieve this:

<!-- more -->

### Source Improvement: Harmonizing Historical Data

Historical sources come in various digital formats, creating challenges for historians using natural language processing (NLP) and image processing tools. Our goal is to standardize and enhance these sources for better analysis. We will assess and improve the quality of optical character recognition (OCR) and automatic speech recognition (ASR) outputs, ensuring a uniform standard across diverse collections. By linking, e.g., photographs to related articles and applying linguistic pre-processing steps, we aim to create a coherent historical dataset. This process will help historians navigate through potentially noisy periods or titles and enable advanced text mining techniques.

### Semantic Enrichment: Adding new layers of information

Our next objective is to enrich historical sources with structured semantic information using text mining methods. Named Entities (NEs), such as people, locations, and key phrases, play a crucial role in understanding historical content. We aim to go beyond existing methods by developing fine-grained NE recognition and reliable entity linking. This will allow users to filter searches based on specific entities, facilitating more focused and relevant results. Additionally, we will extract people's titles and professions, linking them to the [History of Work](https://iisg.amsterdam/en/data/data-websites/history-of-work) database for more profound insights into historical social roles. In addition, we seek to uncover who said what by identifying interviews and extracting quotes, enhancing the understanding of historical narratives.

### Semantic Indexing and Linking: Connecting sources across boundaries

To enable meaningful comparisons across languages, we will create a shared multilingual vector space for semantic indexing. This space will include representations for words, key phrases, named entities, paragraphs, documents, and images. By aligning these representations between languages, we can retrieve semantically similar content. This indexing approach, combined with hierarchical clustering, will facilitate the grouping of related items at different levels of granularity, allowing, for example, for the exploration of content reuse patterns across languages. We also aim to connect our content with external knowledge repositories, such as Wikipedia, to provide additional context and comparison with broader historical knowledge.

### Performance Assessment: Ensuring reliable results

We understand the importance of assessing the quality of our tools. Evaluating source consolidation, enrichment, and linking is crucial for both users and developers. Users will benefit from confidence scores associated with semantic annotations, allowing them to gauge data quality. From a development perspective, understanding the strengths and weaknesses of our system will guide future improvements. Evaluation will include traditional comparisons with manually created ground truths and collaboration with historians to ensure the tools meet real-world needs. Our commitment to ongoing evaluation extends to organizing international campaigns to assess other NLP systems.
