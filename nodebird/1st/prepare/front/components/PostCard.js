import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types'
import { Avatar, Button, Card, Comment, List, Popover } from 'antd';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from "@ant-design/icons";

import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import FollowButton from "./FollowButton";

import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from "../reducers/post";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { me } = useSelector(({ user }) => ({
    me: user.me
  }))
  const { removePostLoading } = useSelector(({ post }) => (post))
  const [commentFormOpenned, setCommentFormOpenned] = useState(false);
  const id = me?.id;

  const liked = post.Likers.find((liker) => liker.id === id)

  const onLike = useCallback(() => {
    dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id
    })
  }, []);
  const onUnlike = useCallback(() => {
    dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id
    })
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpenned(prev => !prev);
  })
  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    })
  }, [])

  return (
    <div>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images}></PostImages>}
        actions={[ // 배열 안에 jsx를 넣으면 항상 키를 넣어줘야한다.
          <RetweetOutlined key="retweet"></RetweetOutlined>,
          liked 
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike}></HeartTwoTone>
            : <HeartOutlined key="heart" onClick={onLike}></HeartOutlined>,
          <MessageOutlined key="comment" onClick={onToggleComment}></MessageOutlined>,
          <Popover key="more" content={(
            <Button.Group>
              {id && post.User.id === id 
                ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                  </>
                ) : 
                <Button>신고</Button>
              }
            </Button.Group>
          )}>
            <EllipsisOutlined></EllipsisOutlined>
          </Popover>
        ]}
        extra={id && <FollowButton post={post} />}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content}></PostCardContent>}
        ></Card.Meta>
      </Card>
      { commentFormOpenned && (
        <>
          <CommentForm post={post}></CommentForm>
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                >
                </Comment>
              </li>
            )}
          >
          </List>
        </>
      )}
    </div>
  );
};

PostCard.propTypes = {
  // post: PropTypes.object.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

export default PostCard;