import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from "recharts";

interface IData {
  date: string;
  value: number;
}

interface ChartsProps {
  data: { data: Array<IData>; legend: string };
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
