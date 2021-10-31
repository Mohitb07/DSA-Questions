const combinations = (arr) => {
    if(arr.length === 0) return [ [] ];

    const firstElement = arr[0];
    const restElements = arr.slice(1)
    
    const combinationsWithoutFirst = combinations(restElements);
    const combinationsWithFirst = []

    combinationsWithoutFirst.forEach(combination => {
        const combWithFirst = [firstElement, ...combination];
        combinationsWithFirst.push(combWithFirst)
    })

    return [...combinationsWithoutFirst, ...combinationsWithFirst]

}

console.log(combinations([1, 2, 3]))