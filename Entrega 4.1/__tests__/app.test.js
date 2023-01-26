
const app = require("../app/routes/routes.js");


test('Comprovar endpoint getUser', () => {
  request(app)
  .get('./getUser')  
  .expect('Content-Type', /json/)
  .expect(201)
  .end((err, res) => {t.falsy(err, 'should not error')})

  })
