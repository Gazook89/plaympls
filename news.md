---
layout: page
title: News
permalink: /news/
---

<ul class='posts-list'>
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
</ul>