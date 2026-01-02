import { Container, Box, Text } from "@chakra-ui/react";
interface CardProps {
  children?: React.ReactNode;
  title: string;
  description?: string;
}
const Card: React.FC<CardProps> = ({ children, title, description }) => {
  return (
    <Container>
      <Box p={4}>
        <Text>{title}</Text>
      </Box>
    </Container>
  );
};
export default Card;
