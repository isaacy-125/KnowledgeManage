import React, { useState, useEffect } from 'react';

function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    if (friendId === 1) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  })
  return isOnline;
}

// 自定义hook的调用
function FriendItem() {
  const isOnline = useFriendStatus(1);
  return (
    <p>friendId: 1, isOnline: {JSON.stringify(isOnline)}</p>
  )
}

function App() {
  // useState返回状态和更新函数 参数是初始值
  const [count, setCount] = useState(0);
  // useEffect 跟class组件的componentDidMount componentDidUpdate componentWillUnmount 具有相同的用途
  // useEffect 可以多次使用
  useEffect(() => {
    document.title = `u click ${count} times`;
    // 返回一个函数来指定如何清除副作用
    return () => {
      document.title = 'leave app';
    }
  }, [count]) // 第二个参数表明只有count发生变化 才会调用这次effect
  return (
    <div className="App">
      <p>u clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>plus</button>
      {FriendItem()}
    </div>
  );
}

export default App;
