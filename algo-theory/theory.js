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

//again trees

class Node1 {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null
    }
}

const sumTreeLevels = (tree) => {
    if (tree === null) {
        return null
    }

    let left = sumTreeLevels(tree.left)
    let right = sumTreeLevels(tree.right)

    return  tree.value + left + right
}

const root1 = new Node1(1)
root1.left = new Node1(2)
root1.right = new Node1(3)
root1.left.left = new Node1(4)
root1.left.right = new Node1(5)
root1.right.right = new Node1(6)

sumTreeLevels(root1)


// new task Linked list
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head

    while (current !== null) {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }
}

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

reverseLinkedList(head)


//=============================================================================================================
// new easy task recursion

const countElements = (arr, target) => {
    if (arr.length === 0) {
        return 0;
    }

    const [first, ...rest] = arr

    const countRest = countElements(rest, target);

    const countCurrent = first === target ? 1 : 0

    return countRest + countCurrent
}

console.log(countElements([2, 4, 6, 2, 8, 2], 2));

//=============================================================================================================
// new easy task trees
// найти максимальную глубину дерева

function maxDepth(root) {
    if (root === null) {
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

//=============================================================================================================
// 6 kyu Binary Tree Compare
// сравнить деревья, если одинаковые - true

function compare(a, b) {
    // If both nodes are null, they are considered equal
    if (a === null && b === null) {
        return true;
    }

    // If one of the nodes is null or their values are not equal, they are not equal
    if (a === null || b === null || a.value !== b.value) {
        return false;
    }

    // Recursively compare the left and right subtrees
    const leftEqual = compare(a.left, b.left);
    const rightEqual = compare(a.right, b.right);

    // Return true only if both subtrees are equal
    return leftEqual && rightEqual;
}


























