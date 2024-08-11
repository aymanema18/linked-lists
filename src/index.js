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
    return { append, prepend, toString, size };
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
