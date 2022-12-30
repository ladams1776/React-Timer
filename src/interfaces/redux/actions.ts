import { DELETE } from 'utils/constants';

export interface Action<T> {
    type: T;
};

export interface RequestAction<T> extends Action<T> {
    url: String;
    requestApi: Boolean;
};

export interface RequestPostPutAction<T> extends RequestAction<T> {
    body: any;
    method: string;
};

export interface RequestDeleteAction<T> extends RequestAction<T> {
    method: string;
    isFlash?: boolean;
    requestApi: boolean;
};

export interface RequestPostPutFlashAction<T> extends RequestPostPutAction<T> {
    isFlash: boolean;
    flashMessage: string;
};
