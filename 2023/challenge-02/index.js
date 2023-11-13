function miniCompiler(input) {
  const splitInput = input.split("")
  let value = 0

  for (const action of splitInput) {
    if(action === '#') value = value + 1
    if(action === '@') value = value - 1
    if(action === '*') value = value * value
    if(action === '&') process.stdout.write(`${value}`);
  }

  return value
}

const input = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"

miniCompiler(input)
console.log('')
