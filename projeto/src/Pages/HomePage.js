import React, { useEffect, useState } from 'react';
import Coordinator, { goToInfo } from '../Router/Coordinator';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import 'styles.css';

const ButtonInfo = styled.button`
  position: relative;
  background-color: white;
  border: 2px solid #4caf50;
  border-radius: 5px;
  transition-duration: 0.4s;
  cursor: pointer;
`;

const api =
  'https://api.github.com/orgs/grupotesseract/public_members';

export default function HomePage() {
  const [info, setInfo] = useState([]);
  const [text, setText] = useState(null);
  const history = useHistory();

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

  console.log({ text });

  return (
    <div className="App">
      <h1>Members</h1>

      <input
        onChange={(event) => setText(event.target.value)}
      />
      {text && info && <span>Carregando...</span>}
      {info && (
        <ul>
          {info
            .filter(
              (member) =>
                !text ||
                (text && member.login.includes(text))
            )
            .map((member) => (
              <li key={member.login}>
                <img src={member.avatar_url} alt="avatar" />
                <ButtonInfo
                  variant="danger"
                  onClick={() =>
                    goToInfo(history, member.login)
                  }
                >
                  <p>{member.login}</p>
                </ButtonInfo>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
