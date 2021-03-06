// Алгоритм Дейкстра

const graph = {}
graph.a = {b: 2, c: 1} // каждой вершине графа соответствует объект,
graph.b = {f: 7}       // с указанием вершин в которую можно попасть и расстоянием до нее
graph.c = {d: 5, e: 2} //
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function shortPath(graph, start, end) {//создаем функцию, параметры: объект, начальная и конечная точки
    const costs = {}//создали объект - табличка, в которой будем хранить кратчайшие пути
    const processed = []//массив, в который будем добавлять узлы, которые мы уже проверили
    let neighbors = {}//объект для хранения соседних вершин рассматриваемого узла
    //заполним таблицу и заполнить те вершины, в которые мы можем добраться из стартовой точки значениями,
    // а все остальные заполнить бесконечно большим числом
    Object.keys(graph).forEach(node => { //Object.keys(graph) - преобразует объект в массив,
        // получаем список ключей (этот будут все вершины),
        // после чего итерируемся по ним (.forEach(node - перебирает массив по узлам (буквы))
        if (node !== start) { // проверяем: если текущая вершина (узел) итеррации (т.е. цикла) !== начальному
            // (поиск вершин, в которые мы можем попасть со стартовой)
            let value = graph[start][node] // то заполняем значения, т.е. стартовая вершина в эту табличку не добавляется
            // теперь получим значения: поскольку graph у нас объект, у которого есть поля,
            // где каждое поле это вершина, и каждое поле также является объектом,
            // у которого тоже есть какие-то значения, то это значение мы пытаемся получить у стартово  позиции,
            // т.е.в данном случае у вершины "а", и получить значение вершины либо "b" либо "с".
            // Затем это значение мы должны добавить в табличку, в которой будут храниться значения кратчайших путей.
            // Если value мы нашли, если из точки а в эту вершину есть путь,
            // то добавляем значение value, в ином случае добавляем бесконечно большое число
            costs[node] = value || 100000000 // т.е. получаем значения от а до остальных точек
            // и значения расстояний до них если есть, а если пути нет - то большое число - 100000000
        }
    })

    let node = findNodeLowestCost(costs, processed)//вызываем фун и получаем объект с мин стоимостью пути
    while (node) { // делаем цикл пока node не пустая, т.е. пока не обойдем весь graph
        const cost = costs[node] //на каждой итерации мы получаем стоимость текущей вершины
        neighbors = graph[node] //и те узлы в которые мы можем попасть из этой вершины мы присваиваем в тот объект,
        // который мы создавали для соседних вершин, для того, чтобы мы могли по ним проитеррироваться
        Object.keys(neighbors).forEach(neighbor => {//получаем ключи у этого объекта и с помощью цикла .forEach
            // итеррируемся по массиву, который вернет нам эта функция
            let newCost = cost + neighbors[neighbor]//перезаписываем новые полученные значения стоимости путти
            if (newCost < costs[neighbor]) { //проверяем: если новая стоимость < чем стоимость,
                // которая лежит в нашей таблице для этого узла,
                costs[neighbor] = newCost // то эту стоимость необходимо перезаписать
                // таким способом мы итерративно находим минимальные пути и перезаписываем их в нашей таблице
            }
        })
        processed.push(node)//вершину которую рассмотрели добавляем в массив обработанных вершин, после чего
        // при поиске новых вершин с минимальной стоимостью эта вершина учитываться не будет
        node = findNodeLowestCost(costs, processed) // ищем новую вершину
    }
    return costs // вернем объект с кратчайшими путями
}

// следующим этапом нам нужно найти вершину,
// в которую на данный момент мы можем попасть из точки "а" и путь в которую самый короткий,
// для этого реализуем функцию с названием найтиУзелМинимальнойСтоимостью
// параметрами в нее передаем объект со стоимостью всех путей costs, и массив с уже обработанными узлами

//ищем вершину в которую можем попасть из точки а и путь в которую самый короткий:
//создали функцию - найтиУзелСМинимальнойСтоимостью(параметры: объект со стоимостью всех путей,
// и массив с уже обработанными узлами)
function findNodeLowestCost(costs, processed) {
    let lowestCost = 100000000 // минимальное значение пути (по умолч большое число)
    let lowestNode; // узел, который будем возвращать с мин. значением
    Object.keys(costs).forEach(node => {//проводим итерацию по ключам объектов в которых мы храним стоимость путей
        let cost = costs[node]//получаем стоимость пути по ключу из объекта costs
        if (cost < lowestCost && !processed.includes(node)) {
            //если стоимость, которую мы получили < чем мин стоимость, и вершина не находится в массиве обработанных вершин,
            // то мы нашли новый объект у которого путь короче и обновляем переменные
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode //возвращаем вершину с мин стоимостью пути
}

console.log(shortPath(graph, 'a', 'g'))
// { b: 2, c: 1, d: 6, e: 3, f: 4, g: 5 } получили объект,
// который хранит кратчайшие пути от точки "а" до финальной точки