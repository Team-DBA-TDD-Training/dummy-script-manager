import express from 'express';
import request from 'supertest';
import Script from '../models/script';
import scriptRoutes from '../routes/scriptRoutes';


describe('Script controller', () => {
  const app = express();
  app.use('/api/scripts', scriptRoutes);
  let findSpy: jest.SpyInstance;

  describe('get scripts', () => {
    beforeEach(() => {
      findSpy = jest.spyOn(Script, 'find').mockResolvedValue([])
    })
    it('should return 200', async () => {
      const response = await request(app).get('/api/scripts')
      expect(response.status).toEqual(200)
      expect(findSpy).toHaveBeenCalled()
    })
  })

})