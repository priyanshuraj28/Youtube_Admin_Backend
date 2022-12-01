import React, { Component } from 'react'
import { videoById , editVideo} from '../actions/Actions'
import { connect } from 'react-redux'
import axios from 'axios'
class Editpost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            URL: "",
            description: "",
            dateUploaded: new Date()
        };
    }

    async componentDidMount() {
        const data = window.location.pathname.slice(10);
        await this.props.videoById(data);
        axios.get(`http://localhost:8000/api/viewOne/${data}`)
            .then(res => {
                const videos = res.data;
                console.log("response",videos)
                this.setState({
                    title:videos.title,
                    URL:videos.URL,
                    description:videos.description,
                    dateUploaded:videos.dateUploaded
                })
            })
            .catch(error => {
                const errormsz = error.message;
                console.log(errormsz);
            })
    }
    giveCurrentDate = (dateUploaded) => {
        const today = new Date(dateUploaded);
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    }
    onChangeValue = (event) => {
        console.log(this.state)
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    onSubmitValue(id){
        this.props.editVideo(this.state,id);
    }
    render() {
        // const {
        //     title,
        //     URL,
        //     description,
        //     dateUploaded
        // } = this.state;
        // console.log("sdsdcsd",this.props)
        console.log(this.state)
        //console.log("/////", dateUploaded);
        // const data = this.props.match.params.id;
        // console.log(data); 
        // console.log(this.props.onVideo)
        return (
            <div>
                
                <form onSubmit={()=>this.onSubmitValue(this.props?.oneVideo?._id)}>
                    
                    <table className='form'>
                        <tr>
                            <td><h3>Edit Post</h3></td>
                        </tr>
                        <tr>
                            <td><input  value={this.state.title} onChange={this.onChangeValue}
                            //  onChange={(e) => {
                            //     setTitle(e.target.value)
                            // }
                            // } 
                            type="text" name='title' id='title' placeholder="Enter Video Title" /></td>
                        </tr>
                        <tr>
                            <td><input  value={this.state.URL} onChange={this.onChangeValue} type="text" name='URL' placeholder="Enter Video URL" /></td>
                        </tr>
                        <tr>
                            <td><textarea  value={this.state.description} onChange={this.onChangeValue} rows="5" cols="28" name='description' placeholder="Enter Description" /></td>
                        </tr>
                        <tr>
                            <td><input value={this.giveCurrentDate(this.state.dateUploaded)} onChange={this.onChangeValue} type="date" name='dateUploaded' /></td>
                        </tr>
                        <tr>
                            <td><button type='submit'>Save</button></td>
                        </tr>
                    </table>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("mapstatetoprops",state)
    return{
        oneVideo: state.oneVideo,
    }
}
export default connect(mapStateToProps, { videoById, editVideo })(Editpost);