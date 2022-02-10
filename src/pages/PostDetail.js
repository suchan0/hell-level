import React,  {useState} from "react";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Permit from "../shared/Permit"
import {useDispatch,useSelector } from "react-redux";
import {history} from "../redux/configureStore";
import {Grid, Text, Image ,Button} from "../elements";
import {actionCreators as postActions} from "../redux/modules/post";
import { useHistory } from "react-router-dom";
import "../shared/App.css";
const PostDetail = (props) => {
    const [like,setlike] = useState(0)
    const [unlike,setunlike] = useState(0)
   
    const [likeactive,setlikeactive] = useState(false)
    const [unlikeactive,setunlikeactive] = useState(false)
    function likef(){
      if(likeactive){
        setlikeactive(false)
        setlike(like-1)
      }else{
        setlikeactive(true)
        setlike(like+1)
        if(unlikeactive){
          setunlikeactive(false)
          setlike(like+1)
          setunlike(unlike-1)
          
        }
      }
    }
    function unlikef(){
      if(unlikeactive){
        setunlikeactive(false)
        setunlike(unlike-1)
      }else{
        setunlikeactive(true)
        setunlike(unlike+1)
        if(likeactive){
          setlikeactive(false)
          setunlike(unlike+1)
          setlike(like-1)
    }
  }
    }
    const dispatch = useDispatch();

    
     const id = props.match.params.id;
    const user_info = useSelector((state) => state.user.user);
    const post_list = useSelector(store => store.post.list);
    const post_idx = post_list.findIndex(p => p.id === id); 
  
    const post = post_list[post_idx];
    
    React.useEffect(() => {

        if(post){
            return;
        }
        
        dispatch(postActions.getOnePostFB(id))
        
    }, [])
  
    return (
        <React.Fragment>
            <Permit>
             <h1>{post_list[post_idx]? post_list[post_idx].text : ""}</h1>
           <button  onClick={() => {
               console.log(id);
               dispatch(postActions.deletePostFB(id));
           }}>삭제하기</button>
           </Permit>
            {post && ( 
            <Post {...post} is_me={post.user_info.user_id === user_info?.uid}/>)}
            <Permit>
            <div  className="Like">
              <div></div>
            <button onClick={likef} className={[likeactive ? "active-like":null,"button"].join(' ')} >좋아요 {like}</button>
            <button onClick={unlikef} className={[unlikeactive ? "active-unlike":null,"button"].join(' ')} >싫어요 {unlike}</button>
            <div></div>
            </div>
            <CommentWrite post_id={id} />
            </Permit>
            <CommentList post_id={id} />
            
        </React.Fragment>
    )
}

export default PostDetail;
