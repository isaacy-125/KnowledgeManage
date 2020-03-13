import React, { useState } from 'react';
import {usePageLeave} from 'react-use';

export default () => {
  const [pageLeft, setPageLeft] = useState(false);

  usePageLeave(() => setPageLeft(true));

  return pageLeft ? '离开了页面' : '在页面中';
};
