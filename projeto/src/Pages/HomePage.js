import React, { useEffect, useState } from 'react';
import { goToInfo } from '../Router/Coordinator';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';


const ButtonInfo = styled.button`  
  background-color: white;
  border: 2px solid #4caf50;
  border-radius: 5px;
  transition-duration: 0.4s;
  cursor: pointer;
`;
const H1 = styled.h1`
  margin-left: 540px;
`;
const Input = styled.input`
  margin-left: 530px;
`;
const Img = styled.img`
  padding-top: 100px;
  margin-left: 500px;
  max-width:300px;
  max-height:200px
 
`
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
      <H1>Members</H1>

      <Input
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
                <Img src={member.avatar_url} alt="avatar" />
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
