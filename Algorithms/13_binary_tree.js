class BinaryTree {
    constructor() {
        this.root = null//инициализируем пустым значением корневой элемент
    }

    add(value) {//функция добавления элементов в дерево
        if (!this.root) {//проверка - если в корневом элементе ничего нет
            this.root = new TreeNode(value)//создаем корень
        } else {//если в корне есть значение
            let node = this.root//создаем переменную, которую проинициализируем значением корневого узла
            let newNode = new TreeNode(value)//создаем новый узел, которые будем добавлять в дерево
            while (node) {//в цикле крутимся до тех пор, пока нода != пустому значению
                if (value > node.value) {//проверяем, если значение больше, то в правое поддерево
                    if (!node.right) {//если правого поддерева нет, то
                        break//остановим цикл
                    }
                    node = node.right
                } else {//если меньше - в левое
                    if (!node.left) {
                        break
                    }
                    node = node.left//присваиваем текущему узлу правое поддерево
                }
            }//после этого цикла мы имеем ноду, которая находится в самом низу дерева
            if (value > node.value) {//делаем проверку значения с этой ноды
                node.right = newNode//и определяем на какую ветку будет ссылаться
            } else {
                node.left = newNode
            }
        }
    }

    print(root = this.root) {//функция для визуализации этого дерева в консоли
        if (!root) {
            return true
        }
        console.log(root.value)
        this.print(root.left)
        this.print(root.right)
    }
}

class TreeNode {
    constructor(value) {//создали конструктор, который параметром принимат значение
        this.value = value//значчение сохраняем внутри объекта
        this.left = null//создаем ссылку на элемент в левой части дерева
        this.right = null//создаем ссылку на элемент в правой части дерева
    }
}

const tree = new BinaryTree()
tree.add(5)
tree.add(2)
tree.add(6)
tree.add(2)
tree.add(1)
tree.print()