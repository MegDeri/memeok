import React from 'react';


class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/lbij.jpg',
            allMemes: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => {
                const {memes} = res.data
                console.log(memes[0])
                this.setState({allMemes: memes})
            })
    }

    render() {
        return (
            <div>Something to return!
                <p>{this.state.topText}</p>  
                <p>{this.state.bottomText}</p>  
                <p>{this.state.randomImg}</p>  
            </div>
        ) 
    }
}

export default MemeGenerator;