import React from 'react';
import Modal from '../session_forms/modal';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-div">
        <div className="top-border"></div>
        <div className="splash-panel">
          <div className="splash-panel-wrapper">
            <div className="splash-panel-carousel">
              <figure class="panel-1">
                <img id="panel-img-1" src={window.charli_xcx}/>
              </figure>
              <figure class="panel-2">
                <img id="panel-img-2" src={window.oneohtrix}/>
              </figure>
              <figure class="panel-3">
                <img id="panel-img-3" src={window.bjork} />
              </figure>
              <figure class="panel-1">
                <img id="panel-img-1" src={window.charli_xcx} />
              </figure>
              <figure class="panel-2">
                <img id="panel-img-2" src={window.oneohtrix} />
              </figure>
            </div>
          </div>
        </div>
        <nav className="nav-bar">
          <figure className="logo">
            <img id="logo-img" src={window.logo} />
            <h1 id="site-title">SOUNDSHROUD</h1>
          </figure>
          <div className="splash-modal-btns">
            <Modal />
          </div>
        </nav>
      </div>
    )
  }
}

export default Splash;