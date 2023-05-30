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



//Связанные списки

// Создание узла связного списка
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Создание связного списка
let node1 = new Node('яблоко');
let node2 = new Node('банан');
let node3 = new Node('апельсин');

node1.next = node2;
node2.next = node3;

// Перебор элементов связного списка
let currentNode = node1;
while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
}
// выводит 'яблоко', 'банан', 'апельсин'



function deleteNode (head, value) {
    if (head === null) {
        return null
    }

    if (head.value === value) {
        return head.next
    }

    let currentNode = head
    let previousNode = null

    while (currentNode !== null) {
        if (currentNode.value === value) {
            previousNode.next = currentNode.next
            break
        }
        previousNode = currentNode
        currentNode = currentNode.next
    }

    return head
}

// Пример 1
let head = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};

deleteNode(head, 2);
// Ожидаемый результат: { value: 1, next: { value: 3, next: null } }



// задача на структуру данных - деревья

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null
    }
}

const calculateSum = (root) => {
    if (root === null) {
        return 0;
    }

    const leftSum = calculateSum(root.left);
    const rightSum = calculateSum(root.right);

    return root.value + leftSum + rightSum
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.right = new Node(6)

calculateSum(root)



















