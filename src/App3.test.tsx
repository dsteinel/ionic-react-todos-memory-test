import { render } from "@testing-library/react"
import App from "./App"

beforeEach(() => {
  jest.clearAllMocks()
  jest.resetModules()
})

test("renders without crashing", () => {
  const { baseElement } = render(<App />)
  expect(baseElement).toBeDefined()
})
