import { fireEvent, render } from '@testing-library/react-native'
import { View } from 'react-native'

import { CityProps } from '@/services/getCityByNameService'

import { SelectList } from './index'

const cities: CityProps[] = [
  { id: '1', name: 'Passo Fundo', latitude: 100, longitude: 200 },
  { id: '2', name: 'Porto Alegre', latitude: 600, longitude: 700 },
]

describe('Component: SelectList', () => {
  it('should render the list of cities', () => {
    const { queryByText } = render(
      <SelectList data={cities} onPress={jest.fn()} onChange={jest.fn()} />,
    )

    expect(queryByText('Passo Fundo')).toBeTruthy()
    expect(queryByText('Porto Alegre')).toBeTruthy()
  })

  it('should call onPress with the city when clicked', () => {
    const onPress = jest.fn()
    const { getByText } = render(
      <SelectList data={cities} onPress={onPress} onChange={jest.fn()} />,
    )

    const city = getByText('Passo Fundo')
    fireEvent.press(city)

    expect(onPress).toHaveBeenCalledWith(cities[0])
  })

  it('should render an empty list when there is no data', () => {
    const { getByTestId } = render(
      <SelectList data={[]} onPress={jest.fn()} onChange={jest.fn()} />,
    )

    const view: View = getByTestId('select-list-options')
    const children = view.props.children as Array<unknown>
    expect(children).toHaveLength(0)
  })
})
