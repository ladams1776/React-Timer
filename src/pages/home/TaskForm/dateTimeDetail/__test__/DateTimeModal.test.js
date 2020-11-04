import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DateTimeModal from '../DateTimeModal';

describe('src/pages/home/TaskForm/dateTimeDetail/__test__/DateTimeModal.test.js', () => {
    describe('DateTimeModal', () => {
        it('should render', async () => {
            // Arrange 
            const setIsShowingSpy = jest.fn();
            const expected = 'Date: 2020-10-28 11:25:30 pmMinutes: 100Close';

            // Act
            const target = render(<DateTimeModal dateTime={[{ date: '2020-10-29T03:25:30.167+00:00', time: '100' }]} setIsShowing={setIsShowingSpy} />);

            // Assert
            expect(screen.getByRole('button')).toHaveTextContent('Close');
            expect(target.container.querySelector('.modalContent')).toHaveTextContent(expected)
        });

        describe('Close button', () => {
            it('onClick', () => {
                // Arrange
                const setIsShowingSpy = jest.fn();

                // Act
                render(<DateTimeModal dateTime={[{ date: '2020-10-29T03:25:30.167+00:00', time: '100' }]} setIsShowing={setIsShowingSpy} />);

                fireEvent.click(screen.getByText('Close'));

                // Assert
                expect(setIsShowingSpy).toBeCalledWith(false);
            });
        });
    })
});