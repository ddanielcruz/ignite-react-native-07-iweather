import { forecastSuccessResponse } from '@/tests/fixtures/forecast-success-response'

import { api } from './api'
import { getWeatherByCityService } from './getWeatherByCityService'

describe('Service: getWeatherByCityService', () => {
  it('should return city weather information', async () => {
    jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce({ data: forecastSuccessResponse })

    const response = await getWeatherByCityService({
      latitude: 123,
      longitude: 456,
    })
    expect(response).toHaveProperty('today')
  })
})
