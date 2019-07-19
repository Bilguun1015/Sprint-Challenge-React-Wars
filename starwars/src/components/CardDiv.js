import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import PersonName from './PersonName';
import PersonHeight from "./PersonHeight"
const ListExampleIcon = () => 
{   
    const [people, setPeople] = useState([])    

    useEffect(()=>{
        axios
            .get(`https://swapi.co/api/people`)
            .then(response=>{
                const data = response.data.results
                console.log(response)
                console.log(data)
                setPeople(data)
            })
    }, []);    
    return (
        <Table celled>
          <Table.Header>
          {people.map(name=>{
            return <PersonName key={name.name} name={name.name}/>
           })}
          </Table.Header>
      
          <Table.Body>
            <Table.Row>
            {people.map(height=>{
                return <PersonHeight key={height.height} height={height.height}/>
            })}
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
              <Table.Cell>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
      
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      )
}

export default ListExampleIcon


