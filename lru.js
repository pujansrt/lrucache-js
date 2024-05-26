var LRUCache = (function () {
    function LRUCache(capacity) {
        this.items = [];
        this.capacity = capacity;
    }
    LRUCache.prototype.add = function (value) {
        if (this.items.length >= this.capacity)
            this.removeOldest();
        this.items.push(value);
    };
    LRUCache.prototype.removeOldest = function () {
        this.items.shift();
    };
    LRUCache.prototype.getItems = function () {
        return this.items;
    };
    LRUCache.prototype.remove = function (key) {
        this.items.splice(this.items.indexOf(key), 1);
        delete this.items[key];
    };
    LRUCache.prototype.getCapacity = function () {
        return this.capacity;
    };
    LRUCache.prototype.getSize = function () {
        return this.items.length;
    };
    return LRUCache;
}());