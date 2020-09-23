let i = 1


function spin() {
  if (i === 1) {
    process.stdout.write('\r|   ');
    i++;
    setTimeout(spin, 100 + i * 200);
  } else if (i === 2) {
    process.stdout.write('\r/   ');
    i++;
    setTimeout(spin, 100 + i * 200);
  } else if (i === 3) {
    process.stdout.write('\r-   ');
    i++;
    setTimeout(spin, 100 + i * 200);
  } else if (i === 4) {
    process.stdout.write('\r\\   ');
    i = 1;
    setTimeout(spin, 100 + i * 200);
  }
}

setTimeout(spin, 100 + i * 200);

