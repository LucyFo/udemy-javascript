function getSimpleNumber(number) {
    const result = []
    for (let i = 2; i < number; i++) {
        let isSimple = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isSimple = false
                break
            }
        }
        if (isSimple) {
            result.push(i)
        }
    }
    return result
}
console.log(getSimpleNumber(300))