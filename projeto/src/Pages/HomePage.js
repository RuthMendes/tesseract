import React, { useEffect, useState } from 'react';
import Coordinator, { goToInfo } from '../Router/Coordinator'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const ButtonInfo = styled.button`
position: relative;
 background-color: white ;
 border: 2px solid #4CAF50;
 border-radius: 5px;
 transition-duration: 0.4s;
  cursor: pointer;
`
const Image = styled.img`
    width: 250px;
    height: 250px;
    padding: 1em;
    
`
const Container = styled.ul`
background-color: #f2f2f2f2;
    height: 2300px;
    width: 300px;
    margin: 30px;
    box-shadow: 3px 3px 3px 3px #d9d9d9;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding-top: 00px;
`

const api =
  'https://api.github.com/orgs/grupotesseract/public_members';

export default function HomePage() {
  const [info, setInfo] = useState([]);
  const [text, setText] = useState(null);
  const history = useHistory()

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
        <Container>
          {info
            .filter(
              (member) =>
                !text ||
                (text && member.login.includes(text))
            )
            .map((member) => (
              <li key={member.login}>
                <Image src={member.avatar_url} alt="avatar" />
                <ButtonInfo variant="danger" onClick={() => goToInfo(history)}>  
                  <p>{member.login}</p>
                </ButtonInfo>
              </li>
            ))}
        </Container>
      )}
    </div>
  );
}