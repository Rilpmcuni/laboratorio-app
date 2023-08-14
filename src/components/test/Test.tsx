import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Chart.js Line Chart",
        },
    },
};

const labels = ["1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11", "12","13", "14", "15", "16"];

export const data = {
    labels,
    datasets: [
        {
            label: "TM-25",
            data: [17, 25, 5, 7, 4, 9],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            fill: "1",
        },
        {
            label: "D3",
            data: [12, 19, 3, 5, 2, 3],
            borderColor: "rgb(13, 122, 25)",
            backgroundColor: "rgb(13, 022, 25)",
            fill: 1,
        },
        {
            label: "TM-25",
            data: [3, 5, 2, 2, 1, 1],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
            fill: 1,
        },
    ],
};

export function Test({ pasa }: { pasa: any }) {
    return (
        <Line
            options={options}
            data={{
                labels,
                datasets: [
                    // {
                    //     label: "TM-25",
                    //     data: [17, 25, 5, 7, 4, 9],
                    //     borderColor: "rgb(53, 162, 235)",
                    //     backgroundColor: "rgba(53, 162, 235, 0.5)",
                    //     fill: "1",
                    // },
                    {
                        label: "D3",
                        data: pasa,
                        borderColor: "rgb(13, 122, 25)",
                        backgroundColor: "rgb(13, 022, 25)",
                        fill: 1,
                    },
                    // {
                    //     label: "TM-25",
                    //     data: [3, 5, 2, 2, 1, 1],
                    //     borderColor: "rgb(53, 162, 235)",
                    //     backgroundColor: "rgba(53, 162, 235, 0.5)",
                    //     fill: 1,
                    // },
                ],
            }}
        />
    );
}
