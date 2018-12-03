import React from 'react';

class Contador extends React.Component {

    static defaultProps = {
        tempo: 1000
    }

    state = {
        numero: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                numero: this.state.numero + 1
            })
        }, this.props.tempo);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <p>{this.state.numero}</p>
        );
    }

}

export default Contador;
