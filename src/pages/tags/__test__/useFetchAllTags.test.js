
import { renderHook, act } from '@testing-library/react-hooks';
import useFetchAllTags from '../useFetchAllTags';

jest.mock('utils/api/useFlashMessageFetchApiData');

describe('src/pages/tags/TagsPage/__test__/useFetchAllTags.test.js', () => {
  describe('useFetchAllTags', () => {
    // Arrange
    const setTags = jest.fn();
    const fetchApiData = jest.fn();

    beforeEach(() => {
      setTags.mockReset();
      fetchApiData.mockReset();
    });

    it('should call fetchApiData and pass expected values to useFlashMessageFetchApiData', () => {
      // Arrange

      // Act
      const { result } = renderHook(() => useFetchAllTags(setTags));
      act(() => result.current);

      // Assert
      expect(fetchApiData).toHaveBeenCalledTimes(1);
    });
  });
});
