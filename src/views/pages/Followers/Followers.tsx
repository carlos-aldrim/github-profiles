import { AcessBar, Aside, Header, PeopleCard } from "components";
import { ValueContext } from "contexts";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Main, List } from "./Followers.styles"

export const Followers: React.FC = () => {
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

  return (
    <React.Fragment>
      <Header
        onChange={onChangeSearchInput}
        value={name}
        onKeyDown={onKeySearchInput}
      />
      <Main sx={{backgroundColor: colors.backgroundPrimary}}>
        {user === undefined ? "" : <Aside user={user} name={username}/>}
        <List>
          {user === undefined ? "" : <AcessBar user={user} name={username}/>}
          {user?.followersList.map((user) => (
            <PeopleCard name={user.name} login={user.login} />
          ))}
        </List>
      </Main>
    </React.Fragment>
  );
};
