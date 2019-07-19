import React from "react";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

function PersonName ({name}){
  return (

    <Table.HeaderCell>{name}</Table.HeaderCell>
   
  );
};

export default PersonName;