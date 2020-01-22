# Technical Description of Topic Modeling in *impresso*

## Tools used:
We use the following tools for all the preprocessing steps and the computation of our topic models:
 - [`langid.py`](https://github.com/saffsd/langid.py) and [`langdetect`](https://pypi.org/project/langdetect/) for language identification
 - [spaCy](https://spacy.io/) for  linguistic preprocessing
   - for German (de) tokenisation, Part-of-Speech (PoS) tagging  and lemmatisation, as well as Named Entity Recognition (NER):
     - `de_core_news_sm`
   - for French (fr) tokenisation, PoS tagging and lemmatisation, as well as NER:
     - `fr_core_news_md`
   - for English (en) tokenisation, PoS tagging and lemmatisation, as well as NER:
     - `en_core_news_sm`
   - for Luxembourgish (lb) tokenisation, PoS tagging and lemmatisation:
     - no core model available, we used recently developed [language resources](https://github.com/PeterGilles/Luxembourgish-language-resources) for lb  
 - [GERTWOL](http://www2.lingsoft.fi/doc/gertwol/) for morphological analysis for de
 - [MALLET](http://mallet.cs.umass.edu/) for topic modeling

## Resources used:
  - [Morphalou](http://www.cnrtl.fr/lexiques/morphalou/) for additional lemma information for fr
 
## Data preprocessing
Before applying topic modeling to our data, we carry out some preprocessing steps. The include linguistic preprocessing and further measures in order to reduce the text input size. This guarantees that we do not run into memory issues.

### Language identification
In a first step, we used `langid` and `langdetect` in parallel to determine the language of an article or newspaper page (since not all newspapers article segmentation at their disposal). We restrict the two tools to recognise de, fr, en, and lb only. In order to arrive at a final decision about the article or newspaper page language, we take into consideration possible available language information from metadata, as well as the dominant language of the newspaper *per se*. The identified language of an article or page inform which model to use for the linguistic preprocessing with spaCy. It takes the json-represenation of an issue as input and outputs a writes to a json-file which contains all the language information for a specific newspaper.

#### Example output
```
{"tp":"ar","cid":"diekwochen-1847-10-02-a-i0004","len":420,"orig_lg":"lb","langdetect":[{"lang":"fr","prob":1}],"langid":[{"lang":"lb","prob":1}]}
```
The object of type `ar` = article has received two different results from `langid` and `langdetect`. Since the metadata information `orig_lg` reads `lb`, we decide to attribute `lb` as language to this article. Sidenote: `langdetect` cannot detect `lb`.

### Linguistic preprocessing
The linguistic preprocessing processes each newspaper and iterates over articles or pages and performs tokenisation, PoS tagging and lemmatisation, NER (not for lb). For lb, it maps the output tags to [UPOS tags](https://universaldependencies.org/u/pos/). The input is the json-representation of an issue, while the output consists of a json-file enriched with token information, PoS tags, lemmas, NER information in the IOB format, as well as the entity type.

#### Example output
```
{
  "ts": "2019-12-14T10:56:15",
  "id": "NZZ-1947-01-08-a-i0004",
  "sents": [
    {
      "lg": "de",
      "tok": [
        {
          "t": "Kantonsschule",
          "p": "PROPN",
          "l": "Kantonsschule",
          "o": 0,
          "e": "B-ORG"
        },
        {
          "t": "Zürich",
          "p": "PROPN",
          "l": "Zürich",
          "o": 14,
          "e": "I-ORG"
        },
        {
          "t": "Aufnahme",
          "p": "NOUN",
          "l": "Aufnahme",
          "o": 21
        },
        {
          "t": "nouer",
          "p": "ADJ",
          "l": "nouer",
          "o": 30
        },
        {
          "t": "Schiller",
          "p": "NOUN",
          "l": "Schiller",
          "o": 36
        },
        {
          "t": "für",
          "p": "ADP",
          "l": "für",
          "o": 45
        },
```
We define a list of sentences per article or page, where each sentence receives the language information from the language identification. We add a PoS tag `p`, lemma `l`, character offset `o`, and entity type `e` (where available) to token `t`.

### Topic modeling
Since the entire text corpus is too big in order be compute topic models in an acceptable amount of time (or in order to be able to compute the model at all), the specific preprocessing pipeline for topic modeling shrinks the data with the help of the following steps:

#### Frequency statistics
On each language (de, fr, en, lb), we compute token frequency statistics in order to identify the relevant vocabulary. We use the frequencies in order to determine whether we want to keep a word for the computation of the topic model or not. Our pipeline accepts minimum and maximum frequencies (see below).

##### Example output
```
5073076 Jahr
4082589 Uhr
3816752 unb
3243788 Zürich
2626190 Frau
2494486 ber
2351610 Tag
2287781 Zeit
2101611 Herr
1879676 Schweiz
1796776 Land
1628325 ben
1556415 Mann
```

#### Morphological analysis for de
We pass the frequency statistics for de through GERTWOL to perform a morphological analysis. If GERTWOL recognises a word, we include it along with its lemma and PoS tag in our resource for de. For fr we use Morphalu, for lb and en we do not use external resources at the moment.

##### Example output
```
Jahr    NN  Jahr
Uhr NN  Uhr
Zürich  NE  Zürich
Frau    NN  Frau
Tag NN  Tag
Zeit    NN  Zeit
Herr    NN  Herr
Schweiz NE  Schweiz
```

#### Filtering
In a next step, we pass the texts through a filtering procedure. We only want to consider nouns (NOUN) and proper nouns (PROPN) in an article or page for the computation of the topic models. This is because they are most descriptive for topics. There is a possibility to recognise proper nouns which consists of multiple tokens and to concatenate them, e.g., if "new york" occurs in a text, it would show as "new_york" after the filtering. This measure increases vocabulary size drastically, and we do not use this feature until we have a frequency filter for multiword named entities. More over, we include a word in the filtering result only if it occurs between the minimum and maximum frequency bounds we obtained from our frequency staticstics. Tokens which occur on a negative lemmas list are discarded. The filtering produces a .tsv-file with the article or page identifier, a DUMMY label, followed by the remaining tokens (only NOUN and PROPN), which corresponds to the MALLET input file format.

##### Example output
```
actionfem-1936-02-15-a-i0001    DUMMY   INHALT Reform Ehescheidung Teil Seite Mode Welt Teil Interessant Haarpflege Grippe Hauswirtschaft Küche  Hausfrau Einfluss Lache
actionfem-1936-02-15-a-i0002    DUMMY   Grippe Prophylaxe Therapie Atemzug Körper Fältchen Mundhöhle Rolle Eingangspforte Kampf Blutkörperchen Speichel Fähigkeit Infektion Widerstandsfähigkeit Erkältung Oberhand Infektionskrankheit Grippe Erreger Bazillus Sprechen Husten Teilchen Nähe Gefahr Ansteckung Kino Theater Strassenbahn Erhaltung Gesundheit Wichtigkeit Ansteckungsgefahr Grippe Infektionskrankheit Scharlach Kinderlähmung Disposition Mittel Prophylaxe Paul_Ehrlich Altmeister Chemotherapie Wirkung Agens Konzentration Lösung Verlauf Grippe Genüge Fieber Kopfschmerz Mattigkeit Sekret Wirkung Schleimhäute Hebung Folge Wirkung Mittel Grippe Influenza
```

#### Sampling
Since computing topic models on all our resources, especially for de and fr, takes up too many resources, we decided to randomly sample up to 6 million articles or pages per language. We only include articles or pages which contain at least 10 nouns or proper nouns. Before training, we need to convert the sample to a .mallet file (a vectorised input format of the text). We need to do the same for the filtered text from the step before, since we need this for topic inference. We use the the .mallet file of the sampled version as a pipe, since tokens from the filtered version need to get the same index as they got in the .mallet file constructed from the sample.

#### Training
We instruct MALLET to produce the `topickeys` (top `n` most frequent words per topic), the `doctopics` (the topic distribution of the articles and pages of the sample used for training the topics), the `topicdocs` (the top 100 proportions of each topic in the documents), the `topicwordweights` (importance of each word for a topic), the `model`, and the `inferencer` from the sampled texts (the .mallet version). We train one topic model per language.

#### Inference
We use the inferencer to infer the topics of the filtered texts, since only a fraction of all the texts (the 6 million sample) got topic distributions.

#### Generate input for indexing
The last step consists of generating the input for indexing the topic information into SOLR. We generate a json file for the topic distribution per article. We only take topics into account which make up at least 2% of the overall topic distribution. Another json file summarises the topic information of the 100 topics, where we limit the number of words which are displayed by topics to 150 words.
