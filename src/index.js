function linkedList() {
    let node = nodeFactory();
    function append(value) {
        let temp = node;
        while (temp.nextNode !== null) {
            if (temp.value === null) {
                temp.value = value;
            }
            temp = temp.nextNode;
        }
        if (temp.nextNode === null && temp.value === null) {
            temp.value = value;
        } else {
            temp.nextNode = nodeFactory();
            temp.nextNode.value = value;
        }
    }

    function prepend(value) {
        let temp = nodeFactory();
        temp.value = value;
        temp.nextNode = node;
        node = temp;
    }

    function toString() {
        let str = '';
        let temp = node;
        if (temp.value !== null) {
            do {
                if (str === '') {
                    str += `( ${temp.value} )`;
                } else {
                    str += ` -> ( ${temp.value} )`;
                }
                temp = temp.nextNode;
            } while (temp !== null);
            str += ' -> null';
        }
        console.log(str);
    }

    function size() {
        let temp = node;
        let count = 0;
        if (!temp) {
            return 0;
        }
        do {
            if (temp) {
                count++;
            }
            temp = temp.nextNode;
        } while (temp !== null);
        return count;
    }

    function head() {
        return node;
    }

    function tail() {
        let temp = node;
        let tail;
        while (temp !== null) {
            tail = temp;
            temp = temp.nextNode;
        }
        return tail;
    }

    function at(index) {
        let temp = node;
        let counter = 0;

        if (index < 0 || typeof index !== 'number') {
            return 'Error: invalid index';
        }

        while (true) {
            if (temp === null) {
                return 'Error: there is no Node at this index';
            }
            counter++;
            if (counter === index + 1) {
                return temp;
            }
            temp = temp.nextNode;
        }
    }
    return { append, prepend, toString, size, head, tail, at };
}

function nodeFactory() {
    let value = null;
    let nextNode = null;
    return { value, nextNode };
}

let list = linkedList();
console.log(list.size());
list.append('Charlie');
list.append('David');
list.append('Karl');
list.prepend('Amine');
list.prepend('Aymane');
list.append('Simo');
console.log(list.size());
list.toString();
console.log(list.at(3));
