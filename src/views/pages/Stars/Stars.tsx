import { AcessBar, Aside, Header, StarCard } from "components";
import { ValueContext } from "contexts";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Main, List } from "./Stars.styles";

export const Stars: React.FC = () => {
  const location = useLocation();
  const [username] = React.useState(
    String(location.pathname.split("/").slice(-2)[0])
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
    if (name !== "" && name !== undefined) {
      if (event.keyCode === 13) {
        filteredUser(name);
        navigate("/" + name);
        setName("");
      }
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
        <List>
          {user === undefined ? "" : <AcessBar user={user}/>}
          {user?.starsList.map((user) => (
            <StarCard
              name={user.full_name}
              description={user.description}
              date={user.pushed_at}
              stargarezs={user.stargazers_count}
              fork={user.forks}
            />
          ))}
        </List>
      </Main>
    </React.Fragment>
  );
};
