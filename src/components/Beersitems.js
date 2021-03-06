
import React, {Component} from 'react';


class Beersitems extends Component {
state = {
    liked: false
}

likedPress = () => this.setState({liked: !this.state.liked})
  render()  {
    const buttonMessage = this.state.liked ? 'Unlike' : 'Like'
    const buttonColor = this.state.liked ? '#ff7575' : 'white'
    return (
        <div style={{color: 'purple', textAlign: 'center'}}>
            <p style={{color: 'black', textAlign: 'center', }}>{this.props.info.name}</p>
            <p style={{textAlign: 'center'}}>{this.props.info.tagline}</p>
            <button onClick={this.likedPress} style={{backgroundColor: `${buttonColor}`, width: '50px', color: 'black', fontWeight: 'bold'}}>{buttonMessage}</button>
        </div>
    )
    }
}
export default Beersitems;