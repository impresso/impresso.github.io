---
title: "Computational Linguistics"
permalink: /project/linguistics/
nolang: /project/linguistics/
parenturl: /project/
---

## Objectives

The project will produce a **historical media monitoring tool suite that will allow to bridge the semantic gap** between masses of scanned text and humanists willing to understand and interpret their content.

The main objective of the tool suite will be to **overcome the current limitations of state-of-the-art keyword-based methods and to enable new search and discovery capacities**. The suite will be composed of a set of Natural Language Processing (NLP) components that will process historical print media texts and store the extracted information in a knowledge base (KB), along with the original texts and facsimile. Besides being open source, it will also be modular, in order to meet the needs of different user groups, and interoperable, in order to ensure its integration within third party tools or frameworks.

More specifically, the developed text mining tools will allow to **search and filter through the lexical and semantic spaces of single words and multi-word expressions, through the referential space of entities, and through the conceptual space of topics/categories of pages and documents**, all traversed by the temporal dimension and by the different languages present in our collection.

At the lexico-semantic level, we will offer the possibility to, beyond the classical n-gram counts, examine how a word has changed its meaning through time, investigate how a concept is expressed in different languages, and suggest the relevant synonyms and variants to the user. At the entity level, we seek to provide the possibility to look for a specific person, place, or institution and its contexts and associated information, as well as to explore aggregated views of such entities, e.g., how often they occur in texts at a specific time and with which other entities are they regularly mentioned. At the conceptual level, the objective is to enable the exploration of article topics, i.e. their definition and distribution over different sources and through time. All three levels will be jointly leveraged through a faceted search. Finally, we also aim at providing recommendations, i.e. the ability to look for semantically related items, be they words, entities, or articles.

## Synopsis

Work on **natural language processing for historical newspapers** will include the following (list with bullets, to be updated):

**automatic OCR and OLR improvement and text corpus creation** -- Beyond the establishement of a structured representation of the corpus material (OCR content, article segmenation), we will develop and apply OCR post-correction techniques based on character-based machine translation approaches. Complementary to these technical solutions, we will pursue a citizen science crowd correction campaign to produce the domain-specific training material needed for the supervised machine learning methods.

**lexical Processing** -- We will apply part-of-speech tagging and lemmatization to the data, using supervised learning of lemmatization to transfer inflection patterns from contemporary vocabulary to older ones.

**word alignment for domain-specific cross-language semantic similarity** -- In this regard, we will apply statistical word alignment techniques and make use of bilingual word embeddings to detect correspondences between words and phrases, including across languages.

**semantically deepened n-grams** -- We aim at supporting our users by suggesting semantically similar expressions that match their initial search terms. To this end, we will apply methods based on word embeddings calculated on lemmas in standardized forms and develop diachronic word embeddings in order to track semantic shifts in words.

**statistical collocation and keyphrases** -- We will index our texts for statistical collocations with the goal of letting the users decide whether he wants to include/exclude important and frequent ones in the rendering of his n-gram statistics.

**text categorization and topic modeling** -- An interesting research question that we want to address is how we can transfer and adapt text categorization models that are trained on contemporary gold standard material, e.g., by going back in time with the longitudinal text material of our collection.

**named entity processing** -- We will recognize, classify and link entities of type Person, Place, and Organisation (of administrative nature mainly).


Additionally, the **performance** of OCR correction, NE processing and text categorization will be sytematically evaluated. We will produced gold standards for each of these tasks, which will also be used in a shared task on NE processing (more to come on this topic in a blog post).

Finally, in terms of **data management and knowledge representation**, our requirements will be: a) a high level of interoperability of data and tools regarding format and models, b) modularity, c) possibility to trace provenance, and d) possibility to contextualize information back in the original sources (more to come on this topic in a blog post).

<!--- **beyond keyword-based search** -- the main goal is to overcome the current limitations of state-of-the-art keyword-based methods and to enable new search and discovery capacities.

- **composed of NLP components and a knowledge base** -- it will be composed of a set of Natural Language Processing (NLP) components that will process historical print media texts and store the extracted information in a knowledge base (KB), along with the original texts and facsimile;

- **open, modular and interoperable** -- besides its open source release, the developed tool suite will be modular, in order to meet the needs of different user groups, and interoperable, in order to ensure its integration within third party tools or frameworks. -->





