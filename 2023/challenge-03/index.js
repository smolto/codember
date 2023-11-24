const fs = require('fs')
const path = require('path') 

const filePath = path.join(__dirname, './data/encryption_policies.txt')
  

fs.readFile(filePath, 'utf8', function(err, data){ 
  console.time('challenge03')
  const fileContent = data.split(/\r?\n/)
  const wrongPasswords = []

  for(const line of fileContent) {
    const wrongPassword = checkEncryptionPolicy(line)

    if(wrongPassword) wrongPasswords.push(wrongPassword)
  }
  console.timeEnd('challenge03')
  console.log(`submit ${wrongPasswords[41]}`)
}); 

function checkEncryptionPolicy(line) {
  const { min, max } = getMinMaxValue(line)
  const letter = getLetter(line)
  const password = getPassword(line)

  const occurrences = password.split('').filter((_letter) => letter === _letter).length;

  const isValid = occurrences >= min && occurrences <= max;

  return !isValid ? password : null;
}

function getMinMaxValue(line) {
  const values = line.split(" ")[0].split("-")

  return {
    min: Number(values[0]), 
    max: Number(values[1])
  }
}

function getLetter(line) {
  return line.split(" ")[1].split(":")[0]
}

function getPassword(line) {
  return line.split(" ")[2]
}

