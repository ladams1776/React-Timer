import React from 'react';
import { render } from '@testing-library/react'
import FlashMessage from '../FlashMessage';
import { useFlashMessageSelectors } from 'redux/selectors/useFlashMessageSelectors';
import { useDispatch } from 'react-redux';
import useTimeout from 'hooks/useTimeout';

jest.mock('redux/selectors/useFlashMessageSelectors');
jest.mock('react-redux');
jest.mock('hooks/useTimeout');

describe('src/components/FlashMessage/__test__/FlashMessage.test.js', () => {
     describe('FlashMessage', () => {
        it("should not show FlashMessage when 'message' is NOT present.", () => {
            // Arrange
            const expected = (<div class="flashMessageContent">this message should make the component show, since we have a message</div>);
            const context = {
                message: 'this message should make the component show, since we have a message',
                status: 'success'
            };
            useFlashMessageSelectors.mockReturnValue(context);

            // act
            const target = render(<FlashMessage />);

            // assert
            expect(target.getByTestId('flash-message')).toBeInTheDocument();
            expect(target).toMatchSnapshot();
        });

        // it('should show FlashMessage when message is present.', () => {
        //     // arrange
        //     context = {
        //         message: 'Success',
        //         success: false,
        //         info: false,
        //         error: false,
        //         resetFlashMessage: jest.fn()
        //     };

        //     // act
        //     wrapper = createWrapperWithContext(<FlashMessage />);

        //     // assert
        //     expect(wrapper.text()).toEqual('Success');
        // });

        // describe('onClick', () => {
        //     it("should call 'resetFlashMessage()', when 'FlashMessage' is clicked", () => {
        //         // arrange
        //         context = {
        //             message: 'Success',
        //             resetFlashMessage: jest.fn()
        //         };

        //         wrapper = createWrapperWithContext(<FlashMessage />);

        //         // act
        //         wrapper.props().onClick();

        //         // assert
        //         expect(context.resetFlashMessage).toHaveBeenNthCalledWith(1);
        //     });
        // });
    });
});
