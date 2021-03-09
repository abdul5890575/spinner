let spinnerArray = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];
let time = 0;

for(let i = 0; i < spinnerArray.length; i++) {  
    time += 300; 
    setTimeout(() => {
    process.stdout.write(spinnerArray[i]);
  }, time);
}
