```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({fieldName: 'someValue'}, {$inc: {counter: 1}});
```