import { useEffect } from 'react';

export const useClickOutside = (
    ref: React.RefObject<HTMLElement>,
    handler: (event: MouseEvent | TouchEvent) => void,
) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (!(ref.current as Node) || (ref.current as Node).contains(event.target as Node)) {
                return;
            }
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
};
