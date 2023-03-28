import React from "react";
import { UserInfo } from "services/interface";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./AcessBar.styles";
import { Divider } from "@mui/material";
import BookIcon from "@mui/icons-material/BookmarkBorderOutlined";
import StarIcon from "@mui/icons-material/StarBorderOutlined";

export interface AcessBarProps {
  user: UserInfo;
};

export const AcessBar: React.FC<AcessBarProps> = ({
  user,
}) => {
  const navigate = useNavigate();
  const { Container, Button, Tag } = useStyles();

  const onClickRepoPage = () => {
    navigate("/" + user.login);
  };

  const onClickStarsPage = () => {
    navigate("/" + user.login + "/stars");
  };

  return (
    <Container>
      <Button onClick={onClickRepoPage}>
        <BookIcon/>
        Repositório
        <Tag>
          {user.reposList.length === undefined
            ? 0
            : user.reposList.length}
        </Tag>
      </Button>
      <Button onClick={onClickStarsPage}>
        <StarIcon/>
        Estrelas
        <Tag>
          {user.starsList.length === undefined
            ? 0
            : user.starsList.length}
        </Tag>
      </Button>
      <Divider />
    </Container>
  );
};