{% assign start_time = {{ event["Start Time"] | nil }} %}

<div class="dates-banner">
    {% if site.data.PlayMPLS_Calendar-CSV.size > 0 %}
        <ul>
            {% for event in site.data.PlayMPLS_Calendar-CSV %}
                <li>
                    <div class="event-title">{% if event.URL %}<a href="{{ event.URL }}">{{ event.Title }}</a>{% else %}{{ event.Title }}{% endif %} </div>
                    <div class="event-date">{{ event["Start Date"] }} {{ event["Start Time"] | nil }} {% if event["End Date"] != event["Start Date"] %} - {{ event["End Date"] }}{% endif %}</div>
                    <div class="event-description">
                        {{ event.Description | markdownify }}

                    </div>
                </li>
            {% endfor %}

        </ul>
    {% endif %}
</div>