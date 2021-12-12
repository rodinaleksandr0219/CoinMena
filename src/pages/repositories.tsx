import {
  Box,
  Container,
  Flex,
  ButtonGroup,
  Button,
  Stack,
  VStack,
  StackDivider,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { parseRepositoryData } from "../utils/parse-data";

import Repository from "../components/Repository";
import Header from "../components/Header";
import LanguageBar from "../components/LanguageBar";
import DateBar from "../components/DateBar";

const Repositories = () => {
  const { isLoading, isError, data } = useQuery("repositories", async () => {
    const res = await fetch("/repositories.json");
    return parseRepositoryData(await res.json());
  });

  return (
    <Box>
      <Header name="repos" />
      <Box py="16px">
        <Container maxWidth="container.lg">
          <Box border="1px" borderRadius="5px" overflow="hidden">
            <Flex
              justifyContent="space-between"
              alignItems="center"
              fontSize="sm"
              p="5"
              backgroundColor="gray.900"
              borderBottom="2px"
            >
              <ButtonGroup isAttached>
                <Button
                  fontSize="sm"
                  isActive
                  _active={{ background: "blue.500" }}
                >
                  Repositories
                </Button>
                <Button>
                  <Link to="/developers">Developers</Link>
                </Button>
              </ButtonGroup>
              <Stack direction="row">
                <LanguageBar name="old" />
                <LanguageBar name="new" />
                <DateBar />
              </Stack>
            </Flex>

            {!isLoading && !isError && (
              <VStack spacing={0} divider={<StackDivider />} align="left">
                {data?.map((data, index) => (
                  <Repository data={data} key={index} />
                ))}
              </VStack>
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Repositories;
