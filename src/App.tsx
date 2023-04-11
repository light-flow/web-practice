import React from 'react'
import { CatFriends, Table } from './component';
import './App.css'



function App() {

  const dataSource = [
    {
      key: 1,
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: 2,
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  
  return (
    <div className='container'>
    <div>你好</div>
    <div className='app'>
      <CatFriends/>
      <Table columns={columns} datas={dataSource}/>
    </div>
    <div>test</div>
    </div>
  );
}

export default App;