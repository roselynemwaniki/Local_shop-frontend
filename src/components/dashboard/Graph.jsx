import { Bar } from "react-chartjs-2";

const Graph = ({ data }) => {
    return (
        <div className="w-full">
            <Bar
            data={data}
            options={{responsive: true, plugins: { legend: {display: false }}}}
            />  
        </div>
    );
    };
export default Graph;    