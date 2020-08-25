const spinner = () => {
  spinArr = ['\r|   ', "\r/   ", "\r-   ", "\r\\   ", '\r|   ', "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\n"]
  delay = 100;
  for (let i = 0; i < spinArr.length; i++) {
    setTimeout(() => {
      process.stdout.write(spinArr[i])
    }, delay)
    delay += 200;
  }
  };
spinner()