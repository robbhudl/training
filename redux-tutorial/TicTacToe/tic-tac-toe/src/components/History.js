import React from 'react';
import PropTypes from 'prop-types';

class History extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        move: PropTypes.bool.isRequired,
        desc: PropTypes.bool.isRequired,
        row: PropTypes.string.isRequired,
        col: PropTypes.string.isRequired,
    };

    render () {
        return (
        <li key={this.props.move}>
            <button onClick={this.props.onClick(this.props.move)}>{this.props.desc}</button> ({this.props.row},{this.props.col})
        </li>
        )
    };
}

export default History;
