import * as React from 'react';
import './component.css'
import { Column, Data } from './interface';

export function CatFriends() {
  const listRef = React.useRef(null);

  function scrollToIndex(index: number) {
    const listNode = listRef.current;
    // This line assumes a particular DOM structure:
    const imgNode = listNode.querySelectorAll('li > img')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToIndex(0)}>
          Tom
        </button>
        <button onClick={() => scrollToIndex(1)}>
          Maru
        </button>
        <button onClick={() => scrollToIndex(2)}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul ref={listRef}>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

interface Prop {
  columns: Column[],
  datas: Data[]
}

export function Table(prop: Prop) {
  return (
    <table>
      <tr>
        {prop.columns.map(column => 
         <th key={column.key}>{column.title}</th>)}
      </tr>
      {prop.datas.map(data => 
        <tr key={data.key}>{prop.columns.map(column => 
         <td key={column.key}>{data[column.dataIndex]}</td>)}</tr>)}
    </table>
  )
}