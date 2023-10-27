window.onload = function(){
    const dateBanner = document.getElementsByClassName('dates-banner')[0];
    const eventsArr = dateBanner.querySelectorAll('li');

    console.log(eventsArr)

    for (element of eventsArr){
        const eventEndDate = element.dataset.end.split(' ')[0].split('-');
        const eventEndTime = element.dataset.end.split(' ')[1].split(':');

        const year = eventEndDate[0];
        const month = eventEndDate[1] - 1;
        const day = eventEndDate[2];
        const hour = eventEndTime[0];
        const minute = eventEndTime[1];

        const date = new Date(year, month, day, hour, minute);

        console.log(date)
        console.log(new Date)

        if(date < new Date){
            element.remove();

        }

    }
}
