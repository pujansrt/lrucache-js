class LRUCache {
    capacity: Number;
    items: any = [];

    constructor(capacity: Number) {
        this.capacity = capacity;
    }

    add(value: any) {
        if (this.items.length >= this.capacity) this.removeOldest();
        this.items.push(value);
    }

    removeOldest() {
        this.items.shift();
    }

    getItems() {
        return this.items;
    }

    remove(key: any) {
        this.items.splice(this.items.indexOf(key), 1);
        delete this.items[key];
    }

    getCapacity() {
        return this.capacity;
    }

    getSize() {
        return this.items.length;
    }
}  