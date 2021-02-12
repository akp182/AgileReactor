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
