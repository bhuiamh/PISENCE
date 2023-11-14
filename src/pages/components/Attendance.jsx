import React from "react";
import useStudentData from "../../providers/useStudentData";
import { FaArrowRight, FaCheckSquare } from "react-icons/fa";
import { ImCheckboxUnchecked } from "react-icons/im";

const DayWiseAttendance = ({ data, day }) => {
  return (
    <div className="flex text-center p-2 flex-col border border-orange-500 min-w-[200px]">
      <h1 className="uppercase text-xl font-semibold text-black">{day}</h1>
      <h4 className="font-bold text-orange-500">{data?.date}</h4>
      <h4 className="text-3xl mx-auto">
        {data?.fn === "present" ? (
          <FaCheckSquare className="text-green-500" />
        ) : (
          <ImCheckboxUnchecked className="text-red-500" />
        )}
      </h4>
      <h4 className="text-3xl mx-auto">
        {data?.an === "present" ? (
          <FaCheckSquare className="text-green-500" />
        ) : (
          <ImCheckboxUnchecked className="text-red-500" />
        )}
      </h4>
    </div>
  );
};

const Attendance = () => {
  const fetchData = useStudentData();
  const attendance = fetchData && fetchData.ATTENDANCE;
  const days = attendance ? Object.keys(attendance) : [];
  // console.log("Attedance>>>>>>>>", days);
  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-orange-500 text-center">
        Hi Pisence, Your 5 days attendance report
      </h1>
      {days?.length && (
        <div className="flex justify-center items-center space-x-5">
          <div className="flex items-center text-orange-500">
            <div className="flex flex-col p-5 gap-2">
              <h1 className="font-semibold">Day</h1>
              <h4 className="font-semibold">Date</h4>
              <h4 className="font-semibold">Day Shift</h4>
              <h4 className="font-semibold">Evening Shift</h4>
            </div>
            <div className="flex flex-col gap-4 text-black">
              <h1 className="font-semibold">
                <FaArrowRight />
              </h1>
              <h4 className="font-semibold">
                <FaArrowRight />
              </h4>
              <h4 className="font-semibold">
                <FaArrowRight />
              </h4>
              <h4 className="font-semibold">
                <FaArrowRight />
              </h4>
            </div>
          </div>
          {days?.map((day) => {
            const data = attendance[day];
            return <DayWiseAttendance data={data} day={day} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Attendance;
