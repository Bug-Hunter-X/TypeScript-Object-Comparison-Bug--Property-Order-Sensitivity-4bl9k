function compareObjects(obj1: any, obj2: any): boolean {
  // Check if the objects are the same object
  if (obj1 === obj2) {
    return true;
  }

  // Check if both objects are null or undefined
  if (!obj1 || !obj2) {
    return false;
  }

  // Check if objects have different prototypes
  if (Object.getPrototypeOf(obj1) !== Object.getPrototypeOf(obj2)) {
    return false;
  }

  // Check object keys 
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    // Check if keys exist in both objects and are equal
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}