import 'jest-dom/extend-expect'
import { render, cleanup } from 'react-testing-library';
import logo from './logo';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe('Logo', () => {
	it('should have class if argument provided', () => {
	const { getByTestId } = render(logo('custom'));

	let logoNode = getByTestId('logo')
	expect(logoNode).toHaveClass('logo_custom')

	})
	
	it('should not have class if argument empty', () => {
	const { getByTestId } = render(logo());

	let logoNode = getByTestId('logo')
	expect(logoNode.classList.length).toBe(1)

	})
})
