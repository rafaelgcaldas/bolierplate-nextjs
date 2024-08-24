import { render, screen } from '@testing-library/react'

import { Main } from './main'

describe('<Main />', () => {
  it('should render the reading', () => {
    render(<Main />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
