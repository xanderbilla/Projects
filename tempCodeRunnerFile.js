function generateId() {
    const date = new Date();
    const randomId = Math.random().toString(36).substring(2, 15);
    const timestamp = date.getTime().toString();
    return `${randomId}${timestamp}`;
}
  
console.log(generateId());