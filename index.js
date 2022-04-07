// Code yourconst solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, string){
    const matchDrive  = drivers.filter(function(value){
        if(string.toLowerCase() === value.toLowerCase()){
            return true
        }
        else {
            return false
        }
    })
 return matchDrive
}

function fuzzyMatch(drivers, string){
    const findMatch = drivers.filter(function(drivers){

        if(  string === drivers.slice(0, 2)){
          return (drivers);
        }
        else{
            return drivers === string
        }
    })
    return findMatch
}
 
function matchName(drivers, string){
    debugger;
    const ObjectName = drivers.filter(function(string){
     for(let object in drivers){
        if( string === drivers[0] ){
          return  drivers
        } else{
            return string === drivers[4]
        }
    }
    });
    return ObjectName
}
matchName(drivers, "Bobby");


