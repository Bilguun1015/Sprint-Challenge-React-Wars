import React from "react";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

function PersonPlanet ({url}){
  return (
    <Table.Cell><a href={url}> Click Here</a></Table.Cell>

  );
};

export default PersonPlanet;
