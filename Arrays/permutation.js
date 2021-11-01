const permutation = (string) => {
    if(string.length === 0) return [ [] ];

    const firstElement = string[0]
    const restElement = string.slice(1)

    const permutationWithoutFirst = permutation(restElement)
    const allPermutation = []

    permutationWithoutFirst.forEach(perm => {
        for(let i = 0; i<=perm.length; i++){
            const permWithFirst = [...perm.slice(0, i), firstElement, ...perm.slice(i)]
            allPermutation.push(permWithFirst)
        }
    })

    return allPermutation
}

console.log(permutation('abc'))