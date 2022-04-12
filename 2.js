fs = require('fs')
fs.readFile('2input', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  inputData = data.split('\n')
  let forward = 0
  let depth = 0
  // part 1
  // inputData.forEach(d => {
  //   let [direction, count] = d.split(' ')

  //   switch(direction) {
  //     case 'forward':
  //       forward = forward + Number(count)
  //       break
  //     case 'up':
  //       depth = depth - Number(count)
  //       break
  //     case 'down':
  //       depth = depth + Number(count)
  //       break
  //   }
  // })
  // part2
  let aim = 0
  inputData.forEach(d => {
    let [direction, count] = d.split(' ')

    switch(direction) {
      case 'forward':
        forward = forward + Number(count)
        depth = depth + (aim * Number(count))
        break
      case 'up':
        aim = aim - Number(count)
        break
      case 'down':
        aim = aim + Number(count)
        break
    }
  })
  console.log(forward * depth)
});
