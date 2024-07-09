import { message, notification } from 'antd';
import React, { useEffect, useMemo } from 'react';
import { io } from 'socket.io-client';

export function rootContainer(
  container: React.ReactElement,
  args: { routes: any; plugin: any; history: any },
) {
  const socket = io('https://guostz.com', {
    query: {
      name: 'guos-components',
    },
  });

  socket.on('connect', () => {
    console.log(`${socket.id} 应用加入连接`);
  });

  socket.on('update successful', (msg) => {
    console.log(msg);
    notification.info({
      message: '新内容已部署',
      description: (
        <div>
          <div>本次提交内容: {'xxxx'}</div>
          <div>
            请<a onClick={() => window.location.reload()}>刷新页面</a>
            以查看最新内容
          </div>
        </div>
      ),
    });
  });

  socket.on('update failed', (msg) => {
    notification.info({
      message: '内容更新失败',
      description: (
        <div>
          <div>请登录服务器查看具体原因</div>
          <div>{'xxxxxx'}</div>
        </div>
      ),
    });
  });

  socket.on('disconnect', () => {
    socket.disconnect();
    console.log(`${socket.id} 应用断开连接`);
  });

  return container;
}