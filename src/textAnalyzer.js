const fs = require('fs');
const path = require('path');

// Lee un archivo y devuelve su contenido como texto
function readTextFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

// Divide el texto en palabras (ignora espacios extra)
function getWords(text) {
  if (!text || text.trim() === '') {
    return [];
  }
  return text.trim().split(/\s+/);
}

// Cuenta el total de palabras
function countWords(text) {
  return getWords(text).length;
}

// Encuentra la palabra más larga (ignora signos de puntuación)
function findLongestWord(text) {
  const words = getWords(text);
  let longest = '';
  for (let i = 0; i < words.length; i++) {
    const clean = words[i].replace(/[^A-Za-z0-9'-]/g, '');
    if (clean.length > longest.length) {
      longest = clean;
    }
  }
  return longest;
}

// Cuenta cuántas líneas tiene el texto
function countLines(text) {
  if (!text) {
    return 0;
  }
  const lines = text.split(/\r?\n/);
  // Si el archivo termina con salto de línea, no cuenta una línea vacía extra
  if (lines[lines.length - 1] === '') {
    lines.pop();
  }
  return lines.length;
}

module.exports = { readTextFile, countWords, findLongestWord, countLines };

// Verificación manual: solo corre con `node src/textAnalyzer.js`
if (require.main === module) {
  const files = ['quotes.txt', 'sample-text.txt'];
  files.forEach((name) => {
    const text = readTextFile(path.join(__dirname, '..', 'data', name));
    console.log(`--- ${name} ---`);
    console.log('Total de palabras:', countWords(text));
    console.log('Palabra más larga:', findLongestWord(text));
    console.log('Número de líneas:', countLines(text));
  });
}
