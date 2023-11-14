import { useEffect, useState } from "react";
import useStudentData from "../../providers/useStudentData";
import Behavior from "./Behavior";

const Summary = () => {
  const [studentData, setStudentData] = useState(null);
  const data = useStudentData();

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/src/assets/data.json");
  //     const data = await response.json();

  //     setStudentData(data);
  //   } catch (error) {
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <div className="container text-center p-8">
      <h1 className="text-4xl text-center font-bold text-orange-500 mb-4">
        Student Summary
      </h1>

      {/* Attendance Summary */}
      {/* <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Attendance Summary</h2>
        <ul>
          {attendanceSummary?.map((entry) => (
            <li key={entry.day} className="mb-2">
              <span className="font-bold">{entry.day}:</span> {entry.status}
            </li>
          ))}
        </ul>
      </div> */}

      {/* Homework Completion */}
      {/* <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Homework Completion</h2>
        <ul>
          {homeworkCompletion.map((entry) => (
            <li key={entry.subject} className="mb-2">
              <span className="font-bold">{entry.subject}:</span>{" "}
              {entry.completion}%
            </li>
          ))}
        </ul>
      </div> */}

      {/* Behavioral Analytics */}
      {/* <div>
        <useStudentData />
        <h2 className="text-2xl font-bold mb-2">Behavioral Analytics</h2>
        <ul>
          {behavioralAnalytics.map((status, index) => (
            <li key={index} className="mb-2">
              {status}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Summary;
