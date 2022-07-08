var balancedStringSplit = function(s) {
    let match=0
    let balance=0
    for(let ch of s){
        if(ch=="R") balance--
        if(ch=="L") balance++
        if(balance==0) match++
    }
    return match
};
console.log(balancedStringSplit("RLLLLRRRLR"))