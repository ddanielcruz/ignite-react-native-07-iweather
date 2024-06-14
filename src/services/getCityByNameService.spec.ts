import openWeatherSuccessResponse from '@/tests/fixtures/weather-success-response.json'

import { api } from './api'
import { getCityByNameService } from './getCityByNameService'

describe('Service: getCityByNameService', () => {
  it('should return city details', async () => {
    jest
      .spyOn(api, 'get')
      .mockResolvedValueOnce({ data: openWeatherSuccessResponse })
    const cities = await getCityByNameService('Passo Fundo')

    expect(cities).toHaveLength(1)
    expect(cities[0]).toEqual({
      id: '1',
      name: 'Passo Fundo, BR',
      longitude: 100,
      latitude: 200,
    })
  })
})
