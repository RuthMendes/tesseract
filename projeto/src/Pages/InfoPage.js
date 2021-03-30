import React, { useEffect, useState } from 'react';
import HomePage from './HomePage';
import styled from 'styled-components';

const Image = styled.img`
  width: 250px;
`;

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
  }, []);

  return (
    <div>
      {info && (
        <>
          <Image src={info.avatar_url} alt="avatar" />
          <p>Nome:</p>
          <p>{info.name}</p>
          <p>Seguidores:</p>
          <p>{info.followers}</p>
        

        </>
      )}
    </div>
  );
}

export default InfoPage;