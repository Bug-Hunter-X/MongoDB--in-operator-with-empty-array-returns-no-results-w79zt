```javascript
function findDocuments(collection, field, values) {
  if (values.length === 0) {
    // Handle empty array case - return all documents
    return collection.find({});
  } else {
    return collection.find({ field: { $in: values } });
  }
}
```