const frisby = require('frisby');
const Joi = frisby.Joi;

const REST_API_BASE_URL = process.env.BACKEND_URL ?? "http://script-manager-backend-uat.us-east-1.elasticbeanstalk.com";
if (!REST_API_BASE_URL) {
  throw new Error("REST_API_BASE_URL environment variable is not set");
}
const SCRIPT_API_EXT = '/api/scripts';

describe("Basic backend health check test", () => {
  it("If backend server is up and running", async () => {
    return frisby
      .get(REST_API_BASE_URL)
      .expect('status', 200)
  });
});

describe("Backend smoke test", () => {
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
