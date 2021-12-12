import {
  Box,
  VStack,
  Flex,
  Button,
  Heading,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";

import { DeveloperTypes } from "../../utils/types";

interface DeveloperProps {
  data: DeveloperTypes;
  id: number;
}
const Developer = ({ data, id }: DeveloperProps) => (
  <Box px={5} py={3}>
    <Flex direction="row" alignContent="center">
      <Text width="35px" textAlign="left">
        {id}
      </Text>
      <HStack spacing={3} width={"50%"}>
        <Image
          src={data.avatar}
          alt={data.username}
          width="45px"
          borderRadius="45px"
        />
        <Box>
          <Heading
            as="h3"
            fontWeight={"normal"}
            fontSize={24}
            color={"blue.500"}
          >
            <a href={data.url} rel="noopener noreferrer" target="_blank">
              {data.name}
            </a>
          </Heading>
          <Text>{data.username}</Text>
        </Box>
      </HStack>
      <VStack spacing={2} alignItems="flex-start" width="40%">
        <HStack spacing={1} fontSize="12px">
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            role="img"
            fill="#bc4c00"
          >
            <path
              fillRule="evenodd"
              d="M7.998 14.5c2.832 0 5-1.98 5-4.5 0-1.463-.68-2.19-1.879-3.383l-.036-.037c-1.013-1.008-2.3-2.29-2.834-4.434-.322.256-.63.579-.864.953-.432.696-.621 1.58-.046 2.73.473.947.67 2.284-.278 3.232-.61.61-1.545.84-2.403.633a2.788 2.788 0 01-1.436-.874A3.21 3.21 0 003 10c0 2.53 2.164 4.5 4.998 4.5zM9.533.753C9.496.34 9.16.009 8.77.146 7.035.75 4.34 3.187 5.997 6.5c.344.689.285 1.218.003 1.5-.419.419-1.54.487-2.04-.832-.173-.454-.659-.762-1.035-.454C2.036 7.44 1.5 8.702 1.5 10c0 3.512 2.998 6 6.498 6s6.5-2.5 6.5-6c0-2.137-1.128-3.26-2.312-4.438-1.19-1.184-2.436-2.425-2.653-4.81z"
            ></path>
          </svg>
          <span>POPULAR REPO</span>
        </HStack>
        <HStack spacing={1}>
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            role="img"
            fill="#fff"
          >
            <path
              fillRule="evenodd"
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
            ></path>
          </svg>
          <a href={data.popularRepository.url}>
            <Text color="blue.400">
              {data.popularRepository.repositoryName}
            </Text>
          </a>
        </HStack>
        <Text fontSize="12px">{data.popularRepository.description}</Text>
      </VStack>
      <HStack
        alignItems={"flex-start"}
        justifyContent={"flex-end"}
        spacing={3}
        width={"20%"}
      >
        <Button size={"sm"}>Follow</Button>
      </HStack>
    </Flex>
  </Box>
);

export default Developer;
