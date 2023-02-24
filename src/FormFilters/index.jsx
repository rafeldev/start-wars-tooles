import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, Select } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const FormFilters = ({
  selectedFilter,
  handleFilterChange,
  searchTerm,
  handleSearch,
  handleSortAsc,
  handleSortDesc,
}) => {
  return (
    <Flex p="10% 0 2% 0" justifyContent="flex-end">
      <Box mr="10px">
        <Select
          id="filter-select"
          value={selectedFilter}
          onChange={handleFilterChange}
          bg="#FFEE58"
          color={"black"}
          _active={{ color: "black" }}
          fontSize="16px"
          borderColor="#FFEE58"
          borderRadius="none"
        >
          <option value="">Select a gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="n/a">n/a</option>
        </Select>
      </Box>

      <Box mr="10px">
        <Input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name"
          bg="#FFEE58"
          borderColor="#FFEE58"
          borderRadius="none"
          color={"black"}
          autoComplete="off"
          _placeholder={{ color: "black" }}
        />
      </Box>
      <Button
        rightIcon={<ArrowUpIcon />}
        onClick={handleSortAsc}
        colorScheme="teal"
        variant="outline"
        mr="10px"
        borderRadius="none"
      >
        A-Z
      </Button>
      <Button
        rightIcon={<ArrowDownIcon />}
        onClick={handleSortDesc}
        colorScheme="teal"
        variant="outline"
        borderRadius="none"
      >
        Z-A
      </Button>
    </Flex>
  );
};

FormFilters.propTypes = {
  selectedFilter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSortAsc: PropTypes.func.isRequired,
  handleSortDesc: PropTypes.func.isRequired,
};

export default FormFilters;
