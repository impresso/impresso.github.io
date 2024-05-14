---
layout: post
status: published
title: What's in our corpus?
lang: en
authors:
  - matteo-romanello
  - maud-ehrmann
date: 2020-01-23
categories: news
author:
thumbnail:
figure:
  - src: posts/pr-corpus-stats-plot1.png
  - src: posts/pr-corpus-stats-plot2.png
---

On the occasion of the first public release of the Impresso interface, we wish to take stock of our newspaper corpus. More than a year has passed since the last corpus update...

<!-- more -->

On the occasion of the first public release of the Impresso interface, we wish to take stock of our newspaper corpus. More than a year has passed since the [last corpus update](https://impresso-project.ch/news/2018/04/17/state-collection-april18.html) and a lot has happened in Impresso ever since!

## Impresso in numbers

So far our data acquisition strategy has been focussing on Swiss and Luxembourgish newspapers and, as of January 2020, the Impresso corpus consists of **76 newspapers** (50 Swiss and 26 Luxembourgish), whose material breaks down as follow:

- number of newspaper issues: 604,769
- number of pages: 5,445,822
- number of words: 12,508,779,241
- number of images: 3,467,640
- number of content items: 47,876,994

A word about terminology: _content item_ is the term we use to refer to newspaper contents _below_ the page level. Typically, pages image are segmented and classified into finer-grained content units such as articles, advertisements, images, tables, weather forecasts, obituaries, etc. -- this is precisely what is referred to by _content items_. This segmentation process is also known as [document layout analysis](https://impresso-project.ch/glossary/olr/).

Impresso newspaper digitized materials were provided by our associated partners, namely: the Bibliothèque nationale de Luxembourg, the Swiss National Library, the Valais Media Library and State Archives, and the newspapers _Neue Zürcher Zeitung_ and _Le Temps_ (Ringier group). Further Swiss institutions also participates to Impresso endeavour with their sources, that is to say: the newspapers _La Liberté_, _Freiburger Nachrichten_, _L'Essor_, _Le Confédéré_, _Bote vom Untersee_, the group _ArcInfo_ in collaboration of the Bibliothèque de la Chaux-de-Fonds, the Bibliothèque cantonale et universitaire de Fribourg, and the Swiss Social Archives in collaboration with UNIA. Physical acquisition of the material would not have been possible without the contribution of RERO, the Library Network of Western Switzerland. We take the opportunity here to thank all these partners for their support and contributions.

## Open data in Impresso

While in Impresso we strive for open data, Impresso titles are subject to **different right statement regimens** depending on their copyright situations.

Some contents are freely available for personal and academic use (‘Personal and Academic use’), while others are no longer in copyright and may be used without restrictions (‘Public’). The former are the contents to which Impresso users are granted access upon acceptance and signature of the [Terms of Use](https://impresso-project.ch/app/terms-of-use), while the latter are visible and usable without restriction not the need for login (to know more about how to get access visit the [Impresso interface](https://impresso-project.ch/app/) or drop us a line at `info[at]impresso-project[dot]ch`).

At the time of writing, the **public subset** of our corpus amounts to:

- 79,746 newspaper issues (~15% of the total)
- ~6 million pages
- 32,964 images (~10% of the total)
- half a billion tokens of text (n=572,030,104).

The two plots below show the distribution of newspaper issues over time (plot 1: 1738-1900; plot 2: 1900-2018), distinguishing the two conditions of use. It appears clearly that the period 1831-1877 is the richest in terms of publicly available contents.

{% assign figure=page.figure[0] %}
{% include figure.html %}

[Download plot 1](/assets/images/posts/pr-corpus-stats-plot1.png)

{% assign figure=page.figure[1] %}
{% include figure.html %}

[Download plot 2](/assets/images/posts/pr-corpus-stats-plot2.png)

## What's coming next?

Our corpus is continously evolving and growing, and here come the main perspectives.

_On the short term_, two titles (_Schweizer Arbeitgeber_ and the _Schweizerische Handels-Zeitung_) from our partner the **Swiss Economic Archives** (SWA), as well as the _Bundesblatt_ ([Federal Gazette](https://www.admin.ch/gov/de/start/bundesrecht/bundesblatt/erlaeuterungen-zum-bundesblatt.html)), will soon be ingested. The _Bundesblatt_ is a weekly publication of the Swiss Government in French, German and Italian which includes various official documents. Digital material is available from 1848 on in German and French, and from 1971 on for Italian. Periodical publications originating from different bodies (the government in the case of _Bundesblatt_, and unions in the case of SWA titles) will allow for comparative analyses of discourses.

_On the long term_, we aim at expanding the Impresso corpus beyond the Swiss and Luxembourgish borders. To this end, we are actively collaborating with further national libraries and partners and, depending on time resources, more material in English and French will join the Impresso corpus.

## Corpus statistics

The table below lists aggregate statistics about the corpus at the level of newspaper title. If you want to further explore these contents, simply head to the [_Newspapers_ section](https://impresso-project.ch/app/newspapers/) of the Impresso interface and start browsing.

| newspaper id   | newspaper title                                                              | start year | end year | n. issues | n. pages |  n. tokens | n. images |
| :------------- | :--------------------------------------------------------------------------- | ---------: | -------: | --------: | -------: | ---------: | --------: |
| actionfem      | L'Action féminine                                                            |       1927 |     1940 |       101 |     1900 |     834001 |        75 |
| armeteufel     | Arme Teufel                                                                  |       1903 |     1929 |       916 |     3678 |    6072816 |       411 |
| avenirgdl      | L'avenir                                                                     |       1868 |     1871 |       995 |     3927 |   13103088 |         4 |
| BDC            | Bulletin des séances de la Constituante                                      |       1839 |     1839 |        23 |       96 |      57942 |         1 |
| BLB            | Bündner Landbote                                                             |       1846 |     1847 |       110 |      430 |     530239 |         0 |
| BNN            | Bündner Nachrichten                                                          |       1885 |     1892 |      1906 |     7674 |   15463632 |         0 |
| buergerbeamten | Bürger- und Beamten-Zeitung                                                  |       1898 |     1916 |      3008 |    13390 |   27445272 |       163 |
| CDV            | Courrier du Valais                                                           |       1843 |     1857 |      1200 |     4880 |    7660997 |       161 |
| CON            | La Contrée                                                                   |       1902 |     1903 |       101 |      404 |     516013 |       303 |
| courriergdl    | Courrier du Grand-Duché de Luxembourg                                        |       1844 |     1868 |      4367 |    18037 |   41672201 |         2 |
| deletz1893     | De Letzeburger                                                               |       1893 |     1909 |       887 |     3634 |    3926531 |      1261 |
| demitock       | De Mitock e Wocheblad fir Jux an Zodi                                        |       1937 |     1940 |       134 |      536 |     799744 |      1258 |
| DFS            | Wochenblatt für die vier löblichen Kantone Ury, Schwytz, Unterwalden und Zug |       1814 |     1849 |      1825 |     7687 |   10531868 |         6 |
| diekwochen     | Diekircher Wochenblatt                                                       |       1841 |     1848 |       444 |     1868 |    2058403 |       638 |
| DLE            | Der Landbote des freiburgischen Seebezirks                                   |       1909 |     1914 |       402 |     1657 |    2781257 |      5347 |
| DTT            | Die Tat                                                                      |       1935 |     1978 |     12970 |   218285 |  541602394 |     57979 |
| dunioun        | D'Unio'n                                                                     |       1944 |     1948 |       891 |     4532 |   11720093 |      2520 |
| DVF            | Der Volksfreund                                                              |       1879 |     1885 |       876 |     3518 |    4796603 |         0 |
| EDA            | L’Écho des Alpes                                                             |       1839 |     1844 |       544 |     2225 |    2445174 |        51 |
| EXP            | L'Express                                                                    |       1738 |     2018 |     46472 |   703111 | 1548614911 |   1041396 |
| EZR            | Der Erzähler                                                                 |       1806 |     1865 |      3555 |    18040 |   23734243 |        27 |
| FCT            | La FCTA                                                                      |       1955 |     1963 |       428 |     1724 |    2234291 |         0 |
| FZG            | Freiburger Nachrichten                                                       |       1865 |     2018 |     33692 |   364417 |  821100096 |     55624 |
| GAV            | Gazette du Valais / Nouvelle gazette du Valais                               |       1855 |     1922 |      4728 |    19573 |   42559916 |       511 |
| GAZ            | Gazette du Simplon                                                           |       1842 |     1847 |       390 |     1615 |    3562505 |        55 |
| gazgrdlux      | Gazette du Grand-Duché de Luxembourg                                         |       1878 |     1878 |       141 |      574 |    1352589 |         3 |
| GDL            | Gazette de Lausanne                                                          |       1804 |     1991 |     51062 |   441517 | 1105119085 |    227873 |
| HRV            | Der helvetische Volksfreund                                                  |       1799 |     1801 |       152 |     2227 |    1160909 |         3 |
| IMP            | L'Impartial                                                                  |       1881 |     2018 |     41749 |   775756 | 1383163181 |   1041538 |
| indeplux       | L'indépendance luxembourgeoise                                               |       1871 |     1934 |     18654 |    72896 |  203233645 |      8472 |
| JDF            | Journal du canton de Fribourg                                                |       1830 |     1833 |       319 |     1274 |    1382340 |        58 |
| JDG            | Journal de Genève                                                            |       1826 |     1998 |     49180 |   495926 | 1423762761 |    211602 |
| JDV            | Le Journal du Valais                                                         |       1848 |     1848 |        92 |      373 |     527437 |         0 |
| kommmit        | Komm mit mir!                                                                |       1884 |     1884 |        22 |      192 |      50100 |       162 |
| LAB            | Der Liberale Alpenbote                                                       |       1848 |     1860 |      2257 |     9126 |   11987230 |         0 |
| landwortbild   | Luxemburger Land in Wort und Bild                                            |       1895 |     1895 |        39 |      314 |     214810 |       156 |
| LBP            | Le Bien public                                                               |       1879 |     1888 |      1440 |     5791 |   13009090 |     19082 |
| LCE            | Confédéré                                                                    |       1861 |     2018 |     16599 |    95897 |  185284905 |    164011 |
| LCG            | Le Confédéré de Fribourg                                                     |       1848 |     1907 |      8185 |    33140 |   61433122 |      4891 |
| LCR            | Le Chroniqueur                                                               |       1854 |     1881 |      4561 |    18310 |   36415330 |      1884 |
| LCS            | Le Courrier fribourgeois                                                     |       1830 |     1830 |       107 |      426 |     434399 |         1 |
| LES            | L'Essor                                                                      |       1906 |     2018 |      2120 |    10611 |   16813285 |      9783 |
| LLE            | La Liberté                                                                   |       1871 |     2018 |     42548 |   749944 | 1673145718 |    196218 |
| LLS            | La lutte syndicale                                                           |       1906 |     1998 |      4524 |    25662 |   60856831 |         0 |
| LNF            | Le Narrateur fribourgeois                                                    |       1840 |     1855 |       977 |     3892 |    4850926 |        32 |
| LSE            | Le Peuple, La Sentinelle                                                     |       1890 |     1971 |     20183 |   131832 |  318513171 |       732 |
| LSR            | L’Observateur                                                                |       1846 |     1848 |        71 |      305 |     446839 |         0 |
| LTF            | La Tribune de Fribourg                                                       |       1905 |     1905 |       217 |      870 |    3255362 |       338 |
| lunion         | L'Union                                                                      |       1860 |     1871 |      3144 |    12596 |   31052870 |         3 |
| luxembourg1935 | Luxembourg (1935)                                                            |       1935 |     1940 |      1540 |     8892 |   22405437 |      9779 |
| luxland        | d'Letzeburger Land                                                           |       1954 |     2007 |      2772 |    49062 |   73389858 |     58684 |
| luxwort        | Luxemburger Wort                                                             |       1848 |     1950 |     30372 |   161219 |  359981930 |     19692 |
| luxzeit1844    | Luxemburger Zeitung                                                          |       1844 |     1845 |       215 |      872 |    1265515 |         0 |
| luxzeit1858    | Luxemburger Zeitung - Journal de Luxembourg                                  |       1858 |     1859 |       538 |     2216 |    4119984 |       536 |
| LVE            | Le Véridique                                                                 |       1831 |     1833 |       312 |     1320 |    1820362 |        50 |
| MGS            | Der Morgenstern                                                              |       1842 |     1843 |       210 |      860 |    1099996 |         0 |
| NTS            | Neues Tagblatt aus der östlichen Schweiz                                     |       1856 |     1874 |      4356 |    17786 |   29930243 |       200 |
| NZG            | Neue Zuger Zeitung (II)                                                      |       1846 |     1891 |      3604 |    14901 |   27699105 |       542 |
| NZZ            | Neue Zürcher Zeitung                                                         |       1780 |     1950 |    112672 |   561444 | 1766374181 |         0 |
| obermosel      | Obermosel-Zeitung                                                            |       1881 |     1948 |     12563 |    64212 |  170730444 |     44299 |
| OIZ            | Die Gewerkschaft                                                             |       1901 |     1992 |      3494 |    18601 |   37740386 |         0 |
| onsjongen      | Ons Jongen                                                                   |       1944 |     1951 |       139 |     2060 |    2002679 |      5515 |
| SAX            | Journal de Saxon                                                             |       1882 |     1884 |         1 |        4 |       4861 |         0 |
| schmiede       | Schmiede                                                                     |       1916 |     1919 |       159 |      652 |     812278 |        96 |
| SDT            | Solidarité                                                                   |       1909 |     2001 |      2805 |    15926 |   38413656 |         0 |
| SGZ            | St.Galler Zeitung                                                            |       1831 |     1881 |     11168 |    46042 |   78456303 |        25 |
| SMZ            | SMUV-Zeitung                                                                 |       1902 |     2004 |      4799 |    45662 |   82009685 |         0 |
| SRT            | Schweizerische Tag-Blätter                                                   |       1798 |     1798 |        30 |      265 |     111854 |         0 |
| tageblatt      | Escher Tageblatt                                                             |       1913 |     1950 |     11338 |    79163 |   48072604 |    263285 |
| VDR            | La Voix du Rhône                                                             |       1844 |     1844 |         1 |        4 |       7240 |         0 |
| VHT            | VHTL-Zeitung                                                                 |       1904 |     2004 |      3139 |    19754 |   37749239 |         0 |
| volkfreu1869   | Volksfreund                                                                  |       1890 |     1939 |      1087 |     4212 |    8062600 |        30 |
| waechtersauer  | Der Wächter an der Sauer                                                     |       1849 |     1869 |      2199 |     8796 |   14624140 |         8 |
| waeschfra      | D'Wäschfra                                                                   |       1868 |     1884 |       660 |     2658 |    2189278 |      5366 |
| WHD            | Der Wahrheitsfreund                                                          |       1835 |     1863 |      1283 |     6257 |   10290086 |        56 |
| ZBT            | Der Zugerbieter                                                              |       1865 |     1868 |       155 |      527 |     704594 |         1 |

[Here](/assets/documents/newspaper_stats_publ-release.csv) you can download the CSV data that were used to produce the table above.
