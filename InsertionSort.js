const insertionSort = (array) => {
    for(let i = 1; i < array.length; i++){
        let temp = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > temp){
            array[j+1] = array[j]

            j--;
        }
        // FILL THE VACANT SPACE WITH TEMP VALUE
        array[j+1] = temp;        
    }

    return array;
}

console.log(insertionSort([31,2,5,15,61,6,6]))