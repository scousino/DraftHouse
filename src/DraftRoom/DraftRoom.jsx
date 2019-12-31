import React from 'react';
import { Button, List, Icon } from 'semantic-ui-react';

import './DraftRoom.css';
import BeerService from '../BeerService';

export default class DraftRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            draftBeers: [],
            upNext: 'Tapping the keg...',
            selectedBeers: [],
            displaySelected: false
        };
        this.handleBeerAdded = this.handleBeerAdded.bind(this);
    }

    componentDidMount() {
        BeerService.getBeers().then(data => {
            this.setState({ draftBeers: data, isLoading: false });
        })
    }

    render() {
        const { id, name } = this.props.match.params;
        if (this.state.isLoading) {
            return <h2>Loading...</h2>
        }
        return (
            <div style={{display: 'flex', flexGrow: 1}}>
                <div>
                    <ul>
                        <li>Spencer</li>
                        <li>Roger</li>
                        <li>Peter</li>
                    </ul>
                </div>
                <div style={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                    <div>    
                        <h2 style={{alignSelf: 'center'}}>Up Next: {this.state.upNext}</h2>
                        <button onClick={() => this.toggleSelectedBeerPanel(true)}>Check Tap</button>
                        <button onClick={() => this.addNewBeers()}>Tap New Kegs</button>
                    </div>
                    <BeerList onAddBeer={this.handleBeerAdded} beers={this.state.draftBeers} />
                </div>
                {this.getSelectedBeerPanel({showPanel: this.state.displaySelected, selectedBeers: this.state.selectedBeers})}
            </div>
        );
    }

    addNewBeers() {
        //BeerService.addNewBeersFromJSON();
    }

    getSelectedBeerPanel(data) {
        let panel;
        if (data.showPanel) {
            panel = (
            <div className="selected-list">
                <Icon className="selected-list-close" onClick={() => this.toggleSelectedBeerPanel(false)} name="close"/>
                <BeerList beers={data.selectedBeers}/>
            </div>
            )
        }

        return panel;
    }

    handleBeerAdded(beer) {
        let newBeerList = this.state.selectedBeers.concat(beer);
        this.setState({ selectedBeers: newBeerList });
    }

    toggleSelectedBeerPanel(display) {
        this.setState({ displaySelected: display });
    }
}

function BeerList(props) {
    // Don't display the add button if there is no callback provided for onAddBeer
    let displayAddButton = props.onAddBeer;
    const beerListItems = props.beers.map((beer, index) => {
        let beerData = beer;
        beerData['index'] = index;
        return <BeerListItem showButton={displayAddButton} onAddBeer={props.onAddBeer} beerInfo={beerData} key={index} />
    });
    return (
        <List divided>
            {beerListItems}
        </List>
    );
}

function BeerListItem(props) {
    return (
        <List.Item>
            <List.Content floated="right">
                {props.showButton && <Button onClick={() => props.onAddBeer(props.beerInfo)}>Add</Button>}
            </List.Content>
            <List.Content className="beer-name middle">
                {props.beerInfo.name}
            </List.Content>
        </List.Item>
    );
}