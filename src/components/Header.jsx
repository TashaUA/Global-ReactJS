import React, {useState} from 'react';
import Button from "./Button";
import img from "../images/logo.png";
import AddEditMovieDialog from "../containers/AddEditMovieDialog";

export default function Header() {

    const [openEdit, setOpenEdit] = useState(false);

    const handleClose = () => {
        setOpenEdit(false);
    };

    const openDialog = () => {
        setOpenEdit(true);
    };

    return (
        <>
            <a href="#" className="logo"><img src={img} alt="Netflix"/></a>
            <div className="add-movie">
                <Button classModifier="button--grey" onClick={openDialog} title="+ Add Movie"/>
            </div>
            <AddEditMovieDialog openEdit={!!openEdit} onCloseDialog={handleClose}/>
        </>
    );
}