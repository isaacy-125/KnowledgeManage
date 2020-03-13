import React from 'react';
import {useLocation} from 'react-use';

export default () => {
  const state = useLocation();

  return (
    <pre>
      跟踪页面导航栏的位置状态
      {JSON.stringify(state, null, 2)}
    </pre>
  );
};
