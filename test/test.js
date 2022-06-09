const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use (chaiHttp);

describe('Test the server', ()=>{
    it('should return status 200', (done)=>{
        chai.request(app)
        .get('/')
        .end((err, res)=>{
            expect(res).to.have.status(200);
            done();
        });
    });
});

// describe('Test POST/registration', ()=>{
//     it('should return registered user if registered with these fields', (done)=>{
//         const newRegistration = {
//             fullname: 'Kylie Namugga',
//             numberplate: 'UAB777T',
//             date: '12/12/12',
//             vehicletype: 'Personal car',
//             service: 'Parking',
//             servicefee: '0',
//             batteryprice: '1000',
//             tyreprice: '0',
//         };
//          chai.request(app)
//         .post('/registration')
//         .end((err, res)=>{
//             if(err) done(err);
//             done();
//         });
//     });
// });
