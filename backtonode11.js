
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs')
, filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    console.log(data)
});

//*var textFilesLoader = require('text-files-loader')
//textFilesLoader.setup({
//    recursive: false,
//    matchRegExp: /\.txt/
//})//

//textFilesLoader.load('/myDirectory', function (err, indexedFiles) {
//    console.log(indexedFiles)
//})
//


const stages = ["Manual Review", "Phone Interview", "background Check", "Document Signing"]



const applicantsEmails = [""];
function create(email){

}

function advance(){

}

function decide(){
    
}


function isInArray(days, day) {
    return days.indexOf(day.toLowerCase()) > -1;
}

function define1(CREATE, ADVANCE, DECIDE, STATS){};
function DEFINE2(ManualReview, PhoneInterview, BackgroundCheck,DocuentsSgning){
  //  if create = 0 then write 0;



    return stagenames};
//..define("Manual Review" )
//DEFINE2 ManualReview BackgroundCheck DocumentSigning

//let's create the fact that every input line is a command and learn how to read every input line first and then as a command, and then work on everything as a command
