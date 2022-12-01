import { Card, CardContent} from '@mui/material';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addVideo } from '../../actions/Actions';
import './PostVideo.css'
class PostVideo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            URL: '',
            description: '',
            date1: new Date().toISOString().slice(0, 10)
        }
    }

    selectedDate = (e) => {
        this.setState({
            date1: e.target.value
        })
    }
    handleTextChange = e => {
        console.log(e)
        this.setState({ [e.target.name]: e.target.value });
    }
    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addVideo(this.state);
        this.setState({
            title: '',
            URL: '',
            description: '',
            date1: ''
            // new Date().toISOString().slice(0, 10)
        })
    }
    render() {
        return (
            <div>
                <Card>
                    <CardContent className='form'>
                        <form onSubmit={this.handleOnSubmit} className='view'>
                            <h3>Create Post</h3>
                            <label><h3>Title</h3></label>
                            <input onChange={this.handleTextChange} value={this.state.title} required type="text" name='title' placeholder="Enter Video Title" />
                            <label><h3>URL</h3></label>
                            <input onChange={this.handleTextChange} value={this.state.URL} required type="text" name='URL' placeholder="Enter Video URL" />
                            <label><h3>Description</h3></label>
                            <textarea onChange={this.handleTextChange} value={this.state.description} required rows="5" cols="28" name='description' placeholder="Enter Description" />
                            <label><h3>Date</h3></label>
                            <input type="date" value={this.state.date1} onChange={this.selectedDate} />
                            <button type='submit'>Post</button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default connect(null, { addVideo })(PostVideo);