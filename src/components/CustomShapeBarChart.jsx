
const CustomShapeBarChart = ({ fill, x, y, width, height }) => {
    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width},${y + height}
         Z`
      );
    
      return <path d={getPath(x, y, width, height)} fill={fill} />;

};

export default CustomShapeBarChart;
