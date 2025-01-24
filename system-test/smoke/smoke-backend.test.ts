const frisby = require('frisby');
const Joi = frisby.Joi;
export const REST_API_BASE_URL =  process.env.BACKEND_URL;
export const SCRIPT_API_EXT = '/api/scripts';

describe("Tests health checks", () => {
  it("if backend server is up and running", async () => {
    return frisby
      .get(REST_API_BASE_URL)
      .expect('status', 200)
  });

  it("if GET API returns the required fields ", async () => {
    return frisby
      .get(REST_API_BASE_URL + SCRIPT_API_EXT)
      .expect('status', 200)
      .expect('jsonTypes', '*', { // Assert *each* object in array
        '_id': Joi.string().required(),
        'title': Joi.string().required(),
        'code': Joi.string().required(),
        'lastUpdatedAt': Joi.date().iso().required(),
      });
  });
});
