import axios from 'axios';
import { useEffect } from 'react';

export function GithubCallback() {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
    const data = {
      client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
      client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      code,
    };

    axios
      .post('https://github.com/login/oauth/access_token', data, {
        header: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return <h1>Hello, Boss</h1>;
}
