import React from 'react';
import {
    connect
} from 'react-redux';


class Main extends React.Component {

    render() {
        return (
            <div className='main'>
                <h1>One Component</h1>
                <button onClick={() => this.props.setBalance(300)}>Inc balance</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myWallet: state.myWallet
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBalance: (balance) => {
            dispatch({
                type: 'INC',
                payload: balance
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
