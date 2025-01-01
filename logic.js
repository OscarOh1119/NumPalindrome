/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString();
    
    let arr1 = Array.from(y);
    
    let arr2= Array.from(y);
    
    arr2.reverse();
    
    

    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);


};