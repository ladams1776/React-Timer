import React from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { TEN_SECONDS } from 'utils/constants';
import useTimeout from 'hooks/useTimeout';
import { setFlashMessageAction } from 'redux/actionCreators/actions';
import { useFlashMessageSelectors } from 'redux/selectors/useFlashMessageSelectors';
import './FlashMessage.css';

const FlashMessage = () => {
  const { message, status } = useFlashMessageSelectors();
  const isSuccess = status === 'success';
  const isInfo = status === 'info';
  const isError = status === 'error';
  const dispatch = useDispatch();

  useTimeout(() => {
    dispatch(setFlashMessageAction('success', null));
  }, TEN_SECONDS, message);


  return (
    !message || (
      <div
        className={cn('flashMessage', {
          'fade-out': !status.error,
          success: isSuccess,
          info: isInfo,
          error: isError,
        })}
        data-testid="flash-message"
        onClick={() => dispatch(setFlashMessageAction('success', null))}
      >
        <div
          className={cn('flashMessageIcon', {
            'glyphicon glyphicon-ok-sign': isSuccess,
            'glyphicon glyphicon-exclamation-sign': isError,
            'glyphicon glyphicon-info-sign': isInfo,
          })}
        />

        <div className="flashMessageContent">{message}</div>

        <div className={cn('flashMessageCancel', 'glyphicon glyphicon-remove-circle')} />
      </div>
    )
  );
};

export default FlashMessage;
