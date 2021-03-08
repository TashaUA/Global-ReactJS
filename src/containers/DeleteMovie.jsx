import React from "react";
import Dialog from "../components/Dialog";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import PropTypes from "prop-types";

class DeleteMovie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({show: true});
    };

    hideModal() {
        this.setState({show: false});
    };

    onSubmit(id) {
        return false;
    }

    render() {
        return (
            <>
                <a href="#" className="add-movie-button"
                   onClick={this.showModal}>Delete</a>
                <Dialog onClose={this.hideModal} show={this.state.show}
                        title="Delete movie">
                    <p>Are you sure you want to delete this movie?</p>
                    <a href="#" className="button button--right"
                       onClick={this.onSubmit}>Confirm</a>
                </Dialog>
            </>
        );
    }
}

export default DeleteMovie

DeleteMovie.propTypes = {
    id: PropTypes.number.isRequired,
};