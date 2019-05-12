import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup } from 'react-testing-library';
import {BrowserRouter as Router} from 'react-router-dom'
import logo from './logo';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe('Logo', () => {
	it('should have class if argument provided', () => {
	const { getByTestId } = render(<Router>{logo('custom')}</Router>);

	let logoNode = getByTestId('logo')
	expect(logoNode).toHaveClass('logo_custom')

	})
	
	it('should not have class if argument empty', () => {
	const { getByTestId } = render(<Router>{logo()}</Router>);

	let logoNode = getByTestId('logo')
	expect(logoNode.classList.length).toBe(1)

	})
})
