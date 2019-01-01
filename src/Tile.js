import React from "react"
import { styles } from "./styles"

class Tile extends React.Component {

    render() {
        return (
            <img src={require("./resources/images/" + this.props.imageNumber + "/" + this.props.imagePart + ".jpg")} style={styles.columns} />
        )
    }
}

export default Tile