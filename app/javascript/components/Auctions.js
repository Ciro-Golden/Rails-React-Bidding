import React from 'react'
import axios from 'axios'

class Auctions extends React.Component {
    state = {
        auctions: []
    };

    componentDidMount() {
        axios
            .get("/api/auctions")
            .then(response => {
                this.setState({ auctions: response.data.auctions });
            })
    }

    renderAllAuctions = () => {
        return (
            <ul>
                {this.state.auctions.map(auction => (
                    <li key={auction}>{auction}</li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                {this.renderAllAuctions()}
            </div>
        )
    }
}
export default Auctions