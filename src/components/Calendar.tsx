import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  calendar: {
    maxWidth: "100%",
  },
});

const Calendar = () => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(new Date()));
  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarPicker
        date={date}
        views={["day"]}
        className={classes.calendar}
        onChange={(newDate) => setDate(newDate)}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
