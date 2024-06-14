import { render } from '@testing-library/react-native'

import { Input } from './index'

describe('Component: Input', () => {
  it.each([undefined, false])(
    'should render without activity indicator if is isLoading is %s',
    async (value) => {
      const { queryByTestId } = render(<Input isLoading={value} />)
      const element = queryByTestId('activity-indicator')
      expect(element).toBeFalsy()
    },
  )

  it('should render with activity indicator if is isLoading is true', async () => {
    const { queryByTestId } = render(<Input isLoading />)
    const element = queryByTestId('activity-indicator')
    expect(element).toBeTruthy()
  })
})
