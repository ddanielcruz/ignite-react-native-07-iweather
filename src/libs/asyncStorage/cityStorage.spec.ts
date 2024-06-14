import { CityProps } from '@/services/getCityByNameService'

import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from './cityStorage'

const mockCity: CityProps = {
  id: 'any-id',
  name: 'any-name',
  latitude: 0,
  longitude: 0,
}

describe('Storage: CityStorage', () => {
  beforeEach(async () => {
    await removeStorageCity()
  })

  it('should return null when city is not stored', async () => {
    const city = await getStorageCity()
    expect(city).toBeNull()
  })

  it('should return the stored city', async () => {
    await saveStorageCity(mockCity)
    const city = await getStorageCity()
    expect(city).toEqual(mockCity)
  })

  it('should remove the stored city', async () => {
    await saveStorageCity(mockCity)
    await removeStorageCity()

    const city = await getStorageCity()

    expect(city).toBeNull()
  })
})
