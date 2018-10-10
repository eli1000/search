// requireing fs and path modules
var fs = require('fs');
var path = require('path');
// creating 2 arguments for user input
//ext is initialized with "."
var ext="."+process.argv[2];
var filename=process.argv[3];

 function fileNameFinder(dir){
 var files=fs.readdirSync(dir);
 for(var i in files){
   // creating list of files directoriy 
     var fileDir=path.join(dir,files[i]);
     //creating variable for extantion and filename in directoriy 
     var filename1=path.parse(files[i]).name;
     var ext1=path.parse(files[i]).ext;
     var base= filename1+ext1;
// conditions statement to determin input arguments status
      if(filename+ext==base){  
        console.log(fileDir);
       return;
     }
     else if(typeof(filename)!=typeof(base)){
        console.log( " USAGE: node search[EXT][TXTE]" );
        return;
     }
     else{
        console.log(" file was not found");
        return;
     }
    
  }
 }
 // calling the function
 fileNameFinder(__dirname);

