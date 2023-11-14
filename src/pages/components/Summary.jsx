import React from "react";
import useStudentData from "../../providers/useStudentData";

const Summary = () => {
  const data = useStudentData();

  const calculateAttendance = () => {
    const daysPresent = Object.values(data?.ATTENDANCE || {}).filter(
      (day) => day?.fn === "present"
    ).length;
    const daysAbsent = Object.values(data?.ATTENDANCE || {}).filter(
      (day) => day?.fn === "absent"
    ).length;
    return { daysPresent, daysAbsent };
  };

  const calculateBehavior = () => {
    const goodDays = (data?.["Behavioral Analytics"] || []).filter(
      (behavior) => behavior === "good"
    ).length;
    const badDays = (data?.["Behavioral Analytics"] || []).filter(
      (behavior) => behavior === "bad"
    ).length;
    return { goodDays, badDays };
  };

  return (
    <>
      <h1 className="text-5xl text-center mt-6 text-orange-500 text-semibold ml-3 mr-0">
        Student Summery
      </h1>
      <div className="flex items-center justify-center">
        <div className="mx-auto mt-8">
          <div className="border mb-4 bg-slate-100 hover:bg-slate-300 border-2 shadow-lg border-orange-500 p-3">
            <h1 className="text-3xl text-orange-500 font-bold mb-4">
              Student Information -{" "}
              <span className="text-green-500 font-mono">{data?.NAME}</span>
            </h1>

            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2 text-green-500">
                Attendance
              </h2>
              <p className="font-semibold">
                Days Present: {calculateAttendance().daysPresent}
              </p>
              <p className="font-semibold">
                Days Absent: {calculateAttendance().daysAbsent}
              </p>
            </div>
          </div>

          <div className="mb-4 border bg-slate-100 hover:bg-slate-300 border-2 shadow-lg border-orange-500 p-3">
            <h2 className="text-xl font-bold mb-2 text-green-500">Homework</h2>
            <p className="font-semibold">
              Number of Homework Assignments: {data?.homework?.length || 0}
            </p>
          </div>

          <div>
            <div className="border bg-slate-100 hover:bg-slate-300 border-2 shadow-lg border-orange-500 p-3">
              <h2 className="text-xl font-bold mb-2 text-green-500">
                Behavioral Analytics
              </h2>
              <p className="font-semibold">
                Good Days: {calculateBehavior().goodDays}
              </p>

              <p className="font-semibold">
                Bad Days: {calculateBehavior().badDays}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
