---
title: "Computational Linguistics"
permalink: /project/linguistics/
nolang: /project/linguistics/
parenturl: /project/
---

## Objectives

The project will produce a **historical media monitoring tool suite that will bridge the semantic gap** between huge volumes of scanned text and humanities scholars willing to understand and interpret its content.

The main objective of the tool suite will be to **overcome the current limitations of state-of-the-art keyword-based methods and to enable new search and discovery capabilities**. The suite will be composed of a series of natural language processing (NLP) components that will process historical print media texts and store the extracted information in a knowledge base (KB), along with the original texts and facsimiles. As well as being open source, it will also be modular, in order to meet the needs of different user groups, and interoperable, so that it can be integrated into third-party tools or frameworks.

More specifically, the developed text mining tools will allow users to perform **search and filter functions in the lexical and semantic spaces of single words and multi-word expressions, the referential space of entities and the conceptual space of topics/categories of pages and documents**, while taking into account the temporal dimension that cuts across all these levels and the different languages present in our collection.

At the lexical-semantic level, moving beyond traditional n-gram counts, we will enable users to examine how a word has changed its meaning through time and investigate how a concept is expressed in different languages, while also suggesting relevant synonyms and variants. At the entity level, the tool suite can be used to look for a specific person, place or institution and its contexts and associated information, as well as to explore aggregated views of such entities, for example how often they occur in texts at a specific time and with which other entities they are regularly mentioned. At the conceptual level, the objective is to enable the exploration of article topics, namely their definition and distribution over different sources and through time. All three levels will be jointly leveraged through a faceted search function. Finally, we are also aiming to provide recommendations, i.e. the ability to look for semantically related items (words, entities or articles).


## Synopsis

Work on **natural language processing for historical newspapers** will include the following: 

**automatic OCR and OLR improvement and text corpus creation** – Beyond the establishment of a structured representation of the corpus material (OCR content, article segmentation), we will develop and apply OCR post-correction techniques based on character-based machine translation approaches. As a complement to these technical solutions, we will pursue a citizen science crowd correction campaign to produce the domain-specific training material needed for the supervised machine learning methods.

**lexical processing** – We will apply part-of-speech tagging and lemmatisation to the data, using supervised learning of lemmatisation to transfer inflection patterns from contemporary to older vocabulary.

**word alignment for domain-specific cross-language semantic similarity** – In this regard, we will apply statistical word alignment techniques and make use of bilingual word embeddings to detect correspondences between words and phrases, including across languages.

**semantically deepened n-grams** – We aim to support our users by suggesting semantically similar expressions that match their initial search terms. To this end, we will apply methods based on word embeddings calculated on lemmas in standardised forms and develop diachronic word embeddings in order to track semantic shifts in words.

**statistical collocation and key phrases** – We will index our texts for statistical collocations with the goal of letting users decide whether they want to include/exclude important and/or frequent words in their n-gram statistics.

**text categorisation and topic modelling** – An interesting research question that we want to address is how we can transfer and adapt text categorisation models that are trained on contemporary gold standard material, e.g. by going back in time with the longitudinal text material of our collection.

**named entity processing** – We will recognise, classify and link entities of type Person, Place and Organisation (mainly of administrative nature).

Additionally, the **performance** of OCR correction, NE processing and text categorisation will be systematically evaluated. We will produce gold standards for each of these tasks, which will also be used in a shared task on NE processing (more to come on this topic in a blog post).

Finally, in terms of **data management and knowledge representation**, our requirements will be: a) a high level of interoperability of data and tools regarding format and models, b) modularity, c) the possibility to trace provenance and d) the possibility to contextualise information in relation to its original sources (more to come on this topic in a blog post).


<!--- **beyond keyword-based search** -- the main goal is to overcome the current limitations of state-of-the-art keyword-based methods and to enable new search and discovery capacities.

- **composed of NLP components and a knowledge base** -- it will be composed of a set of Natural Language Processing (NLP) components that will process historical print media texts and store the extracted information in a knowledge base (KB), along with the original texts and facsimile;

- **open, modular and interoperable** -- besides its open source release, the developed tool suite will be modular, in order to meet the needs of different user groups, and interoperable, in order to ensure its integration within third party tools or frameworks. -->





