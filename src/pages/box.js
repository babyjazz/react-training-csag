import React from 'react';


export default class Box extends React.Component {

    render() {
        return (
            <div className='box'>
                <h1 style={{ color: 'white' }}>{this.props.showprice}</h1>
                <h1 style={{ color: 'white' }}>{this.props.name}</h1>
            </div>
        )
    }
}
