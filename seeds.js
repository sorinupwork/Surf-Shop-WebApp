const faker = require('faker');
const Post = require('./models/post');

async function seedPosts() {
  await Post.remove({});
  for(const i of new Array(40)) {
    const post = {
      title: faker.lorem.word(),
      description: faker.lorem.text(),
      author: {
            "_id" : "5e9f3f4524257819b059e8b2",
            "username" : "ian"
          }
    }
    await Post.create(post);
  }
  console.log('40 new posts created');
}

module.exports = seedPosts;
