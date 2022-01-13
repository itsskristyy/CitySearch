import React from 'react';

class Navbar extends React.Component {
  render(){
    return (
      <div>
      <nav className = "NavbarItems">
        <h1 style={styles.barlogo}> City Search </h1>
        </nav>
        <button style = {styles.buttonreset} onClick={() => window.location.reload(false)}>Click to reset the page!</button>
        </div>
    )
  }

}

export default Navbar;



const styles = {
    barlogo:{
        fontFamily:"sans-serif",
        textAlign: 'center',
        backgroundColor: '#000000',
        color: 'white',
        fontSize: "30px",
        paddingTop: "40px",
        paddingBottom: "40px",
        margin: -8,
     },

     buttonreset:{
       textAlign: 'center',
       fontSize: "13px",
       position: 'absolute',
       top: 75,
       alignSelf: 'flex-end',
       right: 40,
       height: "30px",
       fontSize: "15px"
      },


}
