const sentence = "hello there from lighthouse labs";

let start = 0;
for (const char of sentence) {
  
  setTimeout(() => {
    // print the char here
    process.stdout.write(char + "\n");
  }, start); // <= 1s delay to make it noticeable. Can dial it down later.
    start += 50;
}

