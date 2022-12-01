
import React, { Component } from 'react'
import { addVideo } from '../../actions/Actions';
import './Nav.css';
import PostVideo from '../PostVideo/PostVideo';
import { Link } from 'react-router-dom';
import CustomizedDialogs from '../Popup';
 class Nav extends Component {
  render() {
    return (
      <nav>
        <div className='logo'><h1 className='name'>YouTube_Admin</h1></div>
        <div className='navOption'>
            <Link to="/dashboard"><button>Dashboard</button></Link>
            <div>
            {/* <Link to="/add"><button>Add Video</button></Link> */}
            <CustomizedDialogs namee= 'Add Video' title='Post video'><PostVideo/></CustomizedDialogs>
            </div>
        </div>
      </nav>
    )
  }
}

export default Nav;
