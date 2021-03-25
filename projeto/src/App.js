import React, { useEffect, useState} from 'react'
import './styles.css'
import SearchInput from './Components/SearchInput'

const api = "https://api.github.com/orgs/grupotesseract/public_members";

export default function App() {
  const [info, setInfo] = useState([]);
  const [text, setText] = useState("");
  console.log(info);

  useEffect(() => {
    const findUsersOrg = async () => {
      await fetch(api)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    };

    findUsersOrg();
  }, []);

  return (
    <div className="App">
      <h1>Pesquise aqui!</h1>
      <SearchInput value={text} onChange={(search) => setText(search)} />
      <h2>Members List</h2>
      {text && info && <span>Carregando...</span>}
      {info && (
        <ul className="members-list">
          {info.map((member) => (
            <li key={member.login}>
              <img src={member.avatar_url} alt="avatar" />
              <p>{member.login}</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}