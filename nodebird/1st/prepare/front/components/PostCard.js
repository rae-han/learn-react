import React, { useState, useCallback } from 'react';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types'
import { Avatar, Button, Card, Comment, List, Popover } from 'antd';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from "@ant-design/icons";

import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";

const PostCard = ({ post }) => {
  // console.log('post', post)
  const { me } = useSelector(state => ({
    me: state.user
  }))
  const [liked, setLiked] = useState(false);
  const [commentFormOpenned, setCommentFormOpenned] = useState(false);

  const id = me?.id;

  const onToggleLike = useCallback(() => {
    setLiked(prev => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpenned(prev => !prev);
  })

  return (
    <div>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images}></PostImages>}
        actions={[ // 배열 안에 jsx를 넣으면 항상 키를 넣어줘야한다.
          <RetweetOutlined key="retweet"></RetweetOutlined>,
          liked 
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike}></HeartTwoTone>
            : <HeartOutlined key="heart" onClick={onToggleLike}></HeartOutlined>,
          <MessageOutlined key="comment" onClick={onToggleComment}></MessageOutlined>,
          <Popover key="more" content={(
            <Button.Group>
              {id && post.User.id === id 
                ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : 
                <Button>신고</Button>
              }
            </Button.Group>
          )}>
            <EllipsisOutlined></EllipsisOutlined>
          </Popover>
        ]}
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
    createAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
}

export default PostCard;