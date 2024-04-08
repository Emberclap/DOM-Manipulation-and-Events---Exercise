function addItem() {
    const inputTextElement = document.getElementById('newItemText');
    const inputValueElement = document.getElementById('newItemValue');
    const menuElement = document.getElementById('menu');
    const buttonElement = document.querySelector('input[value=Add]')


    const newElement = document.createElement('option');
    newElement.textContent = inputTextElement.value;
    newElement.value = inputValueElement.value;
    console.log(newElement);
    menuElement.appendChild(newElement);
    inputTextElement.value = '';
    inputValueElement.value = '';


}