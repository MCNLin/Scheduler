import React from "react";
import DayListItem from "./DayListItem";

/*displays the days, Monday-Friday with spots available*/

export default function DayList(props) {

  const dayArray = props.days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.value}
        setDay={props.onChange}
      />
    );
  });

  return <ul>{dayArray}</ul>;
}
