const selectionSort = (array) => {
    for(let i = 0; i < array.length - 1; i++){
        let min = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[min] ){
                min = j;
            }            
        }
        if(min !== i){
            // SWAPING THE INDEX VALUES
            let temp;
            temp = array[i];
            array[i] = array[min];
            array[min] = temp; 
        }
    }

    return array
}


console.log(selectionSort([51,61,6,167,17]))