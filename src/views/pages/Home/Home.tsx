import React from "react";
import { useStyles } from "./Home.styles";
import { Header } from "components";
import { ValueContext } from "contexts";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const { filteredUser, user } = React.useContext(ValueContext);
  const [name, setName] = React.useState("");
  const navigate = useNavigate();
  const { Main } = useStyles();

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onKeySearchInput = (event: any) => {
    if (name !== "" && name !== undefined) {
      if (event.keyCode === 13) {
        filteredUser(name);
        setName("");
        navigate("/" + name);
      }
    }
  };

  console.log(user, name);

  return (
    <React.Fragment>
      <Header
        onChange={onChangeSearchInput}
        value={name}
        onKeyDown={onKeySearchInput}
      />
      <Main></Main>
    </React.Fragment>
  );
};
