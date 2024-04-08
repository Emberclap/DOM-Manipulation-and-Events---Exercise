function create(words) {
   const fieldForElements = document.getElementById('content');

    words.forEach(element => {
      const newItem = document.createElement('div');
      const newParagraph = document.createElement('p');

      newParagraph.textContent = element;
      newParagraph.style.display = 'none'
      newItem.addEventListener('click', (event) =>{
         newParagraph.style.display = 'block';
      });
      newItem.appendChild(newParagraph);
      fieldForElements.appendChild(newItem)

    });
}