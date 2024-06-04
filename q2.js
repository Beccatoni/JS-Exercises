/*
Write a JS program to get the extension of a filename.
*/

const getFileExtension = (str) => {
    let indexOfPoint = str.lastIndexOf('.');
    return str.slice(indexOfPoint);
}

console.log(getFileExtension('Rebecca.txt.js'));