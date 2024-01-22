---
title: Events
permalink: '/events/'
---

All events are listed in chronological order. For more information, please contact the organizers.

{% assign events = site.events | sort: 'start_date'  %}
{% include separator.html label=page.title classname="col-12" %}
{% for event in events %}
{% include event.html classname="my-4" %}

  <hr class="h-1px"/>
{% endfor %}
