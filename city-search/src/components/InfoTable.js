import React from "react"
import Cell from "./Cell"


export default function InfoTable(props){
    return (
       props.data.map((datum) => <Cell info={datum} key={datum.RecordNumber}/>)
    )
}
