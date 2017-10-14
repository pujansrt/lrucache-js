class LRUCache {
    _capacity: Number;
    _items: any = [];

    constructor(capacity: Number) {
        this._capacity = capacity;
    }
    add(value) {
        if(this._items.length >= this._capacity) this.removeOldest();
        this._items.push(value);
    }

    removeOldest(){
        this._items.shift();
    }

    getItems(){
        return this._items;
    }

    remove(key){
        this._items.splice(this._items.indexOf(key), 1);
        delete this._items[key];
    }

    getCapacity(){
        return this._capacity;
    }

    getSize(){
        return this._items.length;
    }
}

let lru = new LRUCache(5);
lru.add(1);

