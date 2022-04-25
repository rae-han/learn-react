import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function AppLayout({ children }) {
  return (
    <div>
      <div>
        <Link href="/">home</Link>
        <Link href="/profile">profile</Link>
        <Link href="/user/signup">signup</Link>
        <Link href="/user/user">user</Link>
      </div>
      {children}
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;