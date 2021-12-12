import {
  Box,
  Flex,
  Menu,
  MenuButton,
  Heading,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";

import { RepositoryTypes, Contributer } from "../../utils/types";

interface RepoInfoProps {
  data: RepositoryTypes;
}
const Repository = ({ data }: RepoInfoProps) => (
  <Box px={5} py={3}>
    <Flex justifyContent="space-between" direction="row" alignContent="center">
      <Flex direction="row" alignItems={"center"} w="85%">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          aria-label="star"
          role="img"
          style={{ fill: "#fff" }}
        >
          <path
            fillRule="evenodd"
            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
          ></path>
        </svg>
        <Heading
          fontWeight={"normal"}
          as="h3"
          marginLeft={2}
          fontSize={24}
          color={"blue.400"}
        >
          <a href={data.url} rel="noopener noreferrer" target="_blank">
            {data.username} / {data.repositoryName}
          </a>
        </Heading>
      </Flex>
      <Menu>
        <MenuButton borderRadius={3} px={2} border="1px" alignItems="center">
          <HStack>
            <svg
              width="16"
              height="16"
              aria-label="star"
              role="img"
              viewBox="0 0 16 16"
              style={{ fill: "#fff" }}
            >
              <path
                fillRule="evenodd"
                d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
              ></path>
            </svg>
            <span>Star</span>
          </HStack>
        </MenuButton>
      </Menu>
    </Flex>
    <Text my={1}>{data.description}</Text>
    <Flex direction="row" justifyContent="space-between" fontSize={"sm"}>
      <HStack spacing={5}>
        <HStack spacing={1}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-label="star"
            role="img"
            style={{ fill: "#fff" }}
          >
            <path
              fillRule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            ></path>
          </svg>
          <span>{data.totalStars}</span>
        </HStack>
        <HStack spacing={1}>
          <svg
            aria-label="fork"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            role="img"
            style={{ fill: "#fff" }}
          >
            <path
              fillRule="evenodd"
              d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
            ></path>
          </svg>
          <span>{data.totalStars}</span>
        </HStack>
        <HStack spacing={1}>
          <Text>Built by</Text>
          {data.builtBy.map((b: Contributer) => (
            <a href={b.url}>
              <Image
                src={b.avatar}
                alt={b.username}
                width="20px"
                borderRadius="100%"
              />
            </a>
          ))}
        </HStack>
      </HStack>
      <HStack spacing={1}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          aria-label="star"
          role="img"
          style={{ fill: "#fff" }}
        >
          <path
            fillRule="evenodd"
            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
          ></path>
        </svg>
        <span>{data.starsSince}</span>
        <span>stars toady</span>
      </HStack>
    </Flex>
  </Box>
);

export default Repository;
