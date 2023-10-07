// import logo from './logo.svg';
import './App.css';
import { Button, ConfigProvider } from 'antd';
import React from 'react';
// import { getQrKey } from "./api"

function App() {
  const [theme, settheme] = React.useState({
    token: {
      colorPrimary: 'red'
    }
  })
  return (
    <ConfigProvider theme={theme}>
      <Button type="primary">Primary Button</Button>
      <p className='text-[red] text-[10vw]'>11111</p>
      <button onClick={
        settheme({
          token: {
            colorPrimary: "red"
          }
        })
      }>修改主题</button>
    </ConfigProvider>

  );
}

export default App;
