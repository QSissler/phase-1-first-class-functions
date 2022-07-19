function receivesAFunction(cb){
   return cb();
}

function returnsANamedFunction(){
     return function namedFunction(){
        console.log("This is a Named Function");
     }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("This returns an anonymous function");
    }
}