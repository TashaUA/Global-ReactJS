import React from "react";
import Dialog from "../components/Dialog";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";

class AddEditMovie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            isEdit: !!props.entry,
            id: 0,
            title: '',
            poster_path: '',
            release_date: '',
            movie_url: '',
            genres: [],
            overview: '',
            runtime: '',
            genresOptions: {
                action: 'Action',
                adventure: 'Adventure',
                comedy: 'Comedy'
            }
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        const {entry = []} = this.props;
        this.setState({...entry});
    }

    showModal() {
        this.setState({show: true});
    };

    hideModal() {
        this.setState({show: false});
    };

    onSubmit(data) {
        return this.state.isEdit
            ? updateUser(data)
            : createUser(id, data);
    }

    createUser(data) {
        return false;
    }

    updateUser(id, data) {
        return false;
    }

    handleInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <>
                <a href="#" className="add-movie-button"
                   onClick={this.showModal}>{this.state.isEdit ? 'Edit' : '+ Add movie'}</a>
                <Dialog onClose={this.hideModal} show={this.state.show}
                        title={this.state.isEdit ? 'Edit movie' : 'Add movie'}>
                    <form className="form form__add-movie">
                        <FormInput label="Title" name="title" value={this.state.title}
                                   handleInput={this.handleInput}/>
                        <FormInput label="Release Date" name="release__date" value={this.state.release_date}
                                   type="date" handleInput={this.handleInput}/>
                        <FormInput label="Movie url" name="poster_path" value={this.state.poster_path}
                                   handleInput={this.handleInput}/>
                        <FormSelect label="Genre" name="genres" current={this.state.genres[0]} options={this.state.genresOptions}
                                   />
                        <FormInput label="Overview" name="overview" value={this.state.overview}
                                   handleInput={this.handleInput}/>
                        <FormInput label="Runtime" name="runtime" value={this.state.runtime}
                                   handleInput={this.handleInput}/>
                        <div className="form__actions">
                            <a href="#" className="form__button form__button--reset" onClick={this.hideModal}>Reset</a>
                            <a href="#" className="form__button"
                               onClick={this.onSubmit}>{this.state.isEdit ? 'Save' : 'Submit'}</a>
                        </div>
                    </form>
                </Dialog>
            </>
        );
    }
}

export default AddEditMovie
