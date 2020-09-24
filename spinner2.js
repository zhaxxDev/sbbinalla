

const cycles = ['\r|', '\r/', '\r-', '\r\\'];


const spinner = (array) => {
    for (let i = 0; i < array.length; i++) {
      setTimeout(() => {
        process.stdout.write(array[i]);
      }, i * 200)
    } 
  }
spinner(cycles)
