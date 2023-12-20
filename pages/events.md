---
title: Events
permalink: '/events/'
---

All events are listed in chronological order. For more information, please contact the organizers.

{% assign events = site.events | sort: 'date' | reverse %}
{% for post in events %}
  {% include post.html %}
{% endfor %}
