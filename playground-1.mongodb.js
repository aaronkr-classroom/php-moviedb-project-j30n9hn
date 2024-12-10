/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('dju-php');

// Insert a few documents into the sales collection.
db.getCollection('movieDB').insertMany([
  { '_id': 1, 'title': '타이타닉', 'genre': '로맨스', 'myear': new Date('2014-03-01T08:00:00Z'), 'price': 10000, 'photo': './photo/타이타닉.jpg' },
  { '_id': 2, 'title': '쿵푸팬더', 'genre': '판타지', 'myear': new Date('2014-03-01T09:00:00Z'), 'price': 9000, 'photo': './photo/쿵푸팬더.jpg' },
  { '_id': 3, 'title': '라라랜드', 'genre': '로맨스', 'myear': new Date('2014-03-15T09:00:00Z'), 'price': 9000, 'photo': './photo/라라랜드.jpg' },
]);

