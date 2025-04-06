
// Definiendo variables

const output = document.getElementById('output');
const upperCase = document.getElementById('uppercase');
const lowerCase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const length = document.getElementById('length');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');


// Conjunto de caracteres

const char_set = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    symbol: '!@#$%^&*()_+[]{}|;:,.<>?'
};

// Generar contraseña

function generatePassword() {
    const passwordLength = parseInt(length.value);
    let passwordSet = "";
  
    const options = [
      { checked: upperCase.checked, chars: char_set.upper },
      { checked: lowerCase.checked, chars: char_set.lower },
      { checked: numbers.checked, chars: char_set.number },
      { checked: symbols.checked, chars: char_set.symbol }
    ];
  
    // Construir el conjunto de caracteres disponibles
    options.forEach(option => {
      if (option.checked) {
        passwordSet += option.chars;
      }
    });
  
    // Validación: al menos una opción debe estar seleccionada
    if (passwordSet.length === 0) {
      alert("Por favor selecciona al menos una opción.");
      return;
    }
  
    // Generar la contraseña aleatoria
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * passwordSet.length);
      password += passwordSet[randomIndex];
    }
  
    // Mostrar resultado
    output.value = password;
  }
  

// Event listeners
generateBtn.addEventListener('click', generatePassword);

// Función para copiar al portapapeles
copyBtn.addEventListener('click', function() {
  if (output.value) {
    output.select();
    document.execCommand('copy');
    
    alert('Contraseña copiada al portapapeles');
  } else {
    alert('No hay contraseña para copiar');
  }
});


