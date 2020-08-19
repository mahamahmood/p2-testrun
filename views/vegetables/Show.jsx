const React = require('react');

class Show extends React.Component {
    render() {
        // const name = this.props.fruit.name;
        // const color = this.props.fruit.color;
        // const readyToEat = this.props.fruit.readyToEat;
        // destructuring
        const { name, isGreen } = this.props.vegetable;
        return (
            <div>
                <h1>Fruits Show Page</h1>
                <p>Name: {name}</p>
                <p>{isGreen ? `It is green` : `Is not green`}</p>
            </div>
        )
    }
}

module.exports = Show;