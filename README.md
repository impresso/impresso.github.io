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

## How to add an item to the Timeline

To add a new event to the **timeline** on the homepage, follow these steps:

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

If there is a blogpost associated with the event, add the link to the `blogpost` field in the front matter using the relative path to the blogpost. For example, if the blogpost _md file_ is located at `_posts/2027-01-01-new-event.md`, add the proper url to the front matter, following the `permalink: /:categories/:year/:month/:day/:title:output_ext` pattern. For example, the front matter would look like this:

```diff
---
title: 'New Event'
date: 2023-11-29
start_date: 2027-01-01
end_date: 2027-30-01
human_date: Second or third week of January 2027
+blogpost: /news/2027/01/01/new-event.html
---
```

## How to add an announcement and link to a blogpost

Announceents are displayed on the homepage. To add a new announcement, create a new Markdown file in the `_announcements` directory with a filename following the format `YYYY-MM-DD-short-slug.md`. For example, `2027-01-01-new-announcement.md`. Use the date of the announcement in the filename, as it is just being used to sort filenames in the directory. _Note: Jekyll would not render the file if the date in the filename is in the future, so you can safely create the file even if the announcement is not scheduled yet_.
If you want to link the announcement irectly with a blogpost, use the `blogpost` field in the front matter using the relative path to the blogpost. For example, if the blogpost _md file_ is located at `_posts/2027-01-01-new-event.md`, add the proper url to the front matter, following the `permalink: /:categories/:year/:month/:day/:title:output_ext` pattern. For example, the front matter would look like this:

```yaml
---
title: New announcement
blogpost: /news/2027/01/01/new-event.html
---
```

## How to add a page, its list of seealso pages, and link to it from the menu

Create the page in the `pages` directory. The filename should be the same as the title of the page, with dashes instead of spaces. For example, if the page title is "About the Project", the filename should be `about-the-project.md`. Add the **permalink** to the front matter to the page:

```yaml
---
title: 'About the Project'
permalink: /about-the-project/
---
```

Then add an entry to the menu in the `_data/navigation.yml` file:

```yaml
- title: About the Project
  url: /about-the-project/
```

The page frontmatter can contain the `seealso` table of links - the links being the exact permalink of the page to link to:

````diff
---
title: 'About the Project'
permalink: /about-the-project/
+ seealso:
+   - /project/objectives/
+   - /project/design/
---

If you need to add a page inside a subdirectory, for example, `/project/objectives/`, you need to add the `parentUrl` to the front matter of the page:

```diff
---
title: 'Objectives'
permalink: /project/objectives/
+ parentUrl: /project/
---
````

The folder structure of the pages directory should in principle reflect the menu structure. For example, the page `/project/objectives/` should be located in the `pages/project/objectives.md` file.
Note: the **permalink** will tell eventually Jekyll to generate the page at the specified URL, even if the page is located in a subdirectory.

## How to add a blogpost

Create a new Markdown file in the `_posts` directory with a filename following the format `YYYY-MM-DD-short-slug.md`. For example, `2027-01-01-new-event.md`. Use the date of the event in the filename, as it is just being used to sort filenames in the directory. _Note: Jekyll would not render the file if the date in the filename is in the future, so you can safely create the file even if the event is not scheduled yet_. If you want the event to be displayed as a separate page, don't forget to add the `date` field to the front matter!

In the newly created Markdown file, add the following front matter at the beginning of the file:

```yaml
---
title: 'Blogpost Title'
date: YYYY-MM-DD # Publication date of the blogpost, optional if date in the filename refers to past date
---
```

To add a cover figure, add the images to the `/assets/images` directory and add the `figure` field to the front matter:

```diff
---
title: 'Blogpost Title'
date: YYYY-MM-DD # Publication date of the blogpost, optional if date in the filename refers to past date
+ figure:
+   - src: figure1.png
+     alt: 'Figure 1'
+     caption: 'Figure 1: Caption of the figure'
---
```
