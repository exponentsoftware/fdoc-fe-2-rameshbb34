import React, { Component } from 'react'
import Album from './Album';
import '../App.css';

export class Albums extends Component {
    constructor(props) {
		super(props)
    }
    render() {
        return (
            <div className = "three-cards">
                {this.props.albums.map(album => {
                return (<ul style={{listStyleType:"none"}} >
                    <img alt="example" src="https://c.saavncdn.com/393/Style-Telugu-2013-500x500.jpg" width="300" height="380" />
                    <li>{album.id}</li>
                    <li>{album.artist}</li>
                    <li>{album.album_title}</li>
                    <li>{album.album_cover}</li>


                    </ul>)
            })}

               
            </div>
        )
    }
}

export default Albums