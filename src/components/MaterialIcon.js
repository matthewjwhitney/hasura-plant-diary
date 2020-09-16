import React from "react";
import * as Icons from "@material-ui/icons";

const MaterialIcon = ({ name }) => {
  const Icon = Icons[name];
  return <Icon />;
};

export default MaterialIcon;
