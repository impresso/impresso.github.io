---
title: "Associated partners"
permalink: /consortium/associated-partners/
nolang: /consortium/associated-partners/
parentUrl: /consortium/team/
lang: en
category: associated-partner
excerpt: Our project is supported by associated partners who have agreed to contribute their media collections, expertise and know-how.
---

Our project is supported by associated partners who have agreed to contribute their media collections as well as their expertise and know-how in cultural heritage data curation, management and research. We are grateful for their willingness to actively participate in the consolidation of the project results.



{% assign partners = site.partners | where: "category", "associated-partner" | sort: "ordering" %}

<div class="container-fluid g-0">
  <div class="row g-0">
    {% include separator.html label=page.title classname="col-12" %} {% for
    partner in partners %}
    <div >
      {% include partner.html %}
    </div>
    <hr class="h-1px mt-3" />
    {% endfor %}
  </div>
</div>