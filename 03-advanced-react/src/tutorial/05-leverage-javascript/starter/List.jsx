import { Person } from './Person';
import {people} from "../../../data";

const List = () => {
  return (
    <div>{people.map((person) => {
      return<Op   person={person}  />
    })}</div>
  )
}
export default List