import { Box, Container, Heading } from "@chakra-ui/react";

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  return (
    <Box padding="18px 12px" textAlign="center" borderBottom="1px">
      <Container maxW="container.lg">
        <Heading as="h1" marginBottom="8px">
          Trending
        </Heading>
        {name === "repos" ? (
          <p>See what the GitHub community is most excited about today.</p>
        ) : (
          <p>There are the developers building the host tools today.</p>
        )}
      </Container>
    </Box>
  );
};

export default Header;
