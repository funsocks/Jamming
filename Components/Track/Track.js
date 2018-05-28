import React from 'react';
import './Track.css';

class Track extends React.Component{
  renderAction(isRemoval){
    if(isRemoval){
      <a>-</a>
    }else{
      <a>+</a>
    }
  }
  render(){
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>'track'</h3>
            <p> 'artist'| 'album'</p>
        </div>
        <a className="Track-action">{this.renderAction}</a>
      </div>
    )
  }
}
export default Track;
