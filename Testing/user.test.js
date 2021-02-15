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
                expect(pro_ret.name).toEqual('shusan');
            });
    });
    // test for update
    it('to test the update', async () => {

        return Post.findOneAndUpdate({ name: 'shusan' }, { $set: { name: 'test' } })
            .then((pp) => {
                expect(pp.name).toEqual('shusan')
            })
    });
    // the code below is for delete testing
    it('to test the delete product is working or not', async () => {
        const status = await Post.deleteMany();
        // const status = await Post.deleteOne({ _id: "5f19438de3070525782ebac7" });
        expect(status.ok).toBe(1);
    });
})