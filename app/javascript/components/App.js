import React from 'react'
import Home from "./Home"
import Auctions from "./Auctions"
import AuctionNew from "./AuctionNew"
import { Route, Switch } from "react-router-dom"

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/auctions" component={Auctions} />
                    <Route exact path="/auction_new" component={AuctionNew} />
                </Switch>
            </div>
        )
    }
}

export default App