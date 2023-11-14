import React from "react";
import useStudentData from "../../providers/useStudentData";

const Academic = () => {
  const fetchData = useStudentData();
  const homework = fetchData ? fetchData["homework"] : {};
  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-orange-500 text-center">
        Hi Pisence, Your 5 days home task
      </h1>
      <div className="flex justify-center items-center space-x-5">
        {homework.length
          ? homework.map((subject, i) => (
              <div
                key={i}
                className="flex text-center p-2 flex-col border border-orange-500 w-[200px]"
              >
                <div className="flex justify-center items-center ">
                  <h4 className="first-letter:uppercase my-auto font-bold text-orange-500">
                    {subject}
                  </h4>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Academic;
