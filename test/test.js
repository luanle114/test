var arr = [0, 34, 55, 72, 13, 44];
function _2ndMax(arr){
    let max1 = arr[0];
    let max2 = arr[1];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max1){
            max2 = max1;
            max1 = arr[i];
        }
        else if(arr[i] > max2){
            arr[i] = max2;
        }
    }
    return max2;
}
console.log(_2ndMax(arr));

var bai2 = 132;
function _doixung(bai2){
    let temp = bai2.toString();
    temp1 = temp.split('');
    for(let i = 0; i < temp1.length-1; i++){
        temp2 = temp1.join('');
    }
    if(temp2 == bai2){
        return true;
    }
    else{
        return false;
    }
}

console.log(_doixung(bai2));