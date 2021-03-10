import React from "react";
import Dialog from "../components/Dialog";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";

const genresOptions = {
    action: 'Action',
    adventure: 'Adventure',
    comedy: 'Comedy'
};

class AddEditMovie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isEdit: !!props.entry,
            id: 0,
            title: '',
            poster_path: '',
            release_date: '',
            movie_url: '',
            genres: [],
            overview: '',
            runtime: '',
        };
    }

    componentDidMount() {
        const {entry = []} = this.props;
        this.setState({...entry});
    }

    static getDerivedStateFromProps(props, current_state) {
        if (props.entry && props.entry.id && current_state.id !== props.entry.id) {
            return {
                ...props.entry,
                isEdit: !!props.entry,
            }
        }
        return null
    }

    onSubmit = (data) => {
        return this.state.isEdit
            ? updateUser(data)
            : createUser(id, data);
    };

    createUser = (data) => {
        return false;
    };

    updateUser = (id, data) => {
        return false;
    };

    handleInput = (event) => {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        return this.props.openEdit ? (
                <Dialog onClose={this.props.onCloseDialog}
                        title={this.state.isEdit ? 'Edit movie' : 'Add movie'}>
                    <form className="form form__add-movie">
                        <FormInput label="Title" name="title" value={this.state.title}
                                   handleInput={this.handleInput}/>
                        <FormInput label="Release Date" name="release__date" value={this.state.release_date}
                                   type="date" handleInput={this.handleInput}/>
                        <FormInput label="Movie url" name="poster_path" value={this.state.poster_path}
                                   handleInput={this.handleInput}/>
                        <FormSelect label="Genre" name="genres" current={this.state.genres[0]} options={genresOptions}
                                   />
                        <FormInput label="Overview" name="overview" value={this.state.overview}
                                   handleInput={this.handleInput}/>
                        <FormInput label="Runtime" name="runtime" value={this.state.runtime}
                                   handleInput={this.handleInput}/>
                        <div className="form__actions">
                            <a href="#" className="form__button form__button--reset" onClick={() => this.props.onCloseDialog('edit')}>Reset</a>
                            <a href="#" className="form__button"
                               onClick={this.onSubmit}>{this.state.isEdit ? 'Save' : 'Submit'}</a>
                        </div>
                    </form>
                </Dialog>
        ) : null;
    }
}

export default AddEditMovie
