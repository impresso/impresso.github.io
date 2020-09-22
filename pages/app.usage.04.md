---
title: ""
id: nlp
type: section
lang: en
group: app.usage
figure:
  - src: application/nlp.png
    caption: "Illustration: [sugardragon](https://www.vectorstock.com/royalty-free-vectors/vectors-by_sugardragon)"
---

Diving deeper into Natural Language Processing

<!-- more -->

The title of this post paraphrases our colleague [Max Kemman](http://www.maxkemman.nl/2015/06/digital-history-as-trading-zone/) and relates to the ‘negotiation of practices’ that (should) inevitably happen within interdisciplinary frameworks. Within _impresso_, we tackle this challenge by, among others, placing [co-design](https://impresso-project.ch/project/design/) at the heart of our work organisation. Besides the realisation of an exploration interface which answers the needs of its users, with co-design we intend to foster the dialogue between our academic fields (computational linguistics and history), as well as to reflect on the general change of research environment for the humanities (more on co-design in a soon-to-come glossary entry).

{% assign figure=page.figure[0] %}
{% include figure.html %}

Concretely speaking, impresso co-design is put into practice with an early-stage and continuous participation of historians. This cooperation is materialized via, on the one hand, the definition of research scenarios by historians and, on the other, the explanation and implementation of NLP processes by computational linguists, all these being discussed during workshops.

With this blog post series and tutorials, computational linguists would like to step in the trading zone, and to translate what ‘named entity processing’, ‘topic modeling’, ‘text reuse’ and more means in practical terms when it comes to searching and exploring a historical newspaper collection. The intention is to sketch possibilities so as to help historians potentially interested in our future interface to plan their research and start operationalizing their questions. We would like to emphasize that the following descriptions are rather concise and will be further explained and illustrated as our work proceeds.

## Named entity processing

To put it very briefly, named entity processing corresponds to the tasks of:

- recognizing mentions of entities of interest in texts and classifying them according to a set of predefined categories, usually Person, Organisation and Location, with more less specification (collective vs. individual person, geographical vs. administrative location)
- linking these mentions to unique identifiers in order to deal with homographic names (“John Smith”) referring to different entities and name variants referring to the same entity. This process is also called named entity disambiguation
- identifying relations between entities such as born_in between a person and a location entity, colleague_of between two persons, alma_mater between a person and an organisation (in this case could be of subtype ‘Educational’), etc.

---

This blog post explains, how we have made use of named entities in the impresso project:

<a class="d-block image-link"
  style="max-width:400px;"
  href='https://impresso-project.ch/news/2018/06/12/tradingzone-ner.html'
  title='Named entity processing in a nutshell'>
  <img src="/assets/images/posts/ne-jdg-1969-08-28.png" class="d-block mb-1" />
  &rarr; Named entity processing in a nutshell
</a>

---

Members of the impresso team organised a workshop at the DH2020 conference on the recognition of historical named entities. You can find all materials here:

<a class="d-block image-link"
  style="max-width:400px;"
  href='https://impresso.github.io/named-entity-tutorial-dh2019/'
  title='Named Entity Processing for Digital Humanities'>
  <img src="/assets/images/application/nep.png" class="d-block mb-1" />
  &rarr; Named Entity Processing for Digital Humanities
</a>

---

## Topic modeling

To document how we have integrated topic modeling within the impresso project and how they can become part of an explorative workflow we have prepared the following blog posts:

---

<a class="d-block image-link"
  style="max-width:400px;"
  href='https://impresso-project.ch/news/2019/03/05/Explore_TM.html'
  title='Explore the list of topics on the impresso interface'>
  <img src="/assets/images/posts/Topic_exploration_home_Screenshot 2019-03-05 16.24.04.png" class="d-block mb-1" />
  &rarr; Explore the list of topics on the impresso interface
</a>

---

<a class="d-block image-link"
  style="max-width:400px;"
  href='https://impresso-project.ch/news/2018/09/07/tradingzone-tm.html'
  title='About Topic Modeling on historical newspapers'>
  <img src="/assets/images/posts/lda-geometric-interpretation.png" class="d-block mb-1" />
  &rarr; About Topic Modeling on historical newspapers
</a>


---

## Text Reuse

Text reuse allows the detection of similar text passages across a corpus. To learn more about this method we have co-authored a forthcoming lesson on the detection of text reuse using passim for the Programming historian platform

---

<a class="d-block image-link"
  style="max-width:400px;"
  href='https://programminghistorian.org/en/lessons/'
  title='detection of text reuse using passim'>
  <img src="/assets/images/application/text-reuse.png" class="d-block mb-1" />
  &rarr; Detection of text reuse using passim
</a>

---
