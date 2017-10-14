var LRUCache = (function () {
    function LRUCache(capacity) {
        this._items = [];
        this._capacity = capacity;
    }
    LRUCache.prototype.add = function (value) {
        if (this._items.length >= this._capacity)
            this.removeOldest();
        this._items.push(value);
    };
    LRUCache.prototype.removeOldest = function () {
        this._items.shift();
    };
    LRUCache.prototype.getItems = function () {
        return this._items;
    };
    LRUCache.prototype.remove = function (key) {
        this._items.splice(this._items.indexOf(key), 1);
        delete this._items[key];
    };
    LRUCache.prototype.getCapacity = function () {
        return this._capacity;
    };
    LRUCache.prototype.getSize = function () {
        return this._items.length;
    };
    return LRUCache;
}());
var lru = new LRUCache(5);
lru.add(1);

