import axios from "axios";
export const actionTypes = {
    ALL_VIDEOS:'ALL_VIDEOS',
    ONE_VIDEO:'ONE_VIDEO',
    ADD_VIDEO:'ADD_VIDEO',
    DELETE_VIDEO:'DELETE_VIDEO',
    EDIT_VIDEO:'EDIT_VIDEO'
}
export const allVideos = () => {
    return (dispatch) => {
        axios.get('http://localhost:8000/api/viewAll?pageoffset=0&pageSize=10')
            .then(res => {
                const videos = res.data;
                console.log(videos)
                console.log(res)
                dispatch({
                    type: 'ALL_VIDEOS',
                    payload: res.data
                })
            })
            .catch(error => {
                const errormsz = error.message;
                console.log(errormsz);
            })
    }
}
export const videoById = (videoId) => {
    // console.log(videoId);
    return (dispatch) => {
        // console.log(videoId);
        axios.get(`http://localhost:8000/api/viewOne/${videoId}`)
            .then(res => {
                const videos = res.data;
                // console.log(videos)
                dispatch({
                    type: 'ONE_VIDEO',
                    payload: res.data
                })
            })
            .catch(error => {
                const errormsz = error.message;
                console.log(errormsz);
            })
    }
}

export const addVideo = videoObj => {
    return (dispatch) => {
        console.log(videoObj)
        axios.post("http://localhost:8000/api/post", videoObj, {})
            .then(res => {
                //console.log(res);
                dispatch({
                    type: 'ADD_VIDEO',
                    payload: res.data
                })
            })
            .catch(error => {
                const errormsz = error.message;
                console.log(errormsz);
            })
    }
}

export const deleteVideo = (videoId) => {
    return (dispatch) => {
        console.log(videoId)
        axios.delete(`http://localhost:8000/api/delete/${videoId}`)
            .then(res => {
                dispatch({
                    type: 'DELETE_VIDEO',
                    payload: videoId
                })
            })
            .catch(error => {
                const errormsz = error.message;
                console.log(errormsz);
            })
    }
}

export const editVideo = (videoObj,videoId) => {
    return (dispatch) => {
        console.log(videoId)
        axios.put(`http://localhost:8000/api/update/${videoId}`, videoObj)
            .then(res => {
                dispatch({
                    type: 'EDIT_VIDEO',
                    payload: videoId
                })
            })
            .catch(error => {
                const errormsz = error.message;
                console.log(errormsz);
            })
    }
}

export const setTitle = (title) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_TITLE',
            payload: title
        })
    }
}