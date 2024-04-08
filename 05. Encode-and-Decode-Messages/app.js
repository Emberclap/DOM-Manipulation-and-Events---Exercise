function encodeAndDecodeMessages() {
    let textMessageElement;
    const encodeButtonElement = document.querySelectorAll('button')[0];
    const decodeButtonElement = document.querySelectorAll('button')[1];
   

    encodeButtonElement.addEventListener('click', () =>{
        textMessageElement = document.querySelectorAll('textarea')[0];
        const encodedText = encode(textMessageElement.value)
        document.querySelectorAll('textarea')[1].value = encodedText.join('');
        textMessageElement.value = '';
    });

    decodeButtonElement.addEventListener('click', () =>{
        textMessageElement = document.querySelectorAll('textarea')[1];
        const decodedText = decode(textMessageElement.value)
        document.querySelectorAll('textarea')[1].value = decodedText.join('');
    });
    
    

    function encode(text) {

        const newText = Array.from(text)
        .map(char => String.fromCharCode(char.charCodeAt()+1));
        return newText;
    }
    function decode(text) {
        console.log(text);
        const newText = Array.from(text)
        .map(char => String.fromCharCode(char.charCodeAt()-1));
        
        return newText;
    }
}