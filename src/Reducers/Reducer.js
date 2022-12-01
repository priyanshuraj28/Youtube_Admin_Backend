import { actionTypes } from "../actions/Actions";

const initialState = {
    videos:[],
    oneVideo:{}
} ;
const videoReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ALL_VIDEOS:
            return {...state, videos:action.payload};
        case actionTypes.ADD_VIDEO:
            let videos = state.videos.concat(action.payload);
            return {...state, videos}
        case actionTypes.DELETE_VIDEO:
            return {...state, video:state.videos.filter((x) => x._id !== action.payload)}
        case actionTypes.ONE_VIDEO:
            console.log("one video reducer",action.payload);
            return {...state, oneVideo:action.payload};
        case actionTypes.EDIT_VIDEO:
            return{...state}
        case "SET_TITLE":
            const title = action.payload;
            return{...state, title}
        default:
            return state;    
    }
}
export default videoReducer;