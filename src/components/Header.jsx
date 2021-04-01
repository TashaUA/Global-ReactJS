import React, {useState} from 'react';
import Button from "./Button";
import img from "../images/logo.png";
import AddEditMovieDialog from "../containers/AddEditMovieDialog";
import uiActions from "../store/ui/actions";
import {connect} from "react-redux";

const Header = (props) => {

    const openDialog = (type) => {
        props.openDialog(type);
    };

    return (
        <>
            <a href="#" className="logo"><img src={img} alt="Netflix"/></a>
            <div className="add-movie">
                <Button classModifier="button--grey" onClick={() => openDialog('edit')} title="+ Add Movie"/>
            </div>
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        openDialog: (type) => { dispatch(uiActions.openDialog(type)); }
    };
};

export default connect(null, mapDispatchToProps)(Header);