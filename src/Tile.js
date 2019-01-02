import React from "react"
import { styles } from "./styles"

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: styles.columns
        }
    }

    onEnter() {
        this.setState({style: styles.columnsHover})
    }

    onLeave() {
        this.setState({style: styles.columns})
    }

    render() {
        return (
            <img src={require("./resources/images/" + this.props.imageNumber + "/" + this.props.imagePart + ".jpg")} 
                style={this.state.style}
                onMouseEnter={() => this.onEnter()}
                onMouseLeave={() => this.onLeave()} />
        )
    }
}

export default Tile