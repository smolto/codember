const fs = require('fs')
const path = require('path') 

const filePath = path.join(__dirname, './data/users_db.txt')

function getUserdata(user) {
  const fileSplitted = user.split(',');

  return {
    id: fileSplitted[0],
    username: fileSplitted[1],
    email: fileSplitted[2],
    age: fileSplitted[3],
    location: fileSplitted[4],
  }
}


function checkUserFields(user) {
  const {id, username, email, age, location} = getUserdata(user);

  const isIdValid = /^[a-zA-Z0-9]+$/g.test(id);
  const isUsernameValid = /^[a-zA-Z0-9]+$/g.test(username);
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const isAgeValid = age && !isNaN(age);
  const isLocationValid = location && /^[a-zA-Z\s]+$/g.test(location);
  if(isAgeValid && isEmailValid && isUsernameValid && isIdValid && isLocationValid) {
    return null;
  }

  return username.split('')[0];
}

fs.readFile(filePath, 'utf8', function(err, data){ 
  console.time('challenge05')
  const fileContent = data.split(/\r?\n/)
  let allFirstUserNameLetter = ''

  for(const line of fileContent) {
    const firstLetter = checkUserFields(line);

    if(firstLetter) allFirstUserNameLetter = `${allFirstUserNameLetter}${firstLetter}`
  }
  console.timeEnd('challenge05')
  console.log(`submit ${allFirstUserNameLetter}`)
}); 
