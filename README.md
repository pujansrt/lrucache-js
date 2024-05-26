# LRU Cache in JS
Very Simple LRUCache Implementation in JavaScript and TypeScript

## Use

```ts
const cache = new LRUCache(3);
cache.add(1);
cache.add(2);
cache.add(3);
cache.add(4);
console.log(cache.getItems()); // [2, 3, 4]
```
