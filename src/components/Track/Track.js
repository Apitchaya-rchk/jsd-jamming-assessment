import React from "react";

import './Track.css';

class Track extends React.Component {

  renderAction(){
    if (this.props.isRemoval){
        return <button className="Track-action">-</button>
    } else {
        return <button className="Track-action">+</button>
    }
}

render() {
  return (
      <div className="Track">
          <div className="Track-information">
              {/* <!-- track name will go here --> */}
              <h3>{this.props.track.name}</h3>
              {/* <!-- track artist will go here--> | <!-- track album will go here --> */}
              <p>{this.props.track.artist} | {this.props.track.album}</p>
          </div>
          {/* <!-- + or - will go here --> */}
          {this.renderAction()}
      </div>
  )
}
}

export default Track;
