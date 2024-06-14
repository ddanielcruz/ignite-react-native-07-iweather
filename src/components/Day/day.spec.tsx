import { render } from '@testing-library/react-native'

import clearDay from '@/assets/clear_day.svg'

import { Day } from '.'

describe('Component: Day', () => {
  it('should render a day', async () => {
    const { queryByText } = render(
      <Day
        data={{
          day: '01/01',
          min: '21°',
          max: '36°',
          icon: clearDay,
          weather: 'Céu Limpo',
        }}
      />,
    )

    expect(queryByText('01/01')).toBeTruthy()
  })
})
