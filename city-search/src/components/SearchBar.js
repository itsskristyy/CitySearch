import React from 'react';
import ReactDOM from 'react-dom';


//checks to see if it is a valid city no matter the case
function cityName(str)
{
    return /^[A-Za-z\s]+$/.test(str);
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
        event.preventDefault()
        if (!cityName(this.state.value)) {
            alert(this.state.value + ' is not a valid city.');
        }
        this.props.setCurSearch(this.state.value)

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label style = {styles.inputButton}>
                    City Name:  
                    <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Spring Field' style={styles.inputField}/>
                    <input type="submit" value="Search" style={styles.submitBtn}/>
                </label>

            </form>
        );
    }
}
export default SearchBar

const styles = {
    inputButton:{
        fontFamily:"sans-serif",
        color: 'black',
        fontSize: "17px",
        paddingTop: "50px",
        paddingBottom: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    
     },
     inputField:{
        marginLeft: "10px",
        marginRight: "10px",
        paddingLeft: "5px",
        height: "20px",
        borderRadius: "2px",
        border: '0.1rem solid grey'
     },
     submitBtn:{
        height: "25px",
        cursor: "pointer"
     }
   }
