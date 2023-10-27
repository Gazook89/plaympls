window.onload = function(){
    const dateBanner = document.getElementsByClassName('dates-banner')[0];
    const eventsArr = dateBanner.getElementsByTagName('li');

    console.log(eventsArr)

    for (element of eventsArr){
        const eventDate = element.dataset.date.split(' ')[0].split('-');
        const eventTime = element.dataset.date.split(' ')[1].split(':');

        const year = eventDate[0];
        const month = eventDate[1] - 1;
        const day = eventDate[2];
        const hour = eventTime[0];
        const minute = eventTime[1];

        const date = new Date(year, month, day, hour, minute);

        if(date < new Date){
            element.remove();

        }

    }
}
