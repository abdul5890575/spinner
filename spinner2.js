let spinnerArray = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];
let time = 0;

for(let i = 0; i < spinnerArray.length; i++) {  
    time += 3000; 
    // console.log('outside' + spinnerArray[i])
    let char = spinnerArray[i]
    setTimeout(() => {
    process.stdout.write(spinnerArray[i]);
    console.log('inside' + char)
  }, time);
}
//----------------------------------------------------------------------
// let interval=1000;
// let i = 0

// if(i < 5) {
//     setInterval(() => {
//         process.stdout.write(spinnerArray[i]);  /////does not stop the interval
//         //console.log(spinnerArray[i])
//         i++
//     }, interval);
// }
