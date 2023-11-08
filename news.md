---
layout: page
title: News
permalink: /news/
---

<p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>

<section class="in-brief posts-group">
	<h2>In Brief</h2>
	<ul class='short-posts-list'>
		{% assign short_form_posts = site.posts | where: "form" , "short" %}
		{% if short_form_posts.size > 0 %}
			{% for post in short_form_posts %}
				<li>
					<span class='post-date'>{{ post.date | date: "%m/%-d/%y" }}</span> - 
					<a class='post-title' href="{{ post.url }}">{{ post.title }}</a> -- 
					{{ post.excerpt }}
					{% if post.content.size > post.excerpt.size %}
						<span class='more'><a class='more' href="{{ post.url }}">...more</a></span>
					{% endif %}
				</li>
			{% endfor %}
		{% endif %}
	</ul>
</section>

<section class="blog posts-group">
	<ul class='long-posts-list'>
		{% assign long_form_posts = site.posts | where: "form" , "long" %}
		{% if long_form_posts.size > 0 %}
			{% for post in long_form_posts %}
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
</section>