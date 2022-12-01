
import React, { Component } from 'react'
import { addVideo } from '../../actions/Actions';
import './Nav.css';
import PostVideo from '../PostVideo/PostVideo';
import { Link } from 'react-router-dom';
 class Nav extends Component {
  render() {
    return (
      <nav>
        <div className='logo'><h1 className='name'>YouTube_Admin</h1></div>
        <div className='navOption'>
            {/* <span className='name' >Dashboard</span> */}
            <Link to="/dashboard"><button>Dashboard</button></Link>
            {/* <span className='name' onClick={addVideo()}>Add Video</span> */}
            <Link to="/add"><button>Add Video</button></Link>
        </div>
      </nav>
    )
  }
}

export default Nav;
