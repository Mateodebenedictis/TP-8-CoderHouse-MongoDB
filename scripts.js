use ecommerce;

db.createCollection('mensajes');
db.createCollection('productos');

//1
db.mensajes.insertMany([
  { email: 'mateo@gmail.com', date: new Date(), text: 'Hola' },
  { email: 'juan@gmail.com', date: new Date(), text: 'Hola Mateo! Todo bien y vos?' },
  { email: 'juan@gmail.com', date: new Date(), text: 'Como la pasaste este fin de semana?' },
  { email: 'mateo@gmail.com', date: new Date(), text: 'La verdad que muy bien!' },
  { email: 'mateo@gmail.com', date: new Date(), text: 'Y vos?' },
  { email: 'juan@gmail.com', date: new Date(), text: 'Muy bien tambien!' },
  { email: 'juan@gmail.com', date: new Date(), text: 'Me fui a la costa con amigos, asi que estuvo a full' },
  { email: 'juan@gmail.com', date: new Date(), text: 'Che estoy muuy cansado!' },
  { email: 'juan@gmail.com', date: new Date(), text: 'Me voy a ir a dormir, nos vemos mañana!' },
  { email: 'mateo@gmail.com', date: new Date(), text: 'Dale, nos vemos!' },
]);

//2
db.productos.insertMany([
  { title: 'CPU', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/computer-512.png', price: 4990 },
  { title: 'Monitor', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/computer-512.png', price: 4550 },
  { title: 'Teclado', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/computer-512.png', price: 1570 },
  { title: 'Mouse', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/computer-512.png', price: 1020 },
  { title: 'Parlantes', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/computer-512.png', price: 2190 },
  { title: 'Webcam', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/computer-512.png', price: 1110 },
  { title: 'Router', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/computer-512.png', price: 3090 },
  { title: 'Impresora', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/computer-512.png', price: 4160 },
  { title: 'Disco SSD', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/computer-512.png', price: 4910 },
  { title: 'Disco HDD', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/computer-512.png', price: 2100 },
  { title: 'Memoria RAM', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/computer-512.png', price: 1620 },
]);

//3
db.mensajes.find().pretty();
db.productos.find().pretty();

//4
db.mensajes.estimatedDocumentCount();
db.productos.estimatedDocumentCount();

//5
//A)
db.productos.insertOne({ title: 'Notebook', thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/computer-512.png', price: 4999 });

//B)
//i)
db.productos.find({"price": {$lt: 1000}}).pretty()
//ii)
db.productos.find({ $and: [{"price": {$gte: 1000}}, {"price": {$lte: 3000}}]}).pretty()
//iii)
db.productos.find({"price": {$gt: 3000}}).pretty()
//iv)
db.productos.find({},{"title": 1, "_id": 0}).sort({"price": 1}).skip(2).limit(1).pretty()

//C)
db.productos.updateMany({}, {$set: {"stock": 100}})

//D)
db.productos.updateMany({"price": {$gt: 4000}}, {$set: {"stock": 0}})

//E)
db.productos.deleteMany({"price": {$lt: 1000}})

//6)
use admin;
db.createUser({ user : "pepe", pwd : "asd456", roles : [{ role : "read", db : "ecommerce" }] });
