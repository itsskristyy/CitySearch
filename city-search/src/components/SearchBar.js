import React from 'react';
import ReactDOM from 'react-dom';

//checks to see if it is a valid city no matter the case
function cityName(str)
{
    return /^[A-Za-z]+$/.test(str);
}

class SearchBar extends React.Component { //search function which handles if input = city name
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (!cityName(this.state.value)) {
            alert(this.state.value + ' is not a valid city.');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label style = {styles.inputButton}>
                    City Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

            </form>
        );
    }
}
export default SearchBar

const styles = {
    inputButton:{
        fontFamily:"Open Sans",

        color: 'black',
        fontSize: "15px",
        paddingTop: "50px",
        paddingBottom: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"


     },
   }
