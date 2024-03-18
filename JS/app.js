const messageBtn = document.getElementById('messageBtn');
const messageArea = document.getElementById('messageArea');

const responseBtn = document.getElementById('responseBtn');
const responseArea = document.getElementById('responseArea');

const alertDiv = document.getElementById('alert');


const validateMessage = (message) => {
  if (message === '') {
    alert('No debe introducirese un valor vacío.');
    alertDiv.innerText = "No debe introducirese un valor vacío."
    return false;
  } else if (((parseInt(message) >= 0)) || (parseInt(message)) < 0) {
    alert('No se debe ingresar un número.');
    alertDiv.innerText = "No se debe ingresar un número."
    return false;
  }
  return true;
}

// Función para cifrar usando el cifrado César
function cipher(message, displacement) {
  let response = '';
  for (let i = 0; i < message.length; i++) {
    let char = message[i];

    // Verificar si el carácter es una letra mayúscula o minúscula
    if (char.match(/[a-z]/i)) {
      // Obtener el código ASCII del carácter actual
      let code = message.charCodeAt(i);

      // Aplicar el desplazamiento y obtener el nuevo carácter cifrado
      if (char === char.toUpperCase()) {
        response += String.fromCharCode((code - 65 + displacement) % 26 + 65); // Mayúsculas
      } else {
        response += String.fromCharCode((code - 97 + displacement) % 26 + 97); // Minúsculas
      }
    } else {
      // Mantener los caracteres que no son letras sin cifrar
      response += char;
    }
  }
  return response;
}

// Función para descifrar usando el cifrado César
function decipher(encryptedText, displacement) {
  // Para descifrar simplemente se invierte el desplazamiento
  return cipher(encryptedText, displacement * -1);
}




// Evento en el boton de cifrado, 
// al clikear el boton lee el valor del mensaje
//  y cifra/encripta el mensaje. 
messageBtn.addEventListener("click", () => {
  const message = messageArea.value;
  if (validateMessage(message)) {
    const messagecipher = cipher(message, 3);

    responseArea.value = (messagecipher) ? messagecipher : '';
    messageArea.value = '';
    alertDiv.innerText = "Mensaje Cifrado!!!"
  };
});


// Evento en el boton de descifrado, 
// al clikear el boton lee el valor y descifra/desencripta el mensaje. 
responseBtn.addEventListener("click", () => {
  const messagecipher = responseArea.value;
  const messagedecipher = decipher(messagecipher, 3);
  if (validateMessage(messagecipher)) {
    messageArea.value = (messagedecipher) ? messagedecipher : '';
    responseArea.value = '';
    alertDiv.innerText = "Mensaje Descifrado!!!"
  }
});