import { useBrowserHistory } from 'hooks';

export const URL = '/tag';

const useHomeOnClick = () => {
    const { push } = useBrowserHistory();

    return () => {
        sessionStorage.setItem('LOCATION', URL);
        push(URL);
    };
};

export default useHomeOnClick;