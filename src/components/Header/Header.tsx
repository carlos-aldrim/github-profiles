import React from "react";
import { useStyles } from "./Header.styles";
import { useNavigate } from "react-router-dom";
import IconGithub from "assets/icon/IconGithub.svg";
import { TextField } from "components";
import ArrowIcon from "@mui/icons-material/ArrowForward";
import { Switch } from "@mui/material";
import { ValueContext } from "contexts";

export interface HeaderProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: any) => void;
  value?: string;
  onClick?: () => void; 
};

export const Header: React.FC<HeaderProps> = ({
  onChange,
  onKeyDown,
  value,
  onClick,
}) => {
  const navigate = useNavigate();
  const { Container, LabelText, Logo, Search, Title } = useStyles();
  const { theme, toggleTheme, error, setError } = React.useContext(ValueContext);

  const onClickHomeButton = () => {
    navigate("/");
    setError("");
  };

  return (
    <Container>
      <Title onClick={onClickHomeButton}>
        <Logo src={IconGithub} alt="Github Profiles"/>
        <LabelText>Github Profiles</LabelText>
      </Title>
      <Search>
        <TextField
          placeholder="Pesquisar..."
          endAdornment={<ArrowIcon onClick={onClick}/>}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={value}
          helpText={error}
        />
        <Switch color="default" defaultChecked={ theme === "light" ? true : false } onClick={() => toggleTheme( theme === "light" ? "dark" : "light" )}/>
      </Search>
    </Container>
  );
};