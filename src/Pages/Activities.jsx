import { Element } from "react-scroll";
import { useState, useEffect } from "react";

export default function Activities() {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];

  /* ===============================
     🔁 RECURRING EVENTS (MONTH-DAY)
     =============================== */
  const recurringEvents = {
    "02-20": [
      {
        title:
          "Open House (Morong Fire Station is open for selected pre-schools and public)",
        venue: "Morong Central Fire Station",
        host: "Morong Fire Station",
      },
    ],
    "02-23": [
      {
        title:
          "Open House (Morong Fire Station is open for selected pre-schools and public)",
        venue: "Morong Central Fire Station",
        host: "Morong Fire Station",
      },
    ],
    "02-24": [
      {
        title:
          "Open House (Morong Fire Station is open for selected pre-schools and public)",
        venue: "Morong Central Fire Station",
        host: "Morong Fire Station",
      },
    ],
    "02-25": [
      {
        title:
          "Open House (Morong Fire Station is open for selected pre-schools and public)",
        venue: "Morong Central Fire Station",
        host: "Morong Fire Station",
      },
    ],
    "02-27": [
      {
        title: "Art Contest",
        venue: "Likas Museum",
        host: "Morong Fire Station",
      },
    ],
    "03-01": [
      {
        title: "Quad Media / Tarpaulin Posting",
        venue: "Within AOR",
        host: "Morong Fire Station",
      },
      {
        title: "Simultaneous Motorcade",
        venue: "To Be Announced",
        host: "OPD",
      },
    ],
    "03-02": [
      {
        title: "Hosting of Flag Raising for FPM Activity Announcement",
        venue: "Municipality of Morong",
        host: "Morong Fire Station",
      },
    ],
    "03-03": [
      {
        title: "Unity Walk / Kick-Off",
        venue: "OPD",
        host: "OPD",
      },
    ],
    "03-07": [
      {
        title:
          "FRESCO / Urban Fire Olympics (Barangay & High Dense Occupancy Mini Olympics)",
        venue: "University of Rizal System Quadrangle",
        host: "Morong Fire Station",
      },
    ],
    "03-09": [
      {
        title: "Provincial Road Show",
        venue: "Robinsons Antipolo",
        host: "OPD",
      },
    ],
    "03-10": [
      {
        title: "Simultaneous Career Talk",
        venue: "To Be Announced",
        host: "OPD",
      },
    ],
    "03-11": [
      {
        title: "Simultaneous Zumba",
        venue: "To Be Announced",
        host: "OPD",
      },
    ],
  };

  /* ===============================
     🧠 GENERATE EVENTS FOR CURRENT YEAR
     =============================== */
  const events = Object.entries(recurringEvents).reduce(
    (acc, [monthDay, list]) => {
      acc[`${year}-${monthDay}`] = list;
      return acc;
    },
    {}
  );

  const formatDate = (y, m, d) =>
    `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  const todayKey = formatDate(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  /* AUTO SELECT TODAY IF MAY EVENT */
  useEffect(() => {
    if (events[todayKey]) {
      setSelectedDate(todayKey);
    }
  }, [todayKey, events]);

  const isToday = (day) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const hasEvent = (day) => events[formatDate(year, month, day)];

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  /* 🔮 UPCOMING EVENTS (NEXT 5, AUTO NEXT YEAR) */
  const upcomingEvents = Object.keys(events)
    .map((d) => new Date(d))
    .filter((d) => d >= today)
    .sort((a, b) => a - b)
    .slice(0, 5)
    .map(
      (d) =>
        `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
          2,
          "0"
        )}-${String(d.getDate()).padStart(2, "0")}`
    );

  return (
    <Element
      name="activities"
      className="min-h-screen px-6 md:px-10 py-20"
    >
      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">
          Activities & Programs
        </h2>
        {/* <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Official calendar of fire prevention activities, emergency response
          operations, trainings, and community programs conducted by the
          BFP Morong Fire Station.
        </p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* 📅 CALENDAR */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">Activities Calendar</h3>

          <div className="flex items-center justify-between mb-4">
            <button onClick={prevMonth}>◀</button>
            <span className="font-semibold">
              {months[month]} {year}
            </span>
            <button onClick={nextMonth}>▶</button>
          </div>

          <div className="grid grid-cols-7 text-center font-semibold text-sm mb-2">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2 text-center">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={i} />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const key = formatDate(year, month, day);

              return (
                <div
                  key={day}
                  onClick={() => setSelectedDate(key)}
                  className={`p-2 rounded cursor-pointer
                    ${isToday(day) ? "bg-red-600 text-white font-bold" : ""}
                    ${events[key] ? "border border-red-500" : "hover:bg-red-100"}
                  `}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        {/* 📋 EVENT DETAILS */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-bold mb-4">Event Details</h3>

          {selectedDate && events[selectedDate] ? (
            <ul className="space-y-4">
              {events[selectedDate].map((event, index) => (
                <li key={index} className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold">{event.title}</h4>
                  <p className="text-sm mt-1">
                    <span className="font-semibold">Venue:</span>{" "}
                    {event.venue}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Host:</span> {event.host}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <p className="font-semibold mb-2">Upcoming Events</p>
              <ul className="space-y-2 text-sm">
                {upcomingEvents.map((date) => (
                  <li key={date}>
                    📅 {date} — {events[date][0].title}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </Element>
  );
}
