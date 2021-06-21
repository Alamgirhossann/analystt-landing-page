import React from 'react';
import Chart from 'react-google-charts';
import './Competitors.css';

const Competitors = () => {
    return (
        <div className='container-fluid'>
            <div className="wrap-div">
                <div className="competitor-div">
                    <div className="competitor-info">
                        <h5>Competitors Overview</h5>
                        <div className="d-flex justify-content-between">
                            <p>Rank among Competitors</p>
                            <p>#25 in 1,530</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>No. of Competitors</p>
                            <p>0.00</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Total Income</p>
                            <p>4</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Total Funding in Competitors</p>
                            <p>$5.2B</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>No. of Investors in Competitors</p>
                            <p>336</p>
                        </div>
                    </div>

                    <div>
                        <h5 style={{marginLeft:"20px"}}>Frickr’s Competitor Rating amongs its 1530 competitors</h5>
                    <div className='competitors-ratio'>
                        <div>
                            <Chart

                                chartType="PieChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Effort', 'Progress'],
                                    ['overall', 75,],
                                    ['left', 25],

                                ]}
                                options={{
                                    pieHole: 0.8,
                                    pieSliceTextStyle: {
                                        color: 'black',
                                    },
                                    colors: ['#00E9B8', 'lightgray'],
                                    legend: { position: 'bottom', textStyle: { color: 'blue' } }
                                }}
                                rootProps={{ 'data-testid': '1' }}
                            />
                            <p className='text-center'>Overall</p>
                        </div>
                        <div>
                            <Chart

                                chartType="PieChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Effort', 'Progress'],
                                    ['overall', 40,],
                                    ['left', 60],

                                ]}
                                options={{
                                    pieHole: 0.8,
                                    pieSliceTextStyle: {
                                        color: 'black',
                                    },
                                    colors: ['#00E9B8', 'lightgray'],
                                    legend: { position: 'bottom', textStyle: { color: 'blue' } }
                                }}
                                rootProps={{ 'data-testid': '1' }}
                            />
                            <p className='text-center'>Size</p>
                        </div>
                        <div>
                            <Chart

                                chartType="PieChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Effort', 'Progress'],
                                    ['overall', 60,],
                                    ['left', 40],

                                ]}
                                options={{
                                    pieHole: 0.8,
                                    pieSliceTextStyle: {
                                        color: 'black',
                                    },
                                    colors: ['#00E9B8', 'lightgray'],
                                    legend: { position: 'bottom', textStyle: { color: 'blue' } }
                                }}
                                rootProps={{ 'data-testid': '1' }}
                            />
                            <p className='text-center'>Growth</p>
                        </div>
                        <div>
                            <Chart

                                chartType="PieChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Effort', 'Progress'],
                                    ['overall', 70,],
                                    ['left', 30],

                                ]}
                                options={{
                                    pieHole: 0.8,
                                    pieSliceTextStyle: {
                                        color: 'black',
                                    },
                                    colors: ['#00E9B8', 'lightgray'],
                                    legend: { position: 'bottom', textStyle: { color: 'blue' } }
                                }}
                                rootProps={{ 'data-testid': '1' }}
                            />
                            <p className='text-center'>Execution</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Competitors;