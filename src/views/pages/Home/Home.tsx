import React from "react";
import { Main } from "./Home.styles";
import { Header } from "components";
import { ValueContext } from "contexts";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const { filteredUser, getTheme, setUser } = React.useContext(ValueContext);
  const [name, setName] = React.useState("");
  const navigate = useNavigate();
  const colors = getTheme();

  React.useEffect(() => {
    setUser(undefined);
  }, []);

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

  const onClickSearchInput = () => {
    if (name !== "" && name !== undefined) {
      filteredUser(name);
      navigate("/" + name);
      setName("");
    }
  };

  return (
    <React.Fragment>
      <Header
        onChange={onChangeSearchInput}
        value={name}
        onKeyDown={onKeySearchInput}
        onClick={onClickSearchInput}
      />
      <Main sx={{backgroundColor: colors.backgroundPrimary}}/>
    </React.Fragment>
  );
};
