import React from 'react';
import {useMedia} from 'react-use';

export default () => {
  const isWide = useMedia('(min-width: 480px)');

  return (
    <div>
      跟踪CSS媒体查询的状态<br />
      Screen is wide: {isWide ? 'Yes' : 'No'}
    </div>
  );
};
