import React from 'react';

export default class DraftRoom extends React.Component {
    render() {
        const { id, name } = this.props.match.params
        return (
            <div>Hey {name} welcome to Draft Room {id}!</div>
        );
    }
}