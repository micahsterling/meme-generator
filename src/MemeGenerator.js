import React, { Component } from "react"

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getJoke = this.getJoke.bind(this)
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
    console.log(name, value)
  }
  getJoke() {
    // make api call
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(response => {
        // set to top text 
        // set to bottom text 
        this.setState({ topText: response.setup, bottomText: response.punchline })
        console.log(response.setup)
      })
  }
  handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({ randomImg: randMemeImg })
    this.getJoke()
  }
  componentDidMount() {
    this.getJoke()
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        // console.log(response.data.memes)
        this.setState({ allMemeImgs: response.data.memes })
      })
  }
  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input value={this.state.topText}
            placeholder="top text"
            name="topText"
            onChange={this.handleChange}
          />
          <br />
          <input value={this.state.bottomText}
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>

        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>

    )
  }
}


export default MemeGenerator
