import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavbarComponent from './NavbarComponent'
import Footer from './Footer'
import Home from '../pages/Home'
import SearchComponent from '../pages/Search'
import RandomTweetsComponent from '../pages/RandomTweets'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            userText: ''
        }
        this.getUserText = this.getUserText.bind(this)
    }

    getUserText = (text) => {
        console.log(text)
    }

    render() {
        return (
            <div className='main'>
                <NavbarComponent />
                <Switch >
                    <Route path="/" exact component={() => <Home />} />
                    <Route path='/search' exact component={() => <SearchComponent getUserText={this.getUserText} />} />
                    <Route path='/random' exact component={() => <RandomTweetsComponent />} />
                </Switch>
                <Footer />
            </div >
        )
    }
}
export default Main
