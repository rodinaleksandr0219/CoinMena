import { Box, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

const DateBar = () => {
  return (
    <Box padding="0 8px">
      Date range:
      <Menu>
        <MenuButton pl="1">
          Today <TriangleDownIcon w="4" h="4" />
        </MenuButton>
        <MenuList>
          <MenuItem>Weekly</MenuItem>
          <MenuItem>Monthly</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default DateBar;
