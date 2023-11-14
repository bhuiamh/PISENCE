import { useEffect, useState } from "react";

const useStudentData = () => {
  const [studentData, setStudentData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("./src/assets/data.json");
      const data = await response.json();

      setStudentData(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return studentData;
};

export default useStudentData;
