import React from "react";
import { Card, Color, Container, DateUpdate, Details, Languagem, Name, Tag, Title, Visibility } from "./RepoCard.styles";
import { Divider } from "@mui/material";

export interface RepoCardProps {
  name: string;
  visibility: string;
  language: string;
  date: string;
  star: number;
};

export const RepoCard: React.FC<RepoCardProps> = ({
  name,
  visibility,
  language,
  date,
  star,
}) => {
  const [color, setColor] = React.useState<string>("");
  const monthID = new Date(date).getMonth();
  const yearCurrent = new Date().getFullYear();
  const yearDate = new Date(date).getFullYear();
  const day = new Date(date).getDate();

  React.useEffect(() => {
    switch(language) {
      case "TypeScript":
        setColor("#3178c6");
        break;
      case "C#":
        setColor("#178600");
        break;
      case "Java":
        setColor("#b07219");
        break;
        case "Python":
        setColor("#3572a5");
        break;
      case "C":
        setColor("#555555");
        break;
      case "EJS":
        setColor("#a91e50");
        break;
      case "C++":
        setColor("#f34b7d");
        break;
        case "JavaScript": 
        setColor("#f1e05a");
        break;
      case "HTML":
        setColor("#e34c26");
        break;
      case "CSS":
        setColor("#563d7c");
        break;
      case "Go":
        setColor("#00add8");
        break;
      default:
        setColor("#C4C4C4");
        break;
    };
  }, [language]);

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
            <Tag>
              <Visibility>{visibility}</Visibility>
            </Tag>
          </Title>
          <Details>
            <Color style={{backgroundColor: color}}/>
            <Languagem>{language === null ? "config" : language}</Languagem>
            <DateUpdate>Update on {monthNames[monthID]} {day}{yearDate === yearCurrent ? "" : ", " + yearDate}</DateUpdate>
          </Details>
      </Container>
      <Divider/>
    </Card>
  );
};