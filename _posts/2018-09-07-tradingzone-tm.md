---
layout: post
status: published
title: About Topic Modeling on historical newspapers ...
lang: en
date: 2018-09-07
tags:
  - NLP
categories: news
authors:
  - phillip-stroebel
figure:
  - src: posts/lda-geometric-interpretation.png
---

Trading zone part 4: Topic modeling. This blog post is the last part of [Stepping in the NLP / History trading zone: a series of posts](/news/2018/06/11/tradingzone-umbrella.html).

<!-- more -->

<h2>
... and where it fails</h2>
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="https://3.bp.blogspot.com/-oJn171IVQtM/WyfCDnhPfPI/AAAAAAAAJPI/Y6yI3As3DtQw96wWNMSK1w71wDouAMnZQCLcBGAs/s1600/BLOG_JDG_1956_11_24.jpg" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" data-original-height="202" data-original-width="291" src="https://3.bp.blogspot.com/-oJn171IVQtM/WyfCDnhPfPI/AAAAAAAAJPI/Y6yI3As3DtQw96wWNMSK1w71wDouAMnZQCLcBGAs/s1600/BLOG_JDG_1956_11_24.jpg" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">An article about the premiere of Dürrenmatt's play in the Netherlands.</td></tr>
</tbody></table>
<div>
<br /></div>
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="https://3.bp.blogspot.com/-GmmBPPohw_0/WyfBiQLNNBI/AAAAAAAAJPA/veBEs8N5d78hzTePT7qX4BFc5yTXFYt8gCLcBGAs/s1600/BLOG_JDG_1945_04_04.jpg" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" data-original-height="405" data-original-width="615" height="420" src="https://3.bp.blogspot.com/-GmmBPPohw_0/WyfBiQLNNBI/AAAAAAAAJPA/veBEs8N5d78hzTePT7qX4BFc5yTXFYt8gCLcBGAs/s640/BLOG_JDG_1945_04_04.jpg" width="640" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">An article about the situation in the Netherlands during WWII.</td></tr>
</tbody></table>
<div>
<span id="docs-internal-guid-a58f81a5-1346-3fa8-413b-337063b0b1f9"><br /></span>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span id="docs-internal-guid-a58f81a5-1346-3fa8-413b-337063b0b1f9"><span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"></span></span></div>
<span id="docs-internal-guid-a58f81a5-1346-3fa8-413b-337063b0b1f9">
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">Let’s assume a historian wants to investigate the battle of Arnhem and she would like to use newspaper texts for her primary source. She enters her query “Arnhem” into a search engine and finds the two articles you see above. After a quick inspection, the historian deems the first one to be irrelevant for her further research, whereas the second one looks important. If we wanted to assign labels to the two different texts, we would probably choose something like “arts” for the first one, and “war” for the second one. The indicators for these labels are the words that are present in the articles. In the first one we find words like “théatres”, “comédie”, “pièce”, “œuvre”, etc., which we associate with “arts”. In the second one, words like “divisions”, “forces”, “combats”, “troupes”, etc., give the impression of a war-like scenario.</span></div>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"><br /></span></div>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">Although we can determine a general topic of a text in most cases, such texts usually are not about one single topic. They rather contain a mixture of topics. We also find other words in the first text, e.g., “suisse” or “Zurich”, which helps us to put this article in a Swiss context, meaning if we were looking for Swiss artwork (instead of Arnhem), this article should pop up in our search. Names, like the one of the Swiss author "Friedrich Dürrenmatt", enforce this context. This is why named entity recognition (NER) helps us to further contextualise the information we find in the text.</span></div>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"><br /></span></div>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">Upon closer inspection, we not only notice words that are characteristic for a specific article, but we also stumble upon words the two articles share. </span><span style="font-family: &quot;arial&quot;; font-size: 11pt; white-space: pre-wrap;">But not every word is of equal importance. Prepositions and articles, like “en” or “la” do not play a role in assigning topics to texts. Words like “Vienne” or “théatres”, on the other hand, matter. As such, we can say that a text tends to contain several topics, while each topic consists of several, ideally semantically coherent words. In our first text, the topic “arts” would dominate, since most of the words can be found in the art context. The second text, however, would be dominated by the “war” topic, but the topic “arts” would probably be represented as well, since the word “théatres” occurs once (even if it is used in a different context). So the topic distribution could look something like 90% topic “war”, 5% topic “arts”, and 5% some other topic. Hence, we are able to sort texts according to their topic distribution, which allows to refine search hits by not only excluding articles (like in the example above), but also extending the search in order to find articles on similar topics (maybe the researcher would find reports about the battle of Dunkirk if she wanted find articles with a similar topic distribution as the one from above).</span></div>
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="https://2.bp.blogspot.com/-FbRB7l13f9s/WyfDlCcO9QI/AAAAAAAAJPU/5JHOcc8i_jgmpp7jg9933heIivnYp0-5gCLcBGAs/s1600/BLOG_Screenshot%2Bfrom%2B2018-06-07%2B10-21-30.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" data-original-height="965" data-original-width="1416" height="436" src="https://2.bp.blogspot.com/-FbRB7l13f9s/WyfDlCcO9QI/AAAAAAAAJPU/5JHOcc8i_jgmpp7jg9933heIivnYp0-5gCLcBGAs/s640/BLOG_Screenshot%2Bfrom%2B2018-06-07%2B10-21-30.png" width="640" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">Results from a search of "arnhem" in <a href="http://www.letempsarchives.ch/">www.letempsarchives.ch</a>.</td></tr>
</tbody></table>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">In topic modeling, we try to find out first which words belong to which topic, where one word can occur in several topics. As training data we take all our newspaper issues. Before training a topic model, we have to define how many topics we want to find in our corpus. This choice has a big influence on the outcome. If the number of topics is too low, the topics will be too general and mixed, whereas a too high number will result in too specific topics, most of which won’t be of much use for grouping documents.<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="https://4.bp.blogspot.com/-bZiqeFlk6Gw/WyfDseSAxII/AAAAAAAAJPY/FtonyFRM6lkCfL_-Rpz19CAdqCXOXed-gCLcBGAs/s1600/BLOG_Screenshot%2Bfrom%2B2018-06-07%2B10-21-3%25C2%25A7.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" data-original-height="607" data-original-width="1269" height="306" src="https://4.bp.blogspot.com/-bZiqeFlk6Gw/WyfDseSAxII/AAAAAAAAJPY/FtonyFRM6lkCfL_-Rpz19CAdqCXOXed-gCLcBGAs/s640/BLOG_Screenshot%2Bfrom%2B2018-06-07%2B10-21-3%25C2%25A7.png" width="640" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">Frequency distribution of the query term "arnhem".</td></tr>
</tbody></table>
</span></div>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">In a second step, by applying topic modeling on articles, we are able to perform so-called soft clustering, which aims at classifying texts according to their topic distribution. In the </span><span style="font-family: &quot;arial&quot;; font-size: 11pt; font-style: italic; vertical-align: baseline; white-space: pre-wrap;">impresso</span><span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"> project topic models will help to identify pages or articles (only for newspapers for which we have article segmentation) with a similar topic distribution. When we look for “Arnhem” in the archives of </span><span style="font-family: &quot;arial&quot;; font-size: 11pt; font-style: italic; vertical-align: baseline; white-space: pre-wrap;">Le Temps</span><span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"> (as shown in the two images above), we find texts about the battle, but also about other events that happened in Arnhem (like sports results, art exhibitions, industrial news, etc.). What’s more, if we use the German spelling, namely “Arnheim”, we find 178 more hits (although it seems the spellings belong to different time periods, as you can see below). If we want to filter out the articles about sports, etc., and if we want to include the articles in which the other spelling variant is used, we can use a topic model to find related articles, namely those which are about war, and not sports or art events. And since we focus on finding similar articles based on the topic distribution, we don’t even need to start a new search with “Arnheim”, since we assume that the topic distribution of all articles which are about the battle of Arnhem should be comparable. Or, alternatively, we use the keywords and/or named entities the articles about Arnhem contain and filter (or extend) our search according to those keywords. <table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto; text-align: center;"><tbody>
<tr><td style="text-align: center;"><a href="https://3.bp.blogspot.com/-3QUS9m5c1IQ/WyfD0_VQKXI/AAAAAAAAJPg/trlBypQcAto2W-ReJSvBvoEqNhlZYfjewCLcBGAs/s1600/BLOG_Screenshot%2Bfrom%2B2018-05-23%2B18-45-47.png" imageanchor="1" style="margin-left: auto; margin-right: auto;"><img border="0" data-original-height="1051" data-original-width="1433" height="468" src="https://3.bp.blogspot.com/-3QUS9m5c1IQ/WyfD0_VQKXI/AAAAAAAAJPg/trlBypQcAto2W-ReJSvBvoEqNhlZYfjewCLcBGAs/s640/BLOG_Screenshot%2Bfrom%2B2018-05-23%2B18-45-47.png" width="640" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;">"arnheim" vs. "arnhem".</td></tr>
</tbody></table>
</span></div>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">Now imagine you want to find out how different newspapers reported about the battle of Arnhem. It could well be that the political orientation of the newspaper (or the one of the author, or the chief editor, or the publisher) has an influence on what information you find in the text (or what is missing). Thus, you would like to find all articles about the battle of Arnhem. Since Switzerland is a multilingual country and the </span><span style="font-family: &quot;arial&quot;; font-size: 11pt; font-style: italic; vertical-align: baseline; white-space: pre-wrap;">impresso</span><span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"> collection contains French and German documents (while we also think about including other languages), one desideratum would be to find similar texts across language boundaries. This is where cross-lingual topic modeling comes in. With parallel texts, meaning translated text, cross-lingual topic modeling is not a big deal and has already been explored by some researchers. </span></div>
<table cellpadding="0" cellspacing="0" class="tr-caption-container" style="float: left; margin-right: 1em; text-align: left;"><tbody>
<tr><td style="text-align: center;"><a href="https://1.bp.blogspot.com/-yn-F3Xz0C1k/WyfVgg6hCVI/AAAAAAAAJP8/YUMJKX4-9MUSzgoK1zP4IGiyYys96aiogCLcBGAs/s1600/TopicModels%2B%25281%2529.jpg" imageanchor="1" style="clear: left; margin-bottom: 1em; margin-left: auto; margin-right: auto;"><img border="0" data-original-height="720" data-original-width="960" src="https://1.bp.blogspot.com/-yn-F3Xz0C1k/WyfVgg6hCVI/AAAAAAAAJP8/YUMJKX4-9MUSzgoK1zP4IGiyYys96aiogCLcBGAs/s1600/TopicModels%2B%25281%2529.jpg" /></a></td></tr>
<tr><td class="tr-caption" style="text-align: center;"><div dir="ltr" style="font-size: medium; line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"></span></div>
<table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-bottom: 0.5em; margin-left: auto; margin-right: auto; padding: 6px; text-align: center;"><tbody>
<tr><td class="tr-caption" style="font-size: 12.8px; padding-top: 4px; text-align: center;">Similarities across newspapers.</td></tr>
</tbody></table>
</td></tr>
</tbody></table>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"><br /></span></div>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"><br /></span></div>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">The challenge we face </span><span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"> </span><span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">when working with newspapers is that, e.g., the Journal de Genève (JDG) of 15.06.1944 is not a translation of the Neue Zürcher Zeitung (NZZ) of the same day. However, we might find similar topics. As we can see, the main stories are not the same. The NZZ focuses on the battle in the Normandy, while the title story of the JDG is about an ongoing battle in Russia. The overall main topic, though, would nevertheless be related to war. Although the lead articles do not report about the same incidents, we nevertheless find similarities across the page. First of all, we find very closely related images, the one of the NZZ showing Bernard Montgomery, who served as Winston Churchill’s Field Marshal from 1944 onwards. The second shows Churchill himself. Both, Montgomery and Churchill, are visiting the troops in the Normandy. But we also find textual similarity. The green framed passages indicate texts which are about the Normandy, while the light blue frames highlight snippets about Montgomery. Our aim in </span><span style="font-family: &quot;arial&quot;; font-size: 11pt; font-style: italic; vertical-align: baseline; white-space: pre-wrap;">impresso</span><span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"> is now to find a way how we could identify such similarities across languages, thus providing researchers with more, and hopefully also more relevant, material.</span></div>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"><br /></span></div>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt; text-align: justify;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">Working with digitised newspapers poses yet another challenge. The quality of the digitised content depends on how careful the digitisation process was carried out and what models were used for the Optical Character Recognition (OCR). The images we have received are not always of high quality and this has severe implications on the quality of the OCR. This not only means that we have to find methods to correct these OCR errors, but also that we are somehow forced to apply our text mining methods on “dirty data”. In order to show the degree of “harm” using dirty data for topic modeling, we tried to extract 50 topics from the NZZ (we've only used 60'000 pages) with <a href="http://mallet.cs.umass.edu/topics.php">MALLET</a>. In the following table, you find three topics out of these 50 which are semantically coherent:</span></div>
<br /><div dir="ltr" style="margin-left: 0pt;">
<table style="border-collapse: collapse; border: none;">
<tbody>
<tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 10pt; vertical-align: baseline; white-space: pre-wrap;">1</span></div>
</td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 10pt; vertical-align: baseline; white-space: pre-wrap;">kunst konzert bild theater künstler oper musikalisch spielen werk künstlerisch orchester aufführung ausstellung lied musik vortrag stück chor musil programm</span></div>
</td></tr>
<tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 10pt; vertical-align: baseline; white-space: pre-wrap;">2</span></div>
</td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 10pt; vertical-align: baseline; white-space: pre-wrap;">deutschen britisch deutsch truppe krieg russisch angriff flugzeug feindlich schwer front armee kampf london japanisch havas amerikanisch feind alliiert italienisch</span></div>
</td></tr>
<tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 10pt; vertical-align: baseline; white-space: pre-wrap;">3</span></div>
</td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 10pt; vertical-align: baseline; white-space: pre-wrap;">zimmer lage vermieten verkaufen wohnung garten groß auskunft villa hotel schön zürich haus pension komfort preis see telephon sonnig modern</span></div>
</td></tr>
</tbody></table>
</div>
<br /><div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">The first one refers to the arts, while the second one can be associated with WWII. In the third topic we find words which are most often used in the context on flat advertisement. However, there are also topics which suffer from the poor OCR quality of the NZZ, as we show in the next table:</span></div>
<br /><div dir="ltr" style="margin-left: 0pt;">
<table style="border-collapse: collapse; border: none;">
<tbody>
<tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">4</span></div>
</td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 10pt; vertical-align: baseline; white-space: pre-wrap;">vita dtt chm dje dew dep ftn stm dtn mem hät ftm bch dim dtr ßch mam vow pie stch</span></div>
</td></tr>
<tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">5</span></div>
</td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 10pt; vertical-align: baseline; white-space: pre-wrap;">unc clie icl ncl iic ssc unci icr clen vnn clc cll lcl icli unss llc nci clic ncn nnc</span></div>
</td></tr>
<tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">6</span></div>
</td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 10pt; vertical-align: baseline; white-space: pre-wrap;">nicken bitten vnn icl eit lill nicbt gen liegen clcr clie klein cit bereit cke eilen cin lum immer ckcn</span></div>
</td></tr>
<tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">7</span></div>
</td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 10pt; vertical-align: baseline; white-space: pre-wrap;">bass werben wild leinen iahen mehl enn übel wal fehlen non tann fühlen zul nui zui übn hatt ihi wied</span></div>
</td></tr>
</tbody></table>
</div>
<br /><div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">We see that the majority of words in each of these four topics consists of OCR errors. In total, 13 out of 50 topics look like the examples in 4 - 7. This is a serious flaw and we need to tackle this problem with either a re-digitisation of NZZ material , or a re-OCRing of the scanned images, or both.</span></div>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"><br /></span></div>
<div dir="ltr" style="line-height: 1.38; margin-bottom: 0pt; margin-top: 0pt;">
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;">Applying text mining to data from which we do not know how clean it really is quickly reveal the most common errors. For this reason, cleaning up as much as possible is vital for the continuous and manifold work that is currently done on digitised texts. Only after having established a clean basis we can continue with our work and think about how we can model topics across languages, and also, how to evaluate them. These are some unanswered and lesser researched questions I'm turning to next.</span></div>
<div>
<span style="font-family: &quot;arial&quot;; font-size: 11pt; vertical-align: baseline; white-space: pre-wrap;"><br /></span></div>
</span></div>
