import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import PersonName from './PersonName';
import PersonHeight from "./PersonHeight"
import PersonPlanet from "./PersonPlanet"
import PersonStarShips from "./PersonStarShips"


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
          <Table.HeaderCell>Name:</Table.HeaderCell>
          {people.map(name=>{
            return <PersonName key={name.name} name={name.name}/>
           })}
          </Table.Header>
      
          <Table.Body>
            <Table.Row>
            <Table.Cell>Height:</Table.Cell>
            {people.map(height=>{
                return <PersonHeight key={height.height} height={height.height}/>
            })}
            </Table.Row>
            <Table.Row>
            <Table.Cell>Home Planet:</Table.Cell>
            {people.map(home=>{
                return <PersonPlanet url={home.homeworld}/>
            })}
            </Table.Row>
            <Table.Row>
            <Table.Cell>Mass:</Table.Cell>
            {people.map(mass=>{
                return <PersonStarShips mass={mass.mass}/>
            })}
            </Table.Row>
          </Table.Body>
      
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='11'>
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


