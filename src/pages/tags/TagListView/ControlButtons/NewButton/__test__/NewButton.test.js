import React from 'react';
import NewButton from '../NewButton';
import { render } from '@testing-library/react';

jest.mock('hooks/useBrowserHistory');
jest.mock('redux/actionCreators/actions');
jest.mock('react-redux');

describe('src/pages/tags/TagsPage/TagListViewControlPanel/NewButton/__test__/NewButton.test.js', () => {
  describe('NewButton', () => {
    describe('NewButton', () => {
      it('should display NewButton', async () => {
        // Arrange & Act
        const { findByTestId } = render(<NewButton />);

        // Assert
        expect(await findByTestId('btn-new')).toMatchSnapshot();
      });
    });
  });
});