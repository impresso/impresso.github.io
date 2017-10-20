---
title: "Synopsis"
type: section
lang: en
group: project.linguistics
---

<!-- more -->

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