// PostList.js
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Grid} from "../elements";
import Post from "../components/Post";
import {actionCreators as postActions} from "../redux/modules/post";

const PostList = (props) => {
    const dispatch = useDispatch();
    const user_info = useSelector((state) => state.user.user);   
    const post_list = useSelector((state) => state.post.list);
    

    const {history} = props;
    
    React.useEffect(() => {

        if(post_list.length < 2){
             dispatch(postActions.getPostFB());
        }
       
    }, []);

    return (
        <React.Fragment>
            <Grid bg={"#EFF6FF"} padding="40px 0px 20px 0px">
            {/* <Post/> */}
            {post_list.map((p, idx) => {
                if(p.user_info.user_id === user_info?.uid){
                    return (
                    <Grid 
                    key={idx}
                    _onClick={() => {history.push(`/post/${p.id}`)}}>
                        <Post {...p} is_me/>;
                    </Grid>
                    );
                }else{
                    return(
                        <Grid 
                        key={idx}
                        _onClick={() => {history.push(`/post/${p.id}`)}}>
                             <Post  {...p} />;
                        </Grid>
                    )
                    }
                
})} 
            </Grid>
        </React.Fragment>
    )
}

export default PostList;

