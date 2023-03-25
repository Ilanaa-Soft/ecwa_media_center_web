import * as React from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import AppContext from "../../state/context";
import Layout from "../../components/Layout";
import Hymn from "./Hymn";
import Search from "./Search";
import HymnsCategoryMenu from "./HymnsCategoryMenu";
import { Hymn as HymnType } from "../../types";

const Hymns = () => {
  const {
    state: { hymns: allHymns },
  } = React.useContext(AppContext);
  const [category, setCategory] = React.useState("english");
  const [search, setSearch] = React.useState("");

  const navigate = useNavigate();
  let searchHymns: HymnType[] = [];

  const handleSelect = (category: string) => {
    setCategory(category);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handlePushToHymn = (id: number) => {
    navigate(`/hymns/${id}`);
  };

  const hymns = allHymns.filter((hymn) => hymn.language === category);

  if (search) {
    const searchNumber = Number(search);

    searchHymns = hymns.filter((hymn) => {
      if (isNaN(searchNumber))
        return hymn.title.toLowerCase().includes(search.toLowerCase());

      return hymn.number.toString().includes(search);
    });
  }

  return (
    <Layout title="Hymns">
      <Box mb={2} sx={{ display: { md: "flex" } }} alignItems="center">
        <Box sx={{ marginBottom: { xs: 1, md: 0 } }} flexGrow={1}>
          <Typography fontSize="18px" fontWeight="500">
            {category === "english" ? "English Hymns" : "Iwe Orin Yoruba"}
          </Typography>
        </Box>

        <Box flexGrow={1} display="flex" justifyContent="space-between">
          <Search
            search={search}
            hymns={searchHymns}
            onSearch={handleSearch}
            onPushToHymn={handlePushToHymn}
          />
          <HymnsCategoryMenu onSelect={handleSelect} />
        </Box>
      </Box>

      <Box
        columnGap={5}
        display="grid"
        sx={{
          marginBottom: { xs: "-35px", sm: 0 },
          gridTemplateColumns: { sm: "repeat(2, 1fr)" },
        }}
      >
        {hymns.map((hymn) => (
          <Hymn key={hymn.id} hymn={hymn} onPushToHymn={handlePushToHymn} />
        ))}
      </Box>
    </Layout>
  );
};

export default Hymns;
