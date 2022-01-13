import React from 'react'

function reformatKey(key){
    return key.replace(/([a-z](?=[A-Z]))/g, '$1 ')
}

export default function Cell(props){
    return (
        <div style={styles.cellStyle}>
            <p style={styles.titleStyle}>{props.info.LocationText}</p>
            <ul style={styles.tableStyle}>
                {Object.keys(props.info).map((k) => <li key={k} style={styles.rowStyle}>{`${reformatKey(k)}: ${props.info[k]}`}</li>)}
            </ul>
        </div>
    )
}

const styles = {
    cellStyle:{
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily:"sans-serif",
        display: "block",
        width: "500px"
     },
    titleStyle:{
        fontFamily:"sans-serif",
        fontSize: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "40px",
        backgroundColor: "#7D7D7D",
        color: "white",
        borderRadius: "5px 5px 0px 0px"
    },
    tableStyle:{
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "70px",
        paddingTop: "10px",
        paddingBottom: "10px",
        border: "1px solid grey",
        borderRadius: "0px 0px 5px 5px",
        marginTop: "-20px"


    },
    rowStyle:{
        textAlign: 'justify',
        padding: "3px",
        fontSize: "18px"
    }

}
