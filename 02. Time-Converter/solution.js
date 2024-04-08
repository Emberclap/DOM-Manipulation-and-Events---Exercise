function attachEventsListeners() {
    const buttonElements = document.querySelectorAll('input[value=Convert]')
    const inputFieldsElement = document.querySelectorAll('input[type=text]')
    console.log(inputFieldsElement);

   Array.from(buttonElements).forEach(button => {
        button.addEventListener('click', (event) => {
            converter(inputFieldsElement)
        });
    });

    function converter(elementsNodes) {
        const days = elementsNodes[0];
        const hours = elementsNodes[1];
        const minutes = elementsNodes[2];
        const seconds = elementsNodes[3];

        let day = 0;
        if (days.value != '') {
            day = Number(days.value);
        }
        else if (hours.value != '') {
            day = Number(hours.value) / 24;
        }
        else if (minutes.value != '') {
            day = (Number(minutes.value) / 60) / 24;
        }
        else {
            day = ((Number(seconds.value) / 60) / 60) / 24;
        }

        days.value = day;
        hours.value = day * 24;
        minutes.value = day * 24 * 60;
        seconds.value = day * 24 * 60 * 60;
    }
}