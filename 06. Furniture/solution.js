function solve() {
  const inputTextArea = document.querySelectorAll('textarea')[0];
  const outputTextArea = document.querySelectorAll('textarea')[1];
  const generateButtonElement = document.querySelectorAll('button')[0];
  const buyButtonElement = document.querySelectorAll('button')[1];
  const tbodyElement = document.querySelector('tbody')

  generateButtonElement.addEventListener('click', () => {

    const furnitures = JSON.parse(inputTextArea.value);

    furnitures.forEach(furniture => {

      const newImgElement = document.createElement('img');
      const newTdElement = document.createElement('td');
      newImgElement.src = furniture.img;
      newTdElement.appendChild(newImgElement);

      const newNamePElement = document.createElement('p');
      newNamePElement.textContent = furniture.name;
      const newNameTdParagraph = document.createElement('td');
      newNameTdParagraph.appendChild(newNamePElement);

      const newPricePElement = document.createElement('p');
      newPricePElement.textContent = furniture.price;
      const newPriceTdParagraph = document.createElement('td');
      newPriceTdParagraph.appendChild(newPricePElement);

      const newDecPElement = document.createElement('p');
      newDecPElement.textContent = furniture.decFactor;
      const newDecTdParagraph = document.createElement('td');
      newDecTdParagraph.appendChild(newDecPElement);

      const newMarkElement = document.createElement('input');
      newMarkElement.setAttribute('type', 'checkbox');
      const newMarkTdElement = document.createElement('td');
      newMarkTdElement.appendChild(newMarkElement);

      const newFurnitureTrElement = document.createElement('tr');
      newFurnitureTrElement.appendChild(newTdElement);
      newFurnitureTrElement.appendChild(newNameTdParagraph);
      newFurnitureTrElement.appendChild(newPriceTdParagraph);
      newFurnitureTrElement.appendChild(newDecTdParagraph);
      newFurnitureTrElement.appendChild(newMarkTdElement);
      tbodyElement.appendChild(newFurnitureTrElement);

    });
  });
  
  buyButtonElement.addEventListener('click', () => {
    let avgFactor = 0;
    let totalPrice = 0;
    const products = [];
    let markedItems = 0;

    const boughtFurniture = document.querySelectorAll('tbody tr');
    boughtFurniture.forEach(element => {
      const markElement = element.querySelector('input[type=checkbox]');

      if (markElement.checked) {
        const name = element.children.item(1).textContent;
        const price = Number(element.children.item(2).textContent);
        const decorationFactor = Number(element.children.item(3).textContent);

        products.push(name);
        totalPrice += price;
        avgFactor += decorationFactor;
        markedItems++;
      }
    });

    const averageDecFactor = avgFactor / markedItems;
    outputTextArea.textContent += `Bought furniture: ${products.join(', ')}\n`;
    outputTextArea.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputTextArea.textContent += `Average decoration factor: ${averageDecFactor}`;
  });
}
