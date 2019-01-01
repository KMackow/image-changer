import React, { Component } from 'react';
import update from "react-addons-update"
import Tile from "./Tile"
import { styles } from "./styles"

class App extends Component {
  constructor() {
    super()
    this.state = { 
        currentImages: new Array(40).fill(0)
    }
}

newValue(key) {
    let newValue = this.state.currentImages[key];
    if (newValue === 3) {
        newValue = 0;
    }
    else {
        newValue += 1;
    }
    return newValue
    this.setState({
        currentImages: update(this.state.currentImages, {[key]: {$set: newValue}})
    })
}

handleClick(key) {
  let keys = []
  for (let i = 0; i < 3; i++) {
    let otherTile
    do {
        otherTile = (Math.floor(Math.random() * 40) + 1)
    }
    while ( otherTile === key)
    keys.push(otherTile)
  }
  this.setState({
    currentImages: update(this.state.currentImages, {
      [key]: {$set: this.newValue(key)},
      [keys[0]]: {$set: this.newValue(keys[0])},
      [keys[1]]: {$set: this.newValue(keys[1])},
      [keys[2]]: {$set: this.newValue(keys[2])}
    })
  })
}

  render() {
    return (
        <div>
            <div class="row">
                <span onClick={() => this.handleClick(0)}>
                    <Tile
                        imageNumber = {this.state.currentImages[0]}
                        imagePart = {1}
                    />
                </span>
                <span onClick={() => this.handleClick(1)}>
                    <Tile
                        imageNumber = {this.state.currentImages[1]}
                        imagePart = {2}
                    />
                </span>
                <span onClick={() => this.handleClick(2)}>
                    <Tile
                        imageNumber = {this.state.currentImages[2]}
                        imagePart = {3}
                    />
                </span>
                <span onClick={() => this.handleClick(3)}>
                    <Tile
                        imageNumber = {this.state.currentImages[3]}
                        imagePart = {4}
                    />
                </span>
                <span onClick={() => this.handleClick(4)}>
                    <Tile
                        imageNumber = {this.state.currentImages[4]}
                        imagePart = {5}
                    />
                </span>
            </div>
            <div class="row">
                <span onClick={() => this.handleClick(5)}>
                    <Tile
                        imageNumber = {this.state.currentImages[5]}
                        imagePart = {6}
                    />
                </span>
                <span onClick={() => this.handleClick(6)}>
                    <Tile
                        imageNumber = {this.state.currentImages[6]}
                        imagePart = {7}
                    />
                </span>
                <span onClick={() => this.handleClick(7)}>
                    <Tile
                        imageNumber = {this.state.currentImages[7]}
                        imagePart = {8}
                    />
                </span>
                <span onClick={() => this.handleClick(8)}>
                    <Tile
                        imageNumber = {this.state.currentImages[8]}
                        imagePart = {9}
                    />
                </span>
                <span onClick={() => this.handleClick(9)}>
                    <Tile
                        imageNumber = {this.state.currentImages[9]}
                        imagePart = {10}
                    />
                </span>
            </div>
            <div class="row">
                <span onClick={() => this.handleClick(10)}>
                    <Tile
                        imageNumber = {this.state.currentImages[10]}
                        imagePart = {11}
                    />
                </span>
                <span onClick={() => this.handleClick(11)}>
                    <Tile
                        imageNumber = {this.state.currentImages[11]}
                        imagePart = {12}
                    />
                </span>
                <span onClick={() => this.handleClick(12)}>
                    <Tile
                        imageNumber = {this.state.currentImages[12]}
                        imagePart = {13}
                    />
                </span>
                <span onClick={() => this.handleClick(13)}>
                    <Tile
                        imageNumber = {this.state.currentImages[13]}
                        imagePart = {14}
                    />
                </span>
                <span onClick={() => this.handleClick(14)}>
                    <Tile
                        imageNumber = {this.state.currentImages[14]}
                        imagePart = {15}
                    />
                </span>
            </div>
            <div class="row">
                <span onClick={() => this.handleClick(15)}>
                    <Tile
                        imageNumber = {this.state.currentImages[15]}
                        imagePart = {16}
                    />
                </span>
                <span onClick={() => this.handleClick(16)}>
                    <Tile
                        imageNumber = {this.state.currentImages[16]}
                        imagePart = {17}
                    />
                </span>
                <span onClick={() => this.handleClick(17)}>
                    <Tile
                        imageNumber = {this.state.currentImages[17]}
                        imagePart = {18}
                    />
                </span>
                <span onClick={() => this.handleClick(18)}>
                    <Tile
                        imageNumber = {this.state.currentImages[18]}
                        imagePart = {19}
                    />
                </span>
                <span onClick={() => this.handleClick(19)}>
                    <Tile
                        imageNumber = {this.state.currentImages[19]}
                        imagePart = {20}
                    />
                </span>
            </div>
            <div class="row">
                <span onClick={() => this.handleClick(20)}>
                    <Tile
                        imageNumber = {this.state.currentImages[20]}
                        imagePart = {21}
                    />
                </span>
                <span onClick={() => this.handleClick(21)}>
                    <Tile
                        imageNumber = {this.state.currentImages[21]}
                        imagePart = {22}
                    />
                </span>
                <span onClick={() => this.handleClick(22)}>
                    <Tile
                        imageNumber = {this.state.currentImages[22]}
                        imagePart = {23}
                    />
                </span>
                <span onClick={() => this.handleClick(23)}>
                    <Tile
                        imageNumber = {this.state.currentImages[23]}
                        imagePart = {24}
                    />
                </span>
                <span onClick={() => this.handleClick(24)}>
                    <Tile
                        imageNumber = {this.state.currentImages[24]}
                        imagePart = {25}
                    />
                </span>
            </div>
            <div class="row">
                <span onClick={() => this.handleClick(25)}>
                    <Tile
                        imageNumber = {this.state.currentImages[25]}
                        imagePart = {26}
                    />
                </span>
                <span onClick={() => this.handleClick(26)}>
                    <Tile
                        imageNumber = {this.state.currentImages[26]}
                        imagePart = {27}
                    />
                </span>
                <span onClick={() => this.handleClick(27)}>
                    <Tile
                        imageNumber = {this.state.currentImages[27]}
                        imagePart = {28}
                    />
                </span>
                <span onClick={() => this.handleClick(28)}>
                    <Tile
                        imageNumber = {this.state.currentImages[28]}
                        imagePart = {29}
                    />
                </span>
                <span onClick={() => this.handleClick(29)}>
                    <Tile
                        imageNumber = {this.state.currentImages[29]}
                        imagePart = {30}
                    />
                </span>
            </div>
            <div class="row">
                <span onClick={() => this.handleClick(30)}>
                    <Tile
                        imageNumber = {this.state.currentImages[30]}
                        imagePart = {31}
                    />
                </span>
                <span onClick={() => this.handleClick(31)}>
                    <Tile
                        imageNumber = {this.state.currentImages[31]}
                        imagePart = {32}
                    />
                </span>
                <span onClick={() => this.handleClick(32)}>
                    <Tile
                        imageNumber = {this.state.currentImages[32]}
                        imagePart = {33}
                    />
                </span>
                <span onClick={() => this.handleClick(33)}>
                    <Tile
                        imageNumber = {this.state.currentImages[33]}
                        imagePart = {34}
                    />
                </span>
                <span onClick={() => this.handleClick(34)}>
                    <Tile
                        imageNumber = {this.state.currentImages[34]}
                        imagePart = {35}
                    />
                </span>
            </div>
            <div class="row">
                <span onClick={() => this.handleClick(35)}>
                    <Tile
                        imageNumber = {this.state.currentImages[35]}
                        imagePart = {36}
                    />
                </span>
                <span onClick={() => this.handleClick(36)}>
                    <Tile
                        imageNumber = {this.state.currentImages[36]}
                        imagePart = {37}
                    />
                </span>
                <span onClick={() => this.handleClick(37)}>
                    <Tile
                        imageNumber = {this.state.currentImages[37]}
                        imagePart = {38}
                    />
                </span>
                <span onClick={() => this.handleClick(38)}>
                    <Tile
                        imageNumber = {this.state.currentImages[38]}
                        imagePart = {39}
                    />
                </span>
                <span onClick={() => this.handleClick(39)}>
                    <Tile
                        imageNumber = {this.state.currentImages[39]}
                        imagePart = {40}
                    />
                </span>
            </div>
        </div>
    )
  }
}

export default App;
