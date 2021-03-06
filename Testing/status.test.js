const Profile = require('../models/Profile');
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

describe('Profile Schema test anything', () => {
    // the code below is for insert testing
    it('Add Profile testing anything', () => {
        const profile = {
            'company': 'Softwarica',
            'status': 'Manager',
            'skills': 'Testing',

        };

        return Profile.create(profile)
            .then((pro_ret) => {
                expect(pro_ret.status).toEqual('Manager');
            });
    });
    // test for update
    it('to test the update', async () => {

        return Profile.findOneAndUpdate({ status: 'Manager' }, { $set: { status: 'Manager1' } })
            .then((pp) => {
                expect(pp.status).toEqual('Manager')
            })
    });
    // the code below is for delete testing
    it('to test the delete product is working or not', async () => {
        const status = await Profile.deleteMany();
        // const status = await Profile.deleteOne({ _id: "5f19438de3070525782ebac7" });
        expect(status.ok).toBe(1);
    });
})