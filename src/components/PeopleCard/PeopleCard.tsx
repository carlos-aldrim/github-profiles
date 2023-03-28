import React from "react";
import { Divider } from "@mui/material";
import { Bio, Card, Container, Details, Login, Name, Title, Location, User, Image } from "./PeopleCard.styles";
import { API } from "services/API";
import { PeopleInfo } from "services/interface";
import LocationIcon from "@mui/icons-material/LocationOnOutlined";
import { ValueContext } from "contexts";
import { useNavigate } from "react-router-dom";

export interface PeopleCardProps {
  name: string;
  login: string;
};

export const PeopleCard: React.FC<PeopleCardProps> = ({
  name,
  login,
}) => {
  const [user, setUser] = React.useState<PeopleInfo>();
  const { filteredUser } = React.useContext(ValueContext);
  const username = login;
  const navigate = useNavigate();

  const userFiltered = async () => {
    const mainData = (await API.get(`/${username}`)).data;
    setUser(mainData);
  };

  userFiltered();

  const onClickUserPage = () => {
    filteredUser(username);
    navigate("/" + username);
  };

  return (
    <Card>
      <User onClick={onClickUserPage}>
        <Image src={user?.avatar_url} alt=""/>
        <Container>
          <Title>
            <Name>{user?.name}</Name>
            <Login>{user?.login}</Login>
          </Title>
          <Details>
            <Bio>{user?.bio}</Bio>
            {user?.location === null ? "" : <Location><LocationIcon/>{user?.location}</Location>}
          </Details>
        </Container>
      </User>
      <Divider/>
    </Card>
  );
};