import React from 'react';
import { render } from '@testing-library/react';
import TagMultiSelect from '../TagMultiSelect';
import { useTagContext, useTagTransformer } from '../../hooks';

jest.mock('../../hooks/useTagContext');
jest.mock('../../hooks/useTagTransformer');

describe('src/pages/createOrEditTask/form/__test__/TagMultiSelect.test.js', () => {
  describe('TagMultiSelect', () => {
    // Arrange
    const allTags = [{ id: 1 }, { id: 2 }];

    beforeEach(() => {
      useTagContext.mockReturnValue(allTags);
      useTagTransformer.mockReturnValue(allTags);
    });

    it('should display TagMultiSelect', async () => {
      // Arrange
      const input = {
        onChange: jest.fn(),
        value: 'value'
      }
      // Act
      const actual = render(<TagMultiSelect tags={allTags} input={input} />);
     
      // Assert
      expect(useTagContext).toBeCalledTimes(1);
      expect(useTagTransformer).toBeCalledTimes(3);
      expect(actual).toMatchSnapshot();
    });
  });
});
