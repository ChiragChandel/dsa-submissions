class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();

        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    add(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        const node = this.cache.get(key);
        this.remove(node);
        this.add(node);
        return node.value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        } else if (this.cache.size >= this.capacity) {
            const lru = this.tail.prev;
            this.remove(lru);
            this.cache.delete(lru.key);
        }

        const newNode = new Node(key, value);
        this.add(newNode);
        this.cache.set(key, newNode);
    }
}
