---
title: Events
permalink: '/events/'
---

All events are listed in chronological order. For more information, please contact the organizers.

{% assign events = site.events | sort: 'start_date' | reverse %}
{% for event in events %}
  {% include event.html classname="mb-3" %}
  <hr />
{% endfor %}
