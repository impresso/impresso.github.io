---
layout: glossaryItem
title: OLR
lang: en
figure:
  - src: glossary/newspaper-layout.jpg
    caption: Newspaper Layout Lexicon
---
In computer vision, document layout analysis is the process of identifying and categorizing the regions of interest in the scanned image of a text document.

<!-- more -->

A reading system requires the segmentation of text zones from non-textual ones and the arrangement in their correct reading order.[1] Detection and labeling of the different zones (or blocks) as text body, illustrations, math symbols, and tables embedded in a document is called geometric layout analysis.[2] But text zones play different logical roles inside the document (titles, captions, footnotes, etc.) and this kind of semantic labeling is the scope of the logical layout analysis.

{% assign figure=page.figure[0] %}{% include figure.html %}

Document layout analysis is the union of geometric and logical labeling. It is typically performed before a document image is sent to an OCR engine, but it can be used also to detect duplicate copies of the same document in large archives, or to index documents by their structure or pictorial content.

Document layout is formally defined in the international standard ISO 8613-1:1989.
