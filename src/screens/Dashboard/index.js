export function Dashboard() {
  return (
    <>
      <h1>Hello, Boss</h1>

      <a
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=https%3A%2F%2Flogin-github.netlify.app%2Flogin%2Fcallback&scope=user`}
      >
        Entrar
      </a>
    </>
  );
}
