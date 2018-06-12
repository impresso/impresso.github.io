---
layout: post
title: Text re-use detection in a nutshell
lang: en
date:   2018-06-12
categories: news
authors:
  - matteo-romanello
figure:
  - src: posts/tr-ex1.png
  - src: posts/tr-ex2.png
  - src: posts/tr-ex3.png
  - src: posts/tr-ex4.png
---
Trading zone part 3: Text Re-use Detection. This blog post is the last part of [Stepping in the NLP / History trading zone: a series of posts](/news/2018/06/11/tradingzone-umbrella.html).

<!-- more -->

**Working definition**

Text re-use is essentially the **meaningful reiteration of text**, usually beyond the simple repetition of common language. It is such a broad concept that it can be understood at different levels and studied in a large variety of contexts.  

In the context of publishing or teaching, instances of text re-use can constitute **plagiarism** should portions of someone else's text be repeated without appropriate attribution. Or, just to give another example, in the context of literary studies text re-use is often just a synonym for literary phenomena like allusions, paraphrases and direct quotations.

**Text re-use in Historical newspapers**

When it comes to historical newspapers, the automatic detection of text re-use can help us to track down articles that are *similar* within a potentially very large pool of newspaper pages or articles (millions of them). Yet, the reasons of this similarity may vary, and often closer scrutiny is required to explain such similarity:

- Identical articles may be re-purposed in multiple newspapers as they stem from the very same press release (in which case the news or press agency is normally mentioned, e.g. "Reuters").
- In newspapers from the period before before the advent of press agencies, text re-use instances can be interesting to study the dynamics of information spreading, especially when newspapers in the same language but from different countries are considered.
- In more recent newspapers text re-use is very frequent – thus possibly less interesting from a historian's point of view – due to cut-and-paste journalism being an increasingly common practice. But other texts that get often repeated are also boilerplate texts in advertisements, event listings, stock exchange sections, etc. – all of which constitute noise that needs to be filtered out in order to find the really interesting instances of text re-use.

But let's now see three examples of text re-use that were automatically detected by running the Gazette de Lausanne (GDL) and Journal de Genève (JDG) through a software called [*passim*](https://github.com/dasmiq/passim).

The first example is the news of an accident that involved a steamboat departed from Ouchy in direction of Geneva. The news appears first on the GDL (3 December 1863) and a couple days later on the JDG (5 December). The articles are identical, despite for a few small differences, like the fact that the JDG reports the name of the boat (Guillaume-Tilt). What is interesting from a more technical point of view is that the software detects the similarity between the two articles notwithstanding some substantial differences in the respective texts, due to the varying quality of the OCR.

{% assign figure=page.figure[0] %}
{% include figure.html %}

The second example is more recent (28 April 1980) and it's a press agency release reprinted almost identically on the same day by both GDL and JDG.  

{% assign figure=page.figure[1] %}
{% include figure.html %}

The last example represents the sort of phenomena captured by automatic text re-use detection that we believe will be most interesting for historians. It's an excerpt of two articles, published by the two newspapers on the same day (26 May 1900), reporting the declarations of a French general, [Gaston de Galliffet](https://en.wikipedia.org/wiki/Gaston,_Marquis_de_Galliffet). Two things are interesting here: first, in both articles' OCR the general's name is crippled (de Gallippet / do Galliffet) meaning that a string-based search will have most likely missed them; second, the GDL article reports the direct speech attributed to de Galliffet, while the JDG paraphrases it. This sort of phenomena can be interesting to historians as they may reveal how the same historical event was portrayed and reported about by different newspapers, which may have very different political orientations.

{% assign figure=page.figure[2] %}
{% include figure.html %}

**Challenges**

To conclude, let us consider briefly the technical challenges raised by the automatic detection of text re-use in the vast corpus of *impresso* newspapers:

1. **scale**: finding similar passages between millions of pages or articles requires adequate computational resources as well as smart algorithms, capable of reducing the number of total comparisons performed without loosing in accuracy of the results;  
2. **noise**: text re-use tools like passim need to be resilient (to some extent) to noise noisy data (caused e.g. by bad OCR) as we've seen in some of the examples above;  
3. **cross-lingual text re-use**: the ability of detecting text re-use between texts written in different languages is perhaps *the* biggest still unsolved challenge related to text re-use. In some cases we are explicitly told about the existence of cross-lingual text re-use in our corpus, like in the example below where the reader of the *Neue Zürcher Zeitung* is informed that the translation of a given article appeared in the JDG. The small addendum also says, that the original has been written in French and that the author was asked by the JDG to write this report.


{% assign figure=page.figure[3] %}
{% include figure.html %}
