import React from "react";
import { Avatar, Container, Image, Name, Login, Details, FollowersList, FollowingList } from "./Aside.styles";
import { UserInfo } from "services/interface";
import { useNavigate } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";

export interface AsideProps {
  user: UserInfo;
  name: string;
};

export const Aside: React.FC<AsideProps> = ({
  user,
  name,
}) => {
  const navigate = useNavigate();

  const onClickFollowersPage = () => {
    navigate("/" + name + "/followers");
  };

  const onClickFollowingPage = () => {
    navigate("/" + name + "/following");
  };

  return (
    <Container>
      <Avatar>
        <Image src={user.avatar_url} alt={user?.name} />
      </Avatar>
      <Name to={"https://github.com/" + name}>{user.name}</Name>
      <Login to={"https://github.com/" + name}>{user.login}</Login>
      <Details>
        <FollowersList onClick={onClickFollowersPage}>
          <GroupIcon />
          {user.followers} Seguidores
        </FollowersList>{" "}
        -
        <FollowingList onClick={onClickFollowingPage}>
          {user.following} Seguindo
        </FollowingList>
      </Details>
    </Container>
  );
};