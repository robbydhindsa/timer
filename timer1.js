let args = process.argv.slice(2);
let sortedArgs = args.sort(function(a, b) {
  return a - b;
})

for (i = 0; i < sortedArgs.length; i++) {
  if (sortedArgs[i] >= 0 || isNaN(sortedArgs[i] === false)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, sortedArgs[i] * 1000);
  }
}
