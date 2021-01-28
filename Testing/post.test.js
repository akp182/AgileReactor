const Post = require('../models/Post');
const mongoose = require('mongoose');

const url = 'mongodb+srv://bikram:bikram212345@bikramcluster.3g2gb.mongodb.net/bikram?retryWrites=true&w=majority';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {

    await mongoose.connection.close();
});

describe('Post Schema test anything', () => {
    // the code below is for insert testing
    it('Add Post testing anything', () => {
        const post = {
            'user': '6023b1b40a94b63fb0c07033',
            'text': 'New Post',
            'name': 'shusan'
        };

        return Post.create(post)
            .then((pro_ret) => {
                expect(pro_ret.text).toEqual('New Post');
            });
    });
    // test for update
    it('to test the update', async () => {

        return Post.findOneAndUpdate({ text: 'New Post' }, { $set: { text: 'test' } })
            .then((pp) => {
                expect(pp.text).toEqual('New Post')
            })
    });

})