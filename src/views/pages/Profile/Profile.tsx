import { AcessBar, Aside, Header, RepoCard } from "components";
import { ValueContext } from "contexts";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Main, Repos } from "./Profile.styles";

export const Profile: React.FC = () => {
  const location = useLocation();
  const [username] = React.useState(
    String(location.pathname.split("/").slice(-1)[0])
  );
  const { filteredUser, user } = React.useContext(ValueContext);
  const [name, setName] = React.useState("");
  const navigate = useNavigate();
  const { getTheme } = React.useContext(ValueContext);
  const colors = getTheme();

  React.useEffect(() => {
    filteredUser(username);
  }, []);

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onKeySearchInput = (event: any) => {
    if (event.keyCode === 13) {
      filteredUser(name);
      navigate("/" + name);
      setName("");
    }
  };

  const onClickSearchInput = () => {
    if (name !== "" && name !== undefined) {
      filteredUser(name);
      navigate("/" + name);
      setName("");
    }
  };

  console.log(user?.login, username, name);

  return (
    <React.Fragment>
      <Header
        onChange={onChangeSearchInput}
        value={name}
        onKeyDown={onKeySearchInput}
        onClick={onClickSearchInput}
      />
      <Main sx={{backgroundColor: colors.backgroundPrimary}}>
        {user === undefined ? "" : <Aside user={user} name={username}/>}
        <Repos>
          {user === undefined ? "" : <AcessBar user={user}/>}
          {user?.reposList.map((repo) => (
            <RepoCard
              login={username}
              name={repo.name}
              visibility={repo.visibility}
              language={repo.language}
              date={repo.pushed_at}
              star={repo.stargazers_count}
            />
          ))}
        </Repos>
      </Main>
    </React.Fragment>
  );
};
