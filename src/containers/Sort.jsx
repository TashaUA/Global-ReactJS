import React, { useState } from "react";
import constants from "../utils/constants";
import SortItem from "../components/SortItem";

export default function Sort() {
    const [isOpened, setIsOpened] = useState(false);
    const [title, setTitle] = useState('Release date');

    const showMenu = () => {
      setIsOpened(isOpened ? false : true);
    };

    const selectSortTitle = (title) => {
        setTitle(title);
    };

    return (
        <div className="sort" onClick={showMenu}>
            <p className="sort__title">Sort by</p>
            <div tabIndex="0" className={isOpened ? 'sort__menu opened' : 'sort__menu'}>
                {title}
                <div className="sort__menu-dropdown">
                    {Object.entries(constants.SortBy).map(([key, name]) => (
                        <SortItem selectSortTitle={selectSortTitle} key={key} id={key} name={name}/>
                    ))}
                </div>
            </div>
        </div>
    );
}