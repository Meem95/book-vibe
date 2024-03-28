
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis,Tooltip, Cell  } from "recharts";
import CustomShapeBarChart from "../components/CustomShapeBarChart";
import { useEffect, useState } from "react";
import { getStoredReadList } from "../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import CustomBarChart from "../components/CustomBarChart";

const PagesToRead = () => {
  const [readListDatas, setReadListData] = useState([]);
  const readLists = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    if (storedReadList) {
      const readListDatas = readLists.filter(readList => storedReadList.includes(readList.bookId));
      setReadListData(readListDatas);
    }

  }, []);
  
  const value = readListDatas
  console.log(value)
 
const colors = ["#8884d8", "#82ca9d", "#ffc658", "#d62728", "#9467bd", "#8c564b", "#e377c2"];
  return (
    <div className="container mx-auto mt-8">
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={readListDatas}>
      
        <XAxis dataKey="bookName"  />
        <YAxis />
        <Tooltip content={<CustomBarChart />} />
           <Bar dataKey="totalPages" shape={<CustomShapeBarChart />} >
            {readListDatas.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
  

  );
};

export default PagesToRead;
