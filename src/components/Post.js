import { AppBar } from "@material-ui/core";
import React,{useState} from "react";
import { Grid, Image, Text, Button } from "../elements";
import "../shared/App.css";
import {history} from "../redux/configureStore";
import Permit from "../shared/Permit";

 const Post = (props) => {
 
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <Button width="auto" margin="4px" padding="4px" _onClick={() => {
                history.push(`/write/${props.id}`);
              }}>
                수정
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image width="500px" height="300px" shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            <Permit>
           댓글 {props.comment_cnt}개 
            </Permit>
          </Text>
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "jaemin",
    user_profile: "https://t1.daumcdn.net/cfile/tistory/1847E23A4DE262570B",
  },
  image_url: "https://t1.daumcdn.net/cfile/tistory/1847E23A4DE262570B",
  contents: "아기 쿵푸팬더",
  comment_cnt: 10,
  insert_dt: "2022-02-06 10:00:00",
  is_me: false,
};

export default Post;
