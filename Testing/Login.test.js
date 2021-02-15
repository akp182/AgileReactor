const User = require('../models/User');
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

describe('User Schema test anything', () => {
    // the code below is for insert testing
    it('Add User testing anything', () => {
        const user = {
            'email': 'shusan',
            'password': 'tandukar',
            'name': 'shusan'
        }

        return User.create(user)
            .then((pro_ret) => {
                expect(pro_ret.email).toEqual('shusan');
            });
    });
    //test for update
    it('to test the update', async () => {

        return User.findOneAndUpdate({ email: 'shusan' }, { $set: { email: 'test' } })
            .then((pp) => {
                expect(pp.password).toEqual('tandukar')
            })
    });
    // // the code below is for delete testing
    it('to test the delete product is working or not', async () => {
        const status = await User.deleteMany();
        // const status = await User.deleteOne({ _id: "5f19438de3070525782ebac7" });
        expect(status.ok).toBe(1);
    });
})