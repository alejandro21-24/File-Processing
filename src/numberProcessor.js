const fs = require('fs');
const path = require('path');

// Lee un archivo con un número por línea y devuelve un arreglo de números
function readNumbersFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  const numbers = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.length > 0) {
      const value = parseFloat(line);
      if (!Number.isNaN(value)) {
        numbers.push(value);
      }
    }
  }
  return numbers;
}

// Suma de todos los números
function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Número más alto (null si el arreglo está vacío)
function findHighest(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let highest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    }
  }
  return highest;
}

// Número más bajo (null si el arreglo está vacío)
function findLowest(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let lowest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < lowest) {
      lowest = numbers[i];
    }
  }
  return lowest;
}

// Promedio (0 si el arreglo está vacío)
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return sumNumbers(numbers) / numbers.length;
}

module.exports = {
  readNumbersFile,
  sumNumbers,
  findHighest,
  findLowest,
  calculateAverage,
};

// Verificación manual: solo corre con `node src/numberProcessor.js`
if (require.main === module) {
  const numbers = readNumbersFile(
    path.join(__dirname, '..', 'data', 'sample-numbers.txt')
  );
  console.log('Números:', numbers);
  console.log('Suma:', sumNumbers(numbers));
  console.log('Más alto:', findHighest(numbers));
  console.log('Más bajo:', findLowest(numbers));
  console.log('Promedio:', calculateAverage(numbers));
}
