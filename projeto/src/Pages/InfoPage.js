import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Image = styled.img`
padding-top: 100px;
margin-left: 500px;
max-width:400px;
max-height:300px
`;
const Ul = styled.ul` 
margin-left: 50px;
`

const api = 'https://api.github.com/users/';

function InfoPage(props) {
  const [info, setInfo] = useState(null);
  const username = props.match.params.username;

  console.log(info);

  useEffect(() => {
    const findUsersOrg = async () => {
      await fetch(`${api}${username}`)
        .then((response) => response.json())
        .then((response) => {
          setInfo(response);
        });
    };

    findUsersOrg();
  }, [username]);

  return (
    <div>
      {info && (
        <>
        <Ul>
          <Image src={info.avatar_url} alt="avatar" />
          <p>Nome:</p>
          <p><strong>{info.name}</strong></p>
          <p>Seguidores:</p>
          <p><strong>{info.followers}</strong></p>
          <p>Seguindo:</p>
          <p><strong>{info.following}</strong></p>
        </Ul>

        </>
      )}
    </div>
  );
}

export default InfoPage;
