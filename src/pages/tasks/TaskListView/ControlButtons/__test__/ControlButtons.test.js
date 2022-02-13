import { render } from '@testing-library/react'
import ControlButtons from '../ControlButtons';

jest.mock('../NewButton/NewButton', () => {
  return () => <div className="NewButton">NewButton</div>
});
jest.mock('../DownloadButton/DownloadButton', () => {
  return () => <div className="DownloadButton">DownloadButton</div>
});
jest.mock('../HomeButton/HomeButton', () => {
  return () => <div className="HomeButton">HomeButton</div>
});
jest.mock('../UploadButton/UploadButton', () => {
  return () => <div className="UploadButton">UploadButton</div>
});

describe('src/pages/tasks/TaskListView/ControlButtons/__test__/ControlButtons', () => {
  describe('ControlButtons', () => {
    it('should display ControlButtons', () => {
      // Arrange
      const tasks = [{}];

      // Act
      const target = render(<ControlButtons tasks={tasks} />);
      const actual = target.getByTestId('control-buttons');

      // Assert
      expect(actual).toBeInTheDocument();
      expect(actual).toMatchSnapshot();
    });
  });
});
