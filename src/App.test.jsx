import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import axios from 'axios'
import App from './App'

// The app reads trips from venture_backend (localhost:8000); stand in for it here.
vi.mock('axios')

const trips = [
  { id: 1, name: 'Spring break', destination: 'Berlin', description: 'Museums', guidelines: [1] },
  { id: 2, name: 'Weekend hike', destination: 'Prague', description: 'Trails', guidelines: [] },
]

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  )
}

beforeEach(() => {
  axios.get.mockResolvedValue({ data: trips })
})

afterEach(() => {
  vi.clearAllMocks()
})

test('shows the navbar and the trip list from the backend', async () => {
  renderAt('/')
  expect(screen.getByText('Venture')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Add a Trip' })).toHaveAttribute('href', '/createTrip')
  expect(screen.getByText(/Are you planning an adventure/)).toBeInTheDocument()
  expect(await screen.findByText(/Spring break/)).toBeInTheDocument()
  expect(screen.getByText(/Weekend hike/)).toBeInTheDocument()
  expect(axios.get).toHaveBeenCalledWith('http://localhost:8000/trips')
})

test('links to guidelines only for trips that have them', async () => {
  renderAt('/')
  const links = await screen.findAllByRole('link', { name: 'Travel Guidelines' })
  expect(links).toHaveLength(1)
  expect(links[0]).toHaveAttribute('href', '/guidelines/1')
})

test('renders the create-trip form on /createTrip', () => {
  renderAt('/createTrip')
  expect(screen.getByText(/Trip Info/)).toBeInTheDocument()
  expect(screen.getByLabelText('Title:')).toBeRequired()
  expect(screen.getByLabelText('Destination:')).toBeRequired()
})
