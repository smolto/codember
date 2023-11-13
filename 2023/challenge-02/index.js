function miniCompiler(input) {
  const splitInput = input.split("")
  let value = 0
  let showValue = ""

  for (let i = 0; i < splitInput.length; i++) {
    const action = splitInput[i]
    if(action === '#') value = value + 1
    if(action === '@') value = value - 1
    if(action === '*') value = value * value
    if(action === '&') {
      showValue = `${showValue}${value}`
      if(i === splitInput.length - 1) console.log(`submit ${showValue}`);
    }
  }
}

const input = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"
console.time('challenge02')

miniCompiler(input)

console.timeEnd('challenge02')