import useEventListener from "hooks/useEventListener";

const useSaveListener = (formName:string) => {
    let isControlPressed = false;
    useEventListener('keydown', ({ key }: any) => {
        if (key === 'Control') {
            isControlPressed = true;
        } else {
            if (isControlPressed && key === 's') {
                document.getElementById(formName)
                    ?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
            }
            isControlPressed = false;
        }

    });
};

export default useSaveListener;