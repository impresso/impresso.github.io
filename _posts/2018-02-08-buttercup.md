---
layout: post
title: Understanding the historians needs in their use of digitised newspapers
lang: en
date:   2018-02-08
categories: news
author: 
thumbnail:
figure:
  - src: posts/tangible.png
    caption: Example of a look into the future with a tangible interface
  - src: posts/Searchbar.png
    caption: Current entry in the digitised newspaper collections
  - src: posts/Generosity.png
    caption: Towards a diversification of search options
 
---
On the morning of 8 February, a group of historians using newspapers for their research at the C2DH were invited to attend a second *impresso* user workshop.  

<!-- more -->
 
This second *impresso* workshop aimed at discussing the ongoing research of the C2DH researchers with digitised newspapers and to identify overlaps with the *impresso* project. After a short presentation from the *impresso* team on the aims of the project, Chris Morse invited participants to “look to the future” with a selection of interface functions illustrated by science-fiction scenes. Each participant was asked to give a short overview of his or her experience in using newspapers for historical research, with an emphasis on their methods.

{% assign figure=page.figure[0] %}
{% include figure.html %}


The participants had previously received five scenarios devised with the aim of structuring the discussions around key epistemological issues:

**Scenario 1: diachronic search** 
 How to follow a topic over time (and space)

Examples:
- The changing treatment of domestic violence in court reports in Switzerland (1900-1945)
- Public discussion on terrorism in Europe (1870-1918)

**Scenario 2: ripple effects (text re-use)**
How to follow a particular text (idea) through various titles and issues, using plagiarism detection tools

Examples:
- Public communication (press release) on mergers and acquisitions in the steel industry in Luxembourg (1900-1918)
- The League of Nations’ position on cross-border gun trafficking before 1939 
 
**Scenario 3: creation of a digital corpus**
How to gather a series of issues/segments or issues/titles according to a specific question/topic

Examples:
- Readers’ letters complaining about pollution in cities (1918-1939)
- The emergence of the sports (or culture) section in the press in Luxembourg
 
**Scenario 4: dissemination of an event**
How to follow an event over time (and in several languages)

Examples:
- A comparison of how the February and October revolutions in 1917 were received in Europe
- Study of a “lieu de mémoire”: the commemoration of the 1813 Battle of Leipzig in Europe (1813-1939)
 
**Scenario 5: digital micro-history**
How to collect specific information on a person, place or organisation

Examples:
- The history of the Esch brass band between 1918 and 1939
- The biography of Emilie Gourd (1879-1946)
 
The participants were invited to base their project presentations around these scenarios. They were also asked to mention if they had already had experience with digitised newspapers and which interface(s) they were familiar with.
 

{% assign figure=page.figure[1] %}
{% include figure.html %}


The discussions were very fruitful, with the wide variety of research topics and methodologies once again emphasising the richness of newspapers as historical sources and the complexity of epistemological implications. Research topics ranged from issues related to migration, finance and cultural history to biographical information and visual sources, in several languages and often from a multilingual perspective. This round table discussion helped to raise a series of questions at the crossroads of technical and epistemological issues, which the impresso project, with its co-design approach, will aim to address. For instance, how can we deal with spelling variations for a given name in different languages? How can we find the spelling of a French name in a Flemish newspaper? How can we circumvent censorship, or the euphemisms used for instance for the Spanish flu epidemic?
 
After the round table, the participants were split into three groups of four, each led by two members of the *impresso* team. In each group, the participants were invited to discuss their research question in the context of digitised newspapers: how would they translate their research question into queries submitted to a given interface? To start with, the research scenarios were discussed collectively in the context of the planned *impresso* interface and its NLP and CP tools, then these questions were applied to existing interfaces.
This gave the participating historians a closer insight into the *impresso* project, and they were very enthusiastic about the project’s potential. They showed interest in participating in subsequent workshops and forthcoming prototypes of the *impresso* project.
 
The final wrap-up of each group confirmed that this form of discussion had helped identify tools to explore vast collections of digitised newspapers, either for searches targeting very specific questions, as in biographical research, or for organising the results of research on broader phenomena. The impresso team gathered direct feedback from the historians to feed the internal reflections outlined in the white papers on current interfaces of digitised newspapers and user requirements.
 
The main needs gathered from the dialogue with the historians are the ability to build a search-based corpus and to select given objects within a newspaper such as advertisements. In order to exploit the results within the interface, they expressed the need to be able to store and compare search results, for instance highlighting differences or overlapping articles for two (or more) queries. More generally concerning automated searches in newspapers, the historians were keen for support in differentiating between segments of a newspaper, such as the difference between fiction and reports or identifying certain journalistic styles to categorise newspaper titles according to given criteria.
 
The (Luxembourgish branch of the) *impresso* team was very happy with the attendance and fruitful discussions with the C2DH historians and PhD students and looks forward to welcoming them again at the next *impresso* workshop, with the presentation of the first prototype of the interface and tools in July 2018 in Lausanne.
 

{% assign figure=page.figure[2] %}
{% include figure.html %}


{% if page.thumbnail %}{% assign thumbnail=page.thumbnail %}{% endif %}
{% if page.figure[0] %}{% assign thumbnail=page.figure[0] %}{% endif %}
{% if thumbnail %}
  <meta property="og:image" content="{{ thumbnail.src }}">
{% endif %}
