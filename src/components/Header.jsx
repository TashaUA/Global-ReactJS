import React from 'react';
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
import img from "../images/logo.png";
import uiActions from "../store/ui/actions";

const Header = (props) => {

    const openDialog = (type) => {
        props.openDialog(type);
    };

    return (
        <>
            <Link to="/" className="logo"><img src="/images/logo.png" width="193" height="30" alt="Netflix"/></Link>
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