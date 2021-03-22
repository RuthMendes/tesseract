import React, { useEffect, useState} from 'react'
import './styles.css'
import Input from './Components/Input'



const api = 'https://api.github.com/orgs/grupotesseract/public_members';

export default function App() {
  const [info, setInfo] = useState({});
  const [text, setText] = useState('');

  useEffect(() => {
    if(text) {
      fetch(`${api}members?filter[text]=&users/%7Buser%7D`)
      .then((response) => response)
      .then((response) => {
        setInfo(response);
        console.log(response)
      });
    }
  }, [text]);

  return (
    <div className="App">
      <h1>Members</h1>
      <Input value={text} onChange={(search) => setText(search)}/>
      {info.data && (
        <ul>
          {info.data.map((member) => (
            <li key={member.login}>
              
            </li>

          ))}
        </ul>
      )}

    </div>
  )


}