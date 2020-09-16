import React from "react";
import { useQuery, gql } from "@apollo/client";

import query from "./query";
import LoadingDataSnackbars from "../../components/LoadingDataSnackbars";
import { PlantCard } from "../../components";
import { Grid } from "@material-ui/core";

const List = () => {
  const { data, loading, error } = useQuery(
    gql`
      ${query}
    `
  );

  const plants = data?.plant || [];

  return (
    <>
      <Grid container spacing={2}>
        {plants.map((plant) => (
          <Grid item key={plant.id}>
            <PlantCard {...plant} />
          </Grid>
        ))}
      </Grid>
      <LoadingDataSnackbars loading={loading} data={data} error={error} />
    </>
  );
};

export default List;
