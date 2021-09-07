// 배열 접근 index
const INDEX = {
    cloth: 0,
    category: 1,
}

// 중복 제거 함수
const getDeDuplicationArray = (array, index) => {
    const isIndexExist = index ? true : false

    const source = isIndexExist && array.map((elem) => elem[index])

    const removedDuplication = isIndexExist ? new Set(source) : new Set(array)

    return [...removedDuplication]
}

// 입력: clothesItem [[ 아이템, 카테고리 ], ...]

// 출력: 조합 문제
//    : 각 카테고리의 아이템 중복 제거 -> 아이템을 각 카테고리에서 1개 추출해 중복되지 않는 조합의 수
//     (적어도 한개의 옷은 입어야 함)?
//    : 조합 문제 -> 각 옷 카테고리에서 1개 추출 및 0개 추출하는 경우 -> 마지막 경우의 수 중 옷을 하나도 입지 않은 경우 (0, 0, 0, ...) 1개를 빼주기

// 전략:
//    : 카테고리와 clothes 중복을 제거한 배열을 만들기
//    : 카테고리 별로 clothes를 담은 배열 제작 후 배열의 길이에 1을 더해서 곱한후 마지막에 1뺴주기

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

// 테스트 bulk 데이터

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

// 문제: https://programmers.co.kr/learn/courses/30/parts/12077 해쉬 위장 \
