---
title: 'Major Release: Introducing the Impresso Datalab, Corpus Expansion and New Data Access Management'
status: published
category: news
seealso:
  - /project/objectives/
  - /consortium/partners/
  - /consortium/team/
figure:
  - src: posts/datalab-screen.png
    caption: Impresso Datalab
  - src: posts/API-screen.png
    caption: Initialising an Impresso Client
  - src: posts/map-screen.png
    caption: Notebook on Visualising Place Entities on Maps
  - src: posts/networks-screen.png
    caption: Notebook on Exploring Entity Co-occurrence Networks
  - src: posts/annotate-screen.png
    caption: Notebooks for enriching your own data
  - src: posts/basic-usage-screen.png
    caption: Example from notebook on Language Identification with impresso-pipelines Package
  - src: posts/try-in-datalab.png
    caption: Try in Datalab feature in Impresso Web App
  - src: posts/networks-screen2.png
    caption: Example of results linking back to Impresso Web App
  - src: posts/partner-logos.png
    caption: Impresso partners
  - src: posts/petit-parisien-screen.jpeg
    caption: Front page from Le Petit Parisien
  - src: posts/user-plans-screen.png
    caption: Impresso User plans
  - src: posts/change-plan-screen.png
    caption: How to request a change of plan
   
---

Over the past months we have been busy preparing this major release which includes the Impresso Datalab for programmatic access to our corpus and models, the integration of new newspaper titles from the National Library of France and our Swiss partners, and the roll-out of a completely revised data access management system which paves the way for future corpus expansions.

<!-- more -->

## The Impresso Datalab: Programmatic access to our data and models

One of our goals for Impresso2 is to make it easier to conduct data-driven research on historical media collections. Today we are excited to announce the release of the [Impresso Datalab](https://impresso-project.ch/datalab/), a significant milestone in the Impresso2 project.

The Impresso Datalab complements the exploratory capacities of the [Impresso Web App](https://impresso-project.ch/app/) by allowing programmatic interactions with our data. The Datalab offers access to bibliographic metadata, semantic enrichments and full text via the [Impresso API](https://dev.impresso-project.ch/public-api/v1/docs/) and a dedicated [Python library](https://pypi.org/project/impresso/).

{% assign figure=page.figure[0] %}
{% include figure.html %}

### Key features
With this release, we offer:

##### Programmatic access to our data

{% assign figure=page.figure[1] %}
{% include figure.html %}

The [Impresso Rest API](https://dev.impresso-project.ch/public-api/v1/docs/) and [Impresso Python library](https://pypi.org/project/impresso/) provide access to full text, bibliographic metadata, and semantic enrichments in compliance with legal frameworks and institutional constraints of our partners.

##### Notebooks for data exploration

{% assign figure=page.figure[2] %}
{% include figure.html %}

{% assign figure=page.figure[3] %}
{% include figure.html %}

Notebook templates are designed to complement the exploratory capacities of the Web App. With this first release we offer geospatial mapping of location entities contained in a query of collection as well as relational perspectives on entity cooccurrences by means of network visualisations.

##### Models and Annotation services to enrich your own data

{% assign figure=page.figure[4] %}
{% include figure.html %}

{% assign figure=page.figure[5] %}
{% include figure.html %}

Researchers can semantically enrich their own data using Impresso's specialized models (also available on [HuggingFace](https://huggingface.co/impresso-project/)) and [ready-to-use pipelines](https://github.com/impresso/impresso-pipelines/) specifically optimized for historical newspaper text analysis. At this stage, we offer a BERT model for the recognition of European press agencies and pipelines for language identification, topic modelling, named entity recognition and OCR quality assessment.

##### Close Integration Web App & Datalab

{% assign figure=page.figure[6] %}
{% include figure.html %}

{% assign figure=page.figure[7] %}
{% include figure.html %}

We strive for seamless, question-driven workflows between both interfaces for scalable reading and versatile exploration. For instance, you can easily export your Impresso Web App query to a Datalab notebook for in-depth analysis, then return to the Web App for detailed examination of specific texts. For convenience, all notebooks can be run via Google Colab but of course also locally based on user preference.

##### Getting started

- Create a free Impresso account (if you do not have one already) and subscribe to one of the Impresso plans
- Get an API key and familiarise yourself with the Impresso Python library to interact with our API to search and download data
- Experiment with our first notebooks and generate network and spatial views on Impresso data
- Enrich your own data using our pipelines and models for named entity recognition, press agency detection, language identification and OCR quality assessment

Note that this is only the beginning - the Datalab will remain in constant development throughout the Impresso project. More notebooks to support teaching, critical data exploration and data annotation will follow!

To enter the Datalab, login with your Impresso account or register for one, then accept our revised Terms of Use and request your API key.

We appreciate any feedback on its usage and welcome proposals for additional notebooks via info (at) impresso-project.ch.

## Impresso Corpus Expansion

We are pleased to announce that we made a first step towards Impresso’s goal to create a corpus of Western European newspapers and radio sources: A first batch of newspapers from the National Library of France (BnF) have arrived (see below for the first titles we include). In addition, we have added long awaited titles to our Swiss newspaper collection. This includes “Schweizer Arbeitgeber” and “Schweizerische Handels-Zeitung” coming from the Swiss Economic Archives, a total of 43 titles from the regional collections of Bibliothèque Cantonale Universitaire de Lausanne (BCUL) as well as the German and French editions of the Swiss Federal Gazette also known as Bundesblatt or Feuille fédérale, a rich source which informs about Swiss political and legislative decision-making provided by the Swiss Federal Archives (SFA).

In total, this release adds 53 new newspaper titles, more than 180.00 issues and almost 11 million new content items, such as articles or adverts.

Explore new additions to our corpus from the following partners:

- [National Library of France (BnF)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDQk5G&p=1)
- [Swiss Economic Archives (SWA)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDU1dB&p=1)
- [Bibliothèque Cantonale Universitaire de Lausanne  (BCUL)](https://impresso-project.ch/app/search?sq=CgIYAgoKEAIYGCoEQkNVTA==&p=1)
- [Swiss Federal Archives (SFA)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDU0ZB&p=1)

{% assign figure=page.figure[8] %}
{% include figure.html %}

From France, this first batch includes the following titles:

- [Le Journal des débats politiques et littéraires (1814-1944)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDQk5GCgoQAhgJKgRqZHBs&p=1E)
- [Le Gaulois (1868-1929)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDQk5GCg8QAhgJKglsZWdhdWxvaXM=&p=1)
- [Le Matin (1884-1942)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDQk5GCg0QAhgJKgdsZW1hdGlu&p=1)
- [Le Petit Journal illustré (1884-1920)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDQk5GCgsQAhgJKgVsZXBqaQ==&p=1)
- [Le Petit Parisien (1876-1944)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDQk5GChUQAhgJKg9sZXBldGl0cGFyaXNpZW4=&p=1)
- [Ouest-Eclair - Caen edition (1912-1942)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDQk5GCgwQAhgJKgZvZWNhZW4=&p=1E)
- [Ouest-Eclair - Rennes edition (1899-1942)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDQk5GCg4QAhgJKghvZXJlbm5lcw==&p=1)
- [Excelsior (1910-1920)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDQk5GCg8QAhgJKglleGNlbHNpb3I=&p=1E)
- [La-Fronde (1897-1929)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDQk5GCg4QAhgJKghsYWZyb25kZQ==&p=1)
- [Marie-Claire (1937-1944)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDQk5GChEQAhgJKgttYXJpZWNsYWlyZQ==&p=1E)
- [Oeuvre (1915-1944)](https://impresso-project.ch/app/search?sq=CgIYAgoJEAIYGCoDQk5GCgwQAhgJKgZvZXV2cmU=&p=1)

{% assign figure=page.figure[9] %}
{% include figure.html %}

## New User Access Management System

Alongside the Datalab, we are introducing a new content access management system which allows us to reflect the legal contexts in which our data-providing partners operate as described in our Terms of Use. New user plans reflect the legal frameworks within which our data-providing partners operate, as described in our Terms of Use. Behind the scenes, this new system allows us to grant fine-grained access on the level of individual content items such as newspaper articles or radio broadcasts.

{% assign figure=page.figure[10] %}
{% include figure.html %}

We distinguish between:

- Guest users
- Basic users
- Student users
- Academic users
- Academic+ users (forthcoming)

To qualify for an Academic user account, we ask you to provide a link to your academic profile and to allow 2 working days for verification. With the forthcoming Academic+ user plan, we present an innovation for accessing protected data: users who wish to access data in this category will soon be able to make a request to the corresponding data provider and gain access upon their validation.

Please refer to this [overview of the currently available data](https://impresso-project.ch/datalab/corpus-overview/) and the mapping of permitted actions according to user plans.

{% assign figure=page.figure[11] %}
{% include figure.html %}

**Note:** Existing Impresso users are mapped to the Basic user account by default. If applicable, please upgrade to the Academic plan using the method described above.

## Connect with us

The Impresso project has made the choice to retire from X, for obvious reasons. We are now active on Bluesky instead. [Follow us](https://bsky.app/profile/impresso.bsky.social) to stay updated on the latest developments, events, and insights from the Impresso project. We also have a [Discord server](https://discord.gg/tYvuD8Nfur) where you can [report issues](https://discord.gg/CEtkC5Sqcb) you encounter with the Web App or Datalab, or [discuss other Impresso-related topics](https://discord.gg/asjJ6eApyz).

