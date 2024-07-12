import React from 'react'

export default function Alert(props) {

    const toFirstUpper = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }

    return (
        props.alert && <div className='container'>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{textAlign : 'center', fontSize : '25px'}}>
                <strong>{toFirstUpper(props.alert.type)}</strong> {props.alert.message}
            </div>
        </div>
    )
}


