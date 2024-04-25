import { render, screen } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
	test('test value', () => {
		render(<Select value="123" />);
	});
});
