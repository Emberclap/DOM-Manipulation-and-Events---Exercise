function lockedProfile() {
    const buttonsElements = document.querySelectorAll('button');
    const hiddenElements = document.querySelectorAll('.profile div')
    const radioElements = document.querySelectorAll('input[value=lock]')


    for (let i = 0; i < buttonsElements.length; i++) {
        const element = buttonsElements[i];
        element.addEventListener('click', (event) => {
            if (!radioElements[i].checked) {
                if (element.textContent === 'Show more') {
                    hiddenElements[i].style.display = 'block';
                    element.textContent = 'Hide it';
                }
                else {
                    hiddenElements[i].style.display = 'none';
                    element.textContent = 'Show more';
                }
            }
        });
    }
}