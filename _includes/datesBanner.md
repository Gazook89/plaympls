

{% assign sortedEvents = site.data.PlayMPLS_Calendar-CSV | sort: "Start Date" %}


<div class="dates-banner">
    {% if site.data.PlayMPLS_Calendar-CSV.size > 0 %}
        <ul>
            {% for event in sortedEvents %}

                {% assign start_date = event["Start Date"] | date: "%A %b %-d" %}
                {% assign start_time = event["Start Time"] | date: "%l:%M%P" %}
                {% assign end_date   = event["End Date"] | date: "%A %b %-d" %}
                {% assign end_time   = event["End Time"] | date: "%l:%M%P" %}
                
                {% capture date_time %}
                        {% if start_date %}
                            {% if start_time and end_date and end_time %}
                                {% if start_date contains end_date %}
                                    {{ start_date }}, {{ start_time }} to {{ end_time }}
                                    {% else %}
                                        {{ start_date }} {{ start_time }} -<br>{{ end_date }} {{ end_time }}
                                    {% endif %}
                                {% elsif end_date %}
                                    {% if start_date contains end_date %}
                                        {{ start_date }}
                                        {% else %}
                                            {{ start_date }} -<br>{{ end_date }}
                                    {% endif %}
                                
                                    
                            {% else %}
                                {{ nil }}
                            {% endif %}
                        {% endif %}
                {% endcapture %}

                <li data-start="{{ event['Start Date'] }} {{ event['Start Time'] }}" data-end="{{ event['End Date'] }} {{ event['End Time'] }}">
                    <div class="event-title">{% if event.URL %}<a href="{{ event.URL }}">{{ event.Title }}</a>{% else %}{{ event.Title }}{% endif %} </div>
                    <div class="event-date">{{ date_time }}</div>
                    <div class="event-description">
                        {{ event.Description | markdownify }}

                    </div>
                </li>
            {% endfor %}

        </ul>
    {% endif %}
</div>