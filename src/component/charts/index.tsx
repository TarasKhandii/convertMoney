import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
  },
  {
    name: "Page B",
    uv: 3000,
  },
  {
    name: "Page C",
    uv: 2000,
  },
];

interface ChartsProps {
  data: { data: Array<{ date: string; value: number }>; legend: string };
}
const Charts: React.FC<ChartsProps> = ({ data }) => {
  return (
    <div>
      <LineChart width={600} height={300} data={data.data}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Legend />
      </LineChart>
    </div>
  );
};
export default Charts;
