import React, {useState} from 'react';
import Button from "./Button";
import img from "../images/logo.png";
import AddEditMovieDialog from "../containers/AddEditMovieDialog";

export default function Header() {

    const [openEdit, setOpenEdit] = useState(0);

    const handleClose = () => {
        setOpenEdit(false);
    };

    const openDialog = () => {
        setOpenEdit(true);
    };

    return (
        <>
            <a href="#" className="logo"><img src={img} alt="Netflix" /></a>
            <Button onClick={openDialog} title="+ Add Movie"/>
            <AddEditMovieDialog openEdit={!!openEdit} onCloseDialog={handleClose}/>
        </>
    );
}