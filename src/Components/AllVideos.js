import React, { Component } from 'react'
import axios from 'axios';
import './AllVideos.css'
import { allVideos, deleteVideo } from '../actions/Actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
class AllVideos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Video: []
        }
        // this.setState({
        //     Video:this.props.videos.videos
        // })
    }
    componentWillMount() {
        this.getAllVideos();
    }

    getAllVideos(){
        this.props.allVideos()
    }

    onDeleteVideo = id => {
        if(window.confirm('Do you want to delete this Video')){
        this.props.deleteVideo(id);
        window.location.reload(false)
        }
    }

    render() {

        const videos = this.props.videos;
        console.log(videos)
        // return (
        //     <div className='cardContainer'>
        //         {videos.videos ? videos.videos.map((v, index) => {
        //             return <table key={index} className='vi'>
        //                 <tr>
        //                     <td><h1>{v.title}</h1></td>
        //                 </tr>
        //                 <tr>
        //                     <td><h1>{v.description}</h1></td>
        //                 </tr>
        //                 <tr>
        //                     {/* <td><iframe width="420" height="315" src={v.URL}></iframe></td> */}
        //                     <iframe width="420" height="315"
        //                         src="https://www.youtube.com/embed/25E6FPy9SPc">
        //                     </iframe>
        //                 </tr>
        //                 <tr>
        //                     <td><h1>{v.dateUploaded}</h1></td>
        //                 </tr>
        //                 <tr>
        //                     <td className='button'>
        //                         <button className='del' onClick={() => this.onDeleteVideo(v._id)}>Delete</button>
        //                         <Link to='/editpost'><button className='edit'>Edit</button></Link>
        //                     </td>
        //                 </tr>
        //             </table>
        //         }) : <div></div>}
        //     </div>
        // )
        return (
            <Box width='100%'>
                {videos.videos ? videos.videos.map((v, index) => {
                    return <Card className='videoBox'>
                        <CardContent>
                            <CardMedia component='iframe' height='500px' width='50px'
                                // src="https://www.youtube.com/embed/2LeOH9AGJQM"
                            src={v.URL}
                            >
                            </CardMedia>
                            <Typography gutterBottom variant='h4' component='div'>
                                {v.title}
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                {v.description}
                            </Typography>
                            <CardActions className='buttons'>
                                <div className='del'>
                                <Button  size='small' onClick={() => this.onDeleteVideo(v._id)}>Delete</Button>
                                <Link to={`/editpost/${v._id}`}><Button className='edit' size='small' >Edit</Button></Link>
                                </div>
                            </CardActions>
                        </CardContent>
                    </Card>
                }) : <Card></Card>}
            </Box>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        videos: state
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return bindActionCreators({
//         deleteVideo:deleteVideo
//     },dispatch)
// }

export default connect(mapStateToProps, { allVideos, deleteVideo })(AllVideos);