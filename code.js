// References:
// https://en.wikipedia.org/wiki/Pancake_sorting#:~:text=The%20original%20pancake%20problem,-The%20minimum%20number&text=The%20simplest%20pancake%20sorting%20algorithm,process%20for%20the%20remaining%20pancakes.
// https://javascript.plainenglish.io/pancake-sorting-in-javascript-ecc1486e7e33

function flip(array, n) {
    let hi = n;
    let lo = 0;
    if(hi > array.length-1){ hi = array.length-1; }
    while(lo <= hi){
        let tmp = array[lo];
        array[lo] = array[hi];
        array[hi] = tmp;
        lo++;
        hi--;
    }
    return array;
}

function pancakeSort(array) {
    let unsorted = array.length-1;
    while(unsorted >= 0){
        let maxInd = 0;
        for(let j = 0; j <= unsorted; j++) {
            if(array[j] > array[maxInd]) {
                maxInd = j;
            }
        }
        array = flip(array, maxInd);
        array = flip(array, unsorted);
        unsorted--;
    }
    return array;
}

