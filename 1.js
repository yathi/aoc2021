const fs = require('fs')


fs.readFile('1input', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  inputData = data.split('\n').map(x => Number(x))
  count = 0
  for (let i = 1; i < inputData.length; i++) {
    if (inputData[i] > inputData[i-1]) {
      count = count + 1
    }
  }
  count = 0
  for (let i = 3; i < inputData.length; i++) {
    middle = inputData[i-1] + inputData[i-2]
    currentWindow = inputData[i] + middle
    previousWindow = middle + inputData[i-3]
    if (currentWindow > previousWindow) {
      count = count + 1
    }
  }

  console.log(count)
})

