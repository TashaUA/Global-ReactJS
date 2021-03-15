import React, {useEffect} from 'react';

const useClickOutsideDialog = (ref, onClose) => {

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        };

        document.addEventListener("click", handleClickOutside);
        return (() => {
            document.removeEventListener("click", handleClickOutside);
        })
    })
};

export default useClickOutsideDialog;