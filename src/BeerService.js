import { firestore } from './fire';
// TODO: Firebase polling
export default {
    getBeers() {
        return fetch(window.location.origin + '/assets/beers.json')
        .then(response => response.json());
    },

    addNewBeersFromJSON() {
        this.getBeers().then(jsonBeers => {
            let beerDatabase = firestore.collection('beers');
            jsonBeers.forEach(beer => {
                beerDatabase.add({
                    name: beer.name,
                    brewery: beer.brewery,
                    abv: beer.abv
                }).then(docRef => {
                    console.log('Beer written with ID: ', docRef.id);
                });
            });
        });
    }
}