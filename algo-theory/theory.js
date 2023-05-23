//Допустим, дизайнер нарисовал интересный макет, согласно которому мы должны показывать пользователю
// два рекламных баннера в сетке, состоящей из колонок по 20 пикселей каждая. Нам нужно всего лишь
// выбирать два разных по ширине баннера, которые идеально вписываются в сетку на экране браузера пользователя,
// и их выводить. Возможных баннеров разных размеров — сотни, а различных экранов у пользователей — тысячи!
//
// Самое наивное решение — поочерёдно брать пару баннеров из всех возможных
// и смотреть на сумму их ширины. Берём их, если они подходят. А если не подходят —
// идём дальше и сравниваем следующие

const findBanners = (banners, userWidth) => {
    let leftPointer = 0;
    let rightPointer = banners.length - 1;

    while (leftPointer < rightPointer) {
        const bannersWidth = banners[leftPointer].width + banners[rightPointer].width

        if (bannersWidth === userWidth) {
            return [banners[leftPointer], banners[rightPointer]]
        }

        if (bannersWidth > userWidth) {
            rightPointer--
        } else {
            leftPointer++
        }
    }
}

//Задача: найти, сколько раз встречается самый частый элемент в объединении двух отсортированных по возрастанию массивов. Элементы могут повторяться.
//
// Примеры:

function countMostFrequent(firstArray, secondArray) {
    const newArr = [...firstArray, ...secondArray]
    const counter = {}

    for (const number of newArr) {
        counter[number] = counter[number] ? counter[number] + 1 : 1
    }

    let maxValue = 0;

    for (const value of Object.values(counter)) {
        if (value > maxValue) {
            maxValue = value
        }
    }

  return maxValue;

}
countMostFrequent([1, 2, 2, 3], [0, 2, 4, 4])
countMostFrequent([], [0, 0])