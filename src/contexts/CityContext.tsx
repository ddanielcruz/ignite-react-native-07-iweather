import { createContext, ReactNode, useEffect, useState } from 'react'

import {
  getStorageCity,
  saveStorageCity,
} from '@/libs/asyncStorage/cityStorage'
import { CityProps } from '@/services/getCityByNameService'

type CityContextProviderProps = {
  children: ReactNode
}

type CityContextDataProps = {
  cityIsLoading: boolean
  city: CityProps | null
  handleChanceCity: (city: CityProps) => void
}

export const CityContext = createContext<CityContextDataProps>(
  {} as CityContextDataProps,
)

export function CityProvider({ children }: CityContextProviderProps) {
  const [cityIsLoading, setCityIsLoading] = useState(true)
  const [city, setCity] = useState<CityProps | null>(null)

  async function handleChanceCity(selectedCity: CityProps) {
    setCityIsLoading(true)

    await saveStorageCity(selectedCity)
    setCity(selectedCity)

    setCityIsLoading(false)
  }

  useEffect(() => {
    setCityIsLoading(true)

    getStorageCity()
      .then((data) => setCity(data))
      .finally(() => setCityIsLoading(false))
  }, [])

  return (
    <CityContext.Provider
      value={{
        city,
        cityIsLoading,
        handleChanceCity,
      }}
    >
      {children}
    </CityContext.Provider>
  )
}
