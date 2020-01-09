import React from 'react';

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemes: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.randomClick = this.randomClick.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => {
                const {memes} = res.data
                this.setState({allMemes: memes})
            })
    }
    
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
           [name]: value
        })
    }

    randomClick(event) {
        event.preventDefault();
        const randomNum = Math.floor(Math.random() * this.state.allMemes.length);
        const randomNameImg = this.state.allMemes[randomNum].url;
        this.setState({ randomImg: randomNameImg})
     }


    render() {
        return (
            <div>
                <form className='meme-form' onSubmit={this.randomClick}>
                    <input
                    type='text'
                    name='topText'
                    placeholder='Top text'
                    value={this.state.topText}
                    onChange={this.handleChange}
                    /> 
                    <input
                    type='text'
                    name='bottomText'
                    placeholder='Bottom Text'
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImg} alt='none_img' />
                    <h2 className='top'>{this.state.topText}</h2>
                    <h2 className='bottom'>{this.state.bottomText}</h2>
                </div>
            </div>
        ) 
    }
}

export default MemeGenerator;