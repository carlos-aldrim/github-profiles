import React from "react";
import { Card, Container, Details, Name, Title, Description, DateUpdate, SubDescription, Stargazers, Fork, Icon } from "./StarCard.styles";
import { Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/StarBorderOutlined";
import ForkIcon from "assets/icon/ForkIcon.svg";

export interface StarCardProps {
  name: string;
  description: string;
  date: string;
  stargarezs: number;
  fork: number;
};

export const StarCard: React.FC<StarCardProps> = ({
  name,
  description,
  date,
  stargarezs,
  fork,
}) => {
  const monthID = new Date(date).getMonth();
  const day = new Date(date).getDate();

  const monthNames = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ];

  return (
    <Card>
      <Container>
          <Title>
            <Name>{name}</Name>
          </Title>
          <Details>
            <Description>{description}</Description>
            <SubDescription>
              <Stargazers><StarIcon/>{stargarezs}</Stargazers>
              <Icon src={ForkIcon} alt="Icon"/>
              <Fork>{fork}</Fork>
              <DateUpdate>Update on {monthNames[monthID]} {day}</DateUpdate>
            </SubDescription>
          </Details>
      </Container>
      <Divider/>
    </Card>
  );
};