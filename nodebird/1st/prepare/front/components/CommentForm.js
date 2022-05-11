import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types'
import { Button, Form, Input } from 'antd';
import useInput from "../hooks/useInput";
import { useSelector } from "react-redux";

function CommentForm({ post }) {
  const [commentText, onChangeCommentText] = useInput('');
  const id = useSelector(state => state.user.me?.id)

  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText)
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment} style={{ position: 'relative', margin: '0' }}>
      <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}></Input.TextArea>
      <Button type="primary" htmlType="submit" style={{ position: 'absolute', right: 0, bottom: -40 }}>삐약</Button>
    </Form>
  );
}

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
}

export default CommentForm;