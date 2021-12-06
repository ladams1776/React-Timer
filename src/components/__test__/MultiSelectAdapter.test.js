import { render } from '@testing-library/react';
import MultiSelectAdapter from '../MultiSelectAdapter';

jest.mock('react-multi-select-component', () => {
  return () => <div data-testid="multi-select" >MultiSelect</div>;
});

describe('src/components/__test__/MultiSelectAdapter.test.js', () => {
  describe('MultiSelectAdapter', () => {
    it('should render MultiSelectAdapter', () => {
      // Arrange & Act
      const actual = render(<MultiSelectAdapter input={{ value: 'hi' }} />);

      // Assert
      expect(actual.getByTestId('multi-select')).toBeInTheDocument();
      expect(actual).toMatchSnapshot();
    });
  });
});
