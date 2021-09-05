//* 프로그래머스

// 문제 조건: 인풋 = [옷, 옷 카테고리] 배열로 주어짐
// 문제 조건: 출력 = [옷 조합 중복되지 않게 입기, 각 카테고리당 한개씩 입음]

const bulkData1 = [
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["yellowhat", "headgear"],
    ["green_turban", "headgear"],
    ["crowmask", "face"],
    ["bluesunglasses", "face"],
    ["smoky_makeup", "face"],
    ["smoky_makeup", "face"],
]

const bulkData2 = [
    ["crowmask", "face"],
    ["bluesunglasses", "face"],
    ["smoky_makeup", "face"],
    ["smoky_makeup", "face"],
]

const bulkData3 = [["안경", "존멋"]]
// interface object {
//     category: string;
//     item: string
// }

const INDEX_INFO = {
    cloth: 0,
    category: 1,
}

const getDeDuplicationArray = (array: string[][], index: number) => {
    const source = array.map((elem) => elem[index])
    const removedDuplication = new Set<string>(source)

    return [...removedDuplication]
}

function getClothesCombination(clothesItems: string[][]) {
    const categories: string[] = getDeDuplicationArray(
        clothesItems,
        INDEX_INFO.category
    )

    const clothes = categories.forEach((category) =>
        clothesItems.filter((item, index) => {
            if (item[INDEX_INFO.category] === category) {
                return item[INDEX_INFO.cloth]
            }
        })
    )
}
console.log(getClothesCombination(bulkData1))
