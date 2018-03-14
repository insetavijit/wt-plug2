var 
    fs = require('fs'),
    dir = './tmp',
    colors = require("ansi-colors"),
    log = require('fancy-log'),
    pkg = require("./package.json")
;


/*\
| | this is the main setup file for createing this project :
| | just run - node app.js 
| | and we will do the rest for u ! 
| |settings :
\*/ var cmnd = {'createDir' : false , 'createFiles' : false , 'stopOnErr ' : false}

var  fileLs = [//21 files for now
    //files for root
    'functions.php',
    'README.md',
    
    //> common files :
    "./func/enqueue.php",
    // lib > scss    
    'asset/scss/adminStyle/adminStyle.scss',
    'asset/scss/fontStyle/fontStyle.scss',
    // lib > typeScripts    
    'asset/ts/adminScripts/adminScripts.ts',
    'asset/ts/fontScripts/fontScript.ts',
    //templates:
    'lib/home/wc.php',
    // doc > docration file's
    'doc/current/index.md',
    'doc/current/funcList.md',
    'doc/current/widgets.md',
    'doc/current/support.md',
    'doc/current/about.md',
    //.tmp > not to build | readymade html files for html formatting and editing those are temporary
    '.tmp/xyz.html',
    '.tmp/x.html',
    '.tmp/y.html',
    '.tmp/z.html'
];
// log( currentDir );
var dirLs = 
[ // 21 dir for now

    './node_modules',

    './asset',
    './asset/scss',
    './asset/scss/adminStyle',
    './asset/scss/fontStyle',
    './asset/ts',
    './asset/ts/adminScripts',
    './asset/ts/fontScripts',
    
    './inc',
    './inc/src',
    './inc/img',
    './inc/vendor',

    './func',
    
    'lib',
    'lib/home',

    './doc',
    './doc/resource',
    './doc/current',

    '.tmp'
];

var index = { 'newfile' : 0 , 'newdir' : 0 , 'dirExist' : 0 , 'fileExist' : 0 , 'errFile' :0 , 'errDir' : 0};

function indexProcess ( reffer ){
    
/*|
    reffer :
    new dir = 0
    exist dir = 2
    error on dir = 4 -- not present

    new file = 1
    exist file = 3
    error on file = 5
|*/
    switch(reffer) {
        case 0:
            index.newdir += 1;
            break;
        case 1:
            index.newfile += 1;
            break;
        case 2:
            index.dirExist += 1;    
            break;
        case 3:
            index.fileExist += 1;  
            break;
        case 4:
            index.errDir += 1;  
            break;
        case 5:
            index.errFile += 1;  
            break;
        default:
            break
    }
flyMsg(index.newfile + index.fileExist);

}

if(cmnd.createDir === true){
    for(var i=0 ; i< dirLs.length ; i++ ){
        if (!fs.existsSync(dirLs[i])){
            fs.mkdirSync(dirLs[i]);
            indexProcess (1) ;
        }else{
            indexProcess(2);
        }
    }
}
if(cmnd.createFiles === true ){
    if(cmnd["stopOnErr "] === true && cmnd.err > 0 ){
    }else{



        fileLs.forEach(function(filename) {
            if(!fs.existsSync( filename )){
                fs.writeFile(filename, '' , function(err) {
                    if(err){
                        indexProcess(5);
                    }else{
                        indexProcess (1) ;
                    }
                });
            }else{
                indexProcess(3);
            }
        });
    }
}

/*|Final Report :
| |
|*/function flyMsg( stat ) {
    if((index.fileExist + index.newfile) === fileLs.length){
        log(colors.blue     ("=<| say cheeese... |>============================"));
        log(colors.green    ("[ ✓ ] Total File Created : " + index.newfile));
        log(colors.yellow   ("[ ✓ ] file exist : " + index.fileExist ));        
        log(colors.green    ("[ ✓ ] Total dir Created : " + index.newdir ));
        log(colors.yellow   ("[ ✓ ] dir exist : " + index.dirExist ));
        log(colors.red      ("[ ✘ ] file create error  : " + index.errFile ));
        log(colors.blue    ("________________________________________________"));
        log(colors.cyan("[ シ ]") , 
                colors.cyan('sum files =') ,colors.bold(colors.yellow("[ "+(index.fileExist + index.newfile) +" ]")),
                colors.cyan('|| dirs =') ,colors.bold(colors.yellow("[ "+( index.dirExist + index.newdir )+" ]"))
                
            );
        log(colors.blue("==============================================="));
    }else{
    }
}
createEntrYpoint();
function createEntrYpoint( ){
    // log( 'Creating the entry point' );
    var 
        pwd = __dirname.split("/"),
        currentDir  = pwd[pwd.length - 1] 
    ;
    filename = currentDir + '.php' ;
    fileTemplate = '<?php \n/* \n' 
                        + '\tPlugin Name: ' + currentDir
                        + '\n\tPlugin URI :'
                        + '\n\tDescription : wp-plug a wordpress plugin seed'
                        + '\n\tVersion : 1.0.0.0'
                        + '\n\tAuthor: avijit sarkar (change it) '
                        + '\n\tAuthor URI : https://github.com/insetavijit/ (change it)'
                        + '\n\tSeed URI : ' + pkg.homepage
                        + '\n\tLicense : GPL'
                        + '\n\tText Domain : inset'
                    + '\n*/ \n ?>' ;


    if(!fs.existsSync( filename )){
        fs.writeFile(filename, fileTemplate , function(err) {
            if(err){
                log(colors.red('[ ✘ ] error : createing file  ') ,colors.bold(colors.yellow("[ "+( filename )+" ] create it yourself or run node app.js")));
            }else{
                log(colors.yellow('[ ✓ ] Entry point Created ') ,colors.bold(colors.green("[ "+( filename )+" ]")));
            }
        });
    }else{
        log(colors.yellow('[シ] file is already in ') ,colors.bold(colors.green("[ "+( filename )+" ]")));
    }
}