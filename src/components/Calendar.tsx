import * as React from "react";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

const Calendar = () => {
  const [date, setDate] = React.useState(new Date());
  return <CalendarComponent onChange={setDate} value={date} />;
};

export default Calendar;
