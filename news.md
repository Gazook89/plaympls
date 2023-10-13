---
layout: page
title: News
permalink: /news/
---

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>

<ul class='posts-list'>
	{% if site.posts.size > 0 %}
		{% for post in site.posts %}
			<li>
				<a class='post-title' href="{{ post.url }}">{{ post.title }}</a>
				<div class='post-date'>{{ post.date | date_to_long_string: "ordinal", "US" }}</div>
				{{ post.excerpt }}
				{% if post.content.size > post.excerpt.size %}
					<div class='more'><a class='more' href="{{ post.url }}">...more</a></div>
				{% endif %}
			</li>
		{% endfor %}
	{% else %}
		<li>Nothing here...</li>
	{% endif %}
</ul>