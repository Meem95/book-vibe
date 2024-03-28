

const CustomBarChart= ({ active, payload }) => {
        if (active && payload && payload.length) {
          const { bookName } = payload[0].payload;
          const { totalPages } = payload[0].payload;
          return (
            <div className="custom-tooltip">
              <p>{`Book Name: ${bookName}`}</p>
              <p>{`Book Pages: ${totalPages}`}</p>
            </div>
          );
        }
        return null;
      };
export default CustomBarChart;