import React, { Component, Fragment } from 'react';
import Films from './films';
import Characters from './characters';



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            characters: [],
            moviesShown: false,
            charactersShown: false
        };
    };

    showMovies = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then((data) => {
                this.setState({ charactersShown: false })
                this.setState({ movies: data, moviesShown: true })
            })
    }

    showCharacters = () => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then((data) => {
                this.setState({ moviesShown: false })
                this.setState({ characters: data, charactersShown: true })
            });
    };

    render() {
        if (this.state.moviesShown === false && this.state.charactersShown === false) {
            return (
                <Fragment>
                    <div id='page-header'>
                        <div id='banner-title-card'>
                    <div id='banner'></div>
                    <h1>Welcome to Ghibli!</h1>
                    </div>
                    <div id='buttons' styles={{ margin: '20px' }}>
                        <button id='show-films' styles={{ margin: '10px' }} onClick={this.showMovies} >Show Films!</button>
                        <button id='show-Characters' styles={{ margin: '10px' }} onClick={this.showCharacters}>Show Characters!</button>
                    </div>
                    </div>
                    <hr/>
                    <div className='Feed-Container-empty' styles={{height: '1000px'}}>
                    <div id='feed'></div>
                    </div>
                </Fragment>
            )
        }

        else if (this.state.charactersShown === false && this.state.moviesShown === true) {
            return (
                <Fragment>
                    <div id='page-header'>
                    <div id='banner-title-card'>
                    <div id='banner'>
                    </div>
                    <h1>Welcome to Ghibli!</h1>
                    </div>
                    <div id='buttons' styles={{ margin: '20px' }}>
                        <button id='show-films' styles={{ margin: '10px' }} onClick={this.showMovies} >Show Films!</button>
                        <button id='show-Characters' styles={{ margin: '10px' }} onClick={this.showCharacters}>Show Characters!</button>
                    </div>
                    </div>
                    <hr/>
                        <div className='Feed-Container'>
                        <div id='feed'>
                            <br/>
                            <Films movies={this.state.movies} />
                        </div>
                    </div>
                </Fragment>
            )
        }

        else if (this.state.moviesShown === false && this.state.charactersShown === true) {
            return (
                <Fragment>
                    <div id='page-header'>
                    <div id='banner-title-card'>
                    <div id='banner'>
                    </div>
                    <h1>Welcome to Ghibli!</h1>
                    </div>
                    <div id='buttons' styles={{ margin: '20px' }}>
                        <button id='show-films' styles={{ margin: '10px' }} onClick={this.showMovies} >Show Films!</button>
                        <button id='show-Characters' styles={{ margin: '10px' }} onClick={this.showCharacters}>Show Characters!</button>
                    </div>
                    </div>
                    <hr/>
                    <div className='Feed-Container'>
                        <div id='feed'>
                            <br/>
                            <Characters characters={this.state.characters} />
                        </div>
                    </div>
                </Fragment>
            )
        }
    }
}


export default App;