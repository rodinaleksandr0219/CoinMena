import { Box, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

interface LanguageBarProps {
  name: string;
}

const LanguageBar = ({ name }: LanguageBarProps) => {
  return (
    <Box padding="0 4px">
      {name === "old" ? "Spoken Language" : "Language"}
      <Menu>
        <MenuButton pl="1">
          Any <TriangleDownIcon w="4" h="4" />
        </MenuButton>
        <MenuList>
          <MenuItem>Javascript</MenuItem>
          <MenuItem>React</MenuItem>
          <MenuItem>Python</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageBar;
