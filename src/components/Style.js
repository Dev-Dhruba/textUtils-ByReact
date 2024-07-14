import React from 'react'

export default function Style(props) {

    let parentStyle = {
        width : '25%',
        height : '40px',
        backgroundColor : '#E2BBE9',
        margin : '10px auto',
        borderRadius : '7px',
        display : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
    }

    // let colorPicker = {
    //     display : 'flex',
    //     alignItems: 'center'
    // }

    let elements = {
        height : '30px',
        width : '30px',
        borderRadius: '50%',
        border: 'none'
    }

    let element1 = {
        backgroundColor: '#1b262c'
    }

    let element2 = {
        backgroundColor: '#7469b6'
    }

    let element3 = {
        backgroundColor: 'white'
    }

    let element4 = {
        backgroundColor: '#49108b'
    }

    let element5 = {
        backgroundColor: '#850f8d'
    }

    return (

        <div style={{...parentStyle,...props.style} } >
            <button style={{...elements, ...element1}} onClick={props.changeColor1}></button>
            <button style={{...elements, ...element2}} onClick={props.changeColor2}></button>
            <button style={{...elements, ...element3}} onClick={props.changeColor3}></button>
            <button style={{...elements,...element4}} onClick={props.changeColor4}></button>
            <button style={{...elements, ...element5}} onClick={props.changeColor5}></button>
        </div>
  )
}
