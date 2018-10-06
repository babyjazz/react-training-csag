import React from 'react';
import Box from './box';
import {
    connect
} from 'react-redux';


class TwoComponent extends React.Component {
    state = {
        price: 300,
        name: 'hello world'
    }

    incPrice = () => {
        this.setState({
            price: this.state.price + 1,
            name: 'hello csag'
        })
    }

    render() {
        const {
            price,
            name
        } = this.state;
        return (
            <div className='main'>
                <h1>Two Component</h1>
                <br />
                <h1>{this.props.myWallet.balance}</h1>
                {/* <h1>{ this.state.price }</h1> */}
                <button onClick={this.incPrice} >Inc price</button>
                <Box showprice={price} name={name} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myWallet: state.myWallet
    }
}

export default connect(mapStateToProps)(TwoComponent)
