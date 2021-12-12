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
import { parseDeveloperData } from "../utils/parse-data";

import Developer from "../components/Developer";
import Header from "../components/Header";
import LanguageBar from "../components/LanguageBar";
import DateBar from "../components/DateBar";

const Developers = () => {
  const { isLoading, isError, data } = useQuery("developers", async () => {
    const res = await fetch("/developers.json");
    return parseDeveloperData(await res.json());
  });
  return (
    <Box>
      <Header name="devs" />
      <Box py="16px">
        <Container maxW="container.lg">
          <Box border="1px" overflow="hidden" borderRadius="5px">
            <Flex
              justifyContent="space-between"
              alignItems="center"
              borderBottom="2px"
              backgroundColor="gray.900"
              fontSize="sm"
              p="5"
            >
              <ButtonGroup isAttached>
                <Button fontSize="sm">
                  <Link to="/">Repositories</Link>
                </Button>
                <Button
                  fontSize="sm"
                  isActive
                  _active={{ background: "blue.500" }}
                >
                  Developers
                </Button>
              </ButtonGroup>
              <Stack direction="row">
                <LanguageBar name="new" />
                <DateBar />
              </Stack>
            </Flex>
            {!isLoading && !isError && (
              <VStack spacing={0} align="left" divider={<StackDivider />}>
                {data?.map((data, id) => (
                  <Developer data={data} id={id + 1} key={id} />
                ))}
              </VStack>
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Developers;
