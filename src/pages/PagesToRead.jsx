
import CustomShapeBarChart from "../components/CustomShapeBarChart";
import { getStoredReadList } from "../utility/localStorage";

const PagesToRead = () => {
   // Fetch the read list data
  const readList = getStoredReadList();

  // Calculate total pages for each book
  const totalPagesByBook = readList.reduce((acc, book) => {
    if (acc[book.bookName]) {
      acc[book.bookName] += book.totalPages;
    } else {
      acc[book.bookName] = book.totalPages;
    }
    return acc;
  }, {});

  // Convert the data into a format suitable for the Custom Shape Bar Chart
  const chartData = Object.keys(totalPagesByBook).map((bookName) => ({
    label: bookName,
    value: totalPagesByBook[bookName],
  }));

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Pages to Read</h1>
      <CustomShapeBarChart data={chartData} />
    </div>
  );
};
export default PagesToRead;