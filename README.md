# Impresso website

## Where are pages stored on Github?

| Jekyll collection | folder in this Github repo                                                        |
| ----------------- | --------------------------------------------------------------------------------- |
| current home      | [index](https://github.com/impresso/impresso.github.io/blob/master/index.html)    |
| new home          | [index\_](https://github.com/impresso/impresso.github.io/blob/master/index_.html) |
| pages             | [/pages](https://github.com/impresso/impresso.github.io/tree/master/pages)        |
| lab post          | [/\_labs](https://github.com/impresso/impresso.github.io/tree/master/_labs)       |
| blog posts        | [/\_posts](https://github.com/impresso/impresso.github.io/tree/master/_posts)     |
| people            | [/\_posts](https://github.com/impresso/impresso.github.io/tree/master/_people)    |
| partners          | [/\_posts](https://github.com/impresso/impresso.github.io/tree/master/_partners)  |
| events            | [/\_posts](https://github.com/impresso/impresso.github.io/tree/master/_events)    |

## Setting up development environment with Jekyll

This website uses Jekyll 3.9.3.
In terminal, browse to local site directory, then use the following commands:

```bash
bundle install
bundle exec jekyll serve
```

Your local site resides here now: [localhost:4000](http://localhost:4000/)

Details on [setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)

## Setting up development environment with Docker

## How to add an item to the Agenda

To add a new event to the **events**, that is the project timeline, follow these steps:

1. Create a new Markdown file in the `_events` directory with a filename following the format `YYYY-MM-DD-short-slug.md`. For example, `2027-01-01-new-event.md`. Use the earliest date of the event in the filename, as it is just being used to sort filenames in the directory. _Note: Jekyll would not render the file if the date in the filename is in the future, so you can safely create the file even if the event is not scheduled yet_. If you want the event to be displayed as a separate page, don't forget to add the `date` field to the front matter!

2. In the newly created Markdown file, add the following front matter at the beginning of the file:

```yaml
---
title: 'Event Title'
date: YYYY-MM-DD # Publication date of the event, optional if date in the filename refers to past date
start_date: YYYY-MM-DD # Start date of the event
end_date: YYYY-MM-DD # End date of the event
human_date: Month Year # Human-readable date, e.g., January 2027
---
```

Replace 'Event Title' with the actual title of the event, set the `start_date` and `end_date` to the appropriate dates in the format `YYYY-MM-DD`. The `human_date` is a human-readable date, e.g., January 2027 and it will be the only label displayed in the timeline.
Adjust the human_date to reflect the month and year of the event.
For example, for an event titled "New Event" scheduled for one unspecified day in January 2027, the front matter would look like:

```yaml
---
title: 'New Event'
date: 2023-11-29
start_date: 2027-01-01
end_date: 2027-30-01
human_date: Second or third week of January 2027
---
```
