import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import React, { useState } from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

Chart.register(CategoryScale)

const Dashboard = () => {
    const chartDataa = [
        {
            id: 1,
            month: 'Jan',
            events: 20,
            userLost: 823
        },
        {
            id: 2,
            month: 'Feb',
            events: 10,
            userLost: 345
        },
        {
            id: 3,
            month: 'Mar',
            events: 5,
            userLost: 555
        },
        {
            id: 4,
            month: 'Apr',
            events: 12,
            userLost: 4555
        },
        {
            id: 5,
            month: 'May',
            events: 6,
            userLost: 234
        },
        {
            id: 5,
            month: 'June',
            events: 12,
            userLost: 234
        }
    ];
    const [chartData, setChartData] = useState({
        labels: chartDataa.map((data) => data.month),
        datasets: [
            {
                label: "Orders Received",
                data: chartDataa.map((data) => data.events),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "pink",
                    "red",
                    "#f3ba2f",
                    "#2a71d0",
                    "purple"
                ],
                borderColor: "black",
                borderWidth: 1
            }
        ]
    });

    return (
        <div className="grid grid-cols-2 items-center gap-24 ">
            <div>
                <Pie
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Order in last six months"
                            }
                        },
                        animation: {
                            duration: 3000
                        },
                        // responsive: true,
                        // maintainAspectRatio: false,
                    }}
                />
            </div>
            <div>
                <Bar
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Order in last six months"
                            },
                            legend: {
                                display: false
                            }
                        },
                        animation: {
                            duration: 3000
                        }
                    }}
                />
            </div>
            <div>
                <Line
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Order in last six months"
                            },
                            legend: {
                                display: false
                            }
                        },
                        animation: {
                            // tension: {
                            //     duration: 1000,
                            //     easing: 'linear',
                            //     from: 1,
                            //     to: 0,
                            //     loop: true
                            // },
                            duration: 4000
                        }
                    }}
                />
            </div>
            <div>
                <Doughnut
                    data={chartData}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Order in last six months"
                            },
                            legend: {
                                display: false
                            }
                        },
                        animation: {
                            duration: 4000
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Dashboard;