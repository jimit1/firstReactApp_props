import React from "react";
const ListItem = (props) => {
  return <li data-id={props.anotherProp}>{props.passedNumber}</li>;
};
export default ListItem;
