import React from 'react';
import { withRouter } from 'react-router-dom'

const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>Location</h4>
      <textarea name="" id="location" cols="30" rows="10" value={JSON.stringify(location, null, 2)} readOnly></textarea>
      <h4>Match</h4>
      <textarea name="" id="match" cols="30" rows="10" value={JSON.stringify(match, null, 2)} readOnly></textarea>
      <button onClick={() => history.push('/')}>홈으로</button>
      
    </div>
  );
};

export default withRouter(WithRouterSample);