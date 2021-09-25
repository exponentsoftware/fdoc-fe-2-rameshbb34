import React, { Component } from 'react'
import AddAlbum from './Components/AddAlbum'
import Albums from './Components/Albums';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      albums: [
        {id: 1, artist: "Manisharma", album_title: "Style", album_cover: "Style", songs: "Rock n Roll"},
        {id: 2, artist: "Manisharma", album_title: "Style", album_cover: "Style", songs: "Style Style"},
        {id: 3, artist: "Manisharma", album_title: "Style", album_cover: "Style", songs: "Raa Raa"},
      ],
      errorMsg: ''
    }
    this.receiver = this.receiver.bind(this)
    this.delete = this.delete.bind(this)
  }
  
  receiver = () => {
    let { albums, obj } = this.state;
    albums.push(obj);
  }
  delete(){
    let { albums, obj } = this.state;
    albums.pop(obj);
  }
  render() {
    return (
      
      <div className="App">
        <AddAlbum receiveFunc = {this.receiver}/>
        <Albums albums={this.state.albums} deleteFunc={this.delete}/> 
      </div>
      
    )
  }
}

export default App