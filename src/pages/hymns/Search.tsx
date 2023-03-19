import * as React from "react";
import { TextField, Box, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

import { Hymn } from "../../types";

type SearchProps = {
  search: string;
  hymns: Hymn[];
  onPushToHymn: (id: number) => void;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ search, hymns, onSearch, onPushToHymn }: SearchProps) => {
  return (
    <Box position="relative" width="100%">
      <TextField
        fullWidth
        size="small"
        label="Search Hymns"
        value={search}
        onChange={onSearch}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {hymns.length !== 0 && (
        <Box
          px="6px"
          mt="6px"
          right={0}
          left={0}
          position="absolute"
          borderRadius="4px"
          border="1px solid rgba(0, 0, 0, .15)"
          maxHeight="400px"
          overflow="auto"
          sx={{ background: "#fff" }}
        >
          {hymns.map((hymn) => (
            <Box
              py={1}
              key={hymn.id}
              sx={{ cursor: "pointer" }}
              onClick={() => onPushToHymn(hymn.id)}
            >
              {hymn.title}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Search;
