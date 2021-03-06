import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import { List, Button, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";

import { UNFOLLOW_REQUEST, REMOVE_FOLLOWER_REQUEST } from "../reducers/user";

function FollowList({ header, data, loading, onClickMore }) {
  const dispatch = useDispatch();

  const onCancel = useCallback((id) => () => {
    if(header === '팔로잉 목록') {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: id,
      })
    } else if(header === '팔로워 목록') {
      dispatch({
        type: REMOVE_FOLLOWER_REQUEST,
        data: id,
      })
    }
  })

  return (
    <List
      style={{ marginBottom:20 }}
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadMore={(
        <div style={{ textAlign: 'center', margin: '10px 0' }}>
          <Button loading={loading} onClick={onClickMore} >더 보기</Button>
      </div>
      )}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" onClick={onCancel(item.id)} />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    >
    </List>
  );
}

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  onClickMore: PropTypes.func.isRequired,
}

export default FollowList;

