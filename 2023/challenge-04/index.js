const fs = require('fs')
const path = require('path') 

const filePath = path.join(__dirname, './data/files_quarantine.txt')

function getFileNameUnchecksum(file) {
  const fileSplitted = file.split('-');

  return {
    fileName: fileSplitted[0],
    unchecksum: fileSplitted[1]
  }
}


function checkChecksum(file) {
  const {fileName, unchecksum} = getFileNameUnchecksum(file);

  const fileNameSplitted = fileName.split('');
  let dictionary = ''

  const correctCheckSum = fileNameSplitted.reduce((prev, curr) => {
    const valueIndex = prev.includes(curr);

    if(dictionary.includes(curr)) {
      return prev;
    }

    if(!valueIndex) {
      return `${prev}${curr}`;
    }

    dictionary = `${dictionary}${curr}`;

    return `${prev.replace(curr, '')}`;
  }, '');

  return correctCheckSum === unchecksum ? unchecksum : null;
  
}

fs.readFile(filePath, 'utf8', function(err, data){ 
  console.time('challenge04')
  const fileContent = data.split(/\r?\n/)
  const correctCheckSums= []

  for(const line of fileContent) {
    const checkSumResponse = checkChecksum(line);

    if(checkSumResponse) correctCheckSums.push(checkSumResponse)
  }
  console.timeEnd('challenge04')
  console.log(`submit ${correctCheckSums[32]}`)
}); 
