import { useState } from "react";

export default function Calendar() {

  const today = new Date();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  const formatDate = (y, m, d) =>
    `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  const isToday = (day) => 
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const hasEvent = (day) => 
    events[formatDate(year, month, day)];

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  return (

    <Element name="activities" className="flex justify-center min-h-screen items-center px-6">
      <div className="">
        <h2 className="text-2xl font-bold text-center mb-4">Activities</h2>
      </div>

      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth}>
          ◀
        </button>

        <span className="font-semibold">
          {months[month]} {year}
        </span>

        <button onClick={nextMonth}>
          ▶ 
        </button>
      </div>

      <div className="grid grid-cols-7 text-center font-semibold text-sm mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>
    </Element>

  )
}