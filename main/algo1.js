const INDEX = {
    cloth: 0,
    category: 1,
}

const getDeDuplicationArray = (array, index) => {
    const isIndexExist = index ? true : false

    const source = isIndexExist && array.map((elem) => elem[index])

    const removedDuplication = isIndexExist ? new Set(source) : new Set(array)

    return [...removedDuplication]
}

function solution(clothesItems) {
    const categories = getDeDuplicationArray(clothesItems, INDEX.category)

    const clothes = []

    categories.forEach((categories) => {
        const arr = []
        clothesItems.forEach((cloth) => {
            if (cloth[INDEX.category] === categories) {
                arr.push(cloth[INDEX.cloth])
            }
        })
        arr.length !== 0 && clothes.push(arr)
    })

    const deDuplicationcClothes = getDeDuplicationArray(clothes)

    const answer =
        deDuplicationcClothes.reduce((acc, curr) => {
            const length = curr.length
            return acc * (length + 1)
        }, 1) - 1

    return answer
}

const bulk = [
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
]

const bulk2 = [
    ["crowmask", "face"],
    ["bluesunglasses", "face"],
    ["smoky_makeup", "face"],
]

console.log(solution(bulk), solution(bulk2))
