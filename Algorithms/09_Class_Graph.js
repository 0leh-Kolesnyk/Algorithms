const classMates = {
    1: {
        id: 1,
        name: 'Маша',
        gender: 'female',
        friends: [2, 3, 4]
    },
    2: {
        id: 2,
        name: 'Вова',
        gender: 'male',
        friends: [1, 2]
    },
    3: {
        id: 3,
        name: 'Марина',
        gender: 'female',
        friends: [1, 2, 5]
    },
    4: {
        id: 4,
        name: 'Катя',
        gender: 'female',
        friends: [1, 5]
    },
    5: {
        id: 5,
        name: 'Андрей',
        gender: 'male',
        friends: [3, 4]
    }
};

class Graph { // создали класс
    constructor(adjList) { // внутри создали конструктор, параметром в который будем передавать существующий объект
        this.adjList = adjList || {}; //или создавать пустой объект
    }

    getList() { // метод получения списка
        return this.adjList; // возвращает наш объект
    }

    addVertex(vertex) { // создаем метод добавления вершины (узла, одноклассника и т.д.)
        // Для этого нужно: 1 - создать уникальный идентификатор для вершины
        // 2 - добваить вершину в общий список
        const vertexId = vertex.id || new Date().getTime(); // создаем ID вершины - либо ту, которую передали,
        // либо генерируем по дате в милисекундах (метод .getTime)
        this.adjList[vertexId] = {...vertex, id: vertexId} // добавляем вершину в список с индексом vertexId
    }

    // получает vertexId по имени .... имя???? провал....
    getVertexByName(name) {
        return Object.values(this.adjList).find(vertex => vertex.name === name);
    }

    // создаем метод добавления ребра (edge - ребро). Для этого: 1 - получаем на вход 2 вершины,
    // 2 - проверяем, есть ли идентификатор второй вершины в друзьях первой (для обеих),
    // 3 - если есть то не добавляем еще раз, если нету, то добавляем для обеих
    addEdge(firstVertexId, secondVertexId) { // параметром - Id вершин, с которыми нужно добавить в друзья (добавить ребро)
        if (!this.adjList[firstVertexId] || !this.adjList[secondVertexId]) { // проверяем, есдли в списке нет
            // хотя бы одного из элементов, между которыми нужно установить связь (ребро, дружбу...) то нет смысла выполнять
            return; // выход из метода
        }
        // проверяем, есть ли в вторая вершина в друзьях у добавляемой
        const isSecondVertexValidToAdd = this.adjList[firstVertexId].friends.indexOf(secondVertexId) === -1;
        // метод .indexOf()переберет все элементы массива и если там нет secondVertexId, то он вернет "-1"
        // тоже самое делаем для первой вершины:
        const isFirstVertexValidToAdd = this.adjList[secondVertexId].friends.indexOf(firstVertexId) === -1;
        if (isSecondVertexValidToAdd) { // проверяем если вторая вершина валидная для добавления, то мы
            this.adjList[secondVertexId].friends.push(firstVertexId); // this.(в пределах видимости этой функции)
            // adjList(в существующий объект)[secondVertexId](с номером Id)
            // friends (в поле с ключом).push(firstVertexId)(добавить в массив значения Id первой вершины)
        }
        if (isFirstVertexValidToAdd) {
            this.adjList[firstVertexId].friends.push(secondVertexId);
        }
    }
}

const classMatesGraph = new Graph(classMates); // создали экземпляр класса

classMatesGraph.addVertex({id: 6, name: 'Юля', gender: 'female', friends: []}) // передали номер 6 в id

classMatesGraph.addVertex({id: 7, name: 'Саша', gender: 'male', friends: []})

classMatesGraph.addEdge(classMatesGraph.getVertexByName('Юля').id, classMatesGraph.getVertexByName('Саша').id)
// получили Id по имени

console.log(classMatesGraph.getList()); // получили наш объект из нового экземпляра класса