import React from 'react';
import Chart from 'react-google-charts';
import './Compliance.css';

const Compliance = () => {
    return (
        <div className='container-fluid'>
            <div className="wraper-div">
                <h5 style={{padding:"10px"}}>Compliance</h5>
                <div className="compliance-grid">
                    <div>
                        <Chart
                            width={'400px'}
                            height={'400px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Finish'],
                                ['On Time Filling', 58],
                                ['Late Filling', 42],
                               
                            ]}
                            options={{
                                title: 'GST',
                                colors: ['#00E9B8', '#00A9F3'],
                                legend:{position: 'bottom', textStyle: {color: 'blue'}}
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </div>
                    <div>
                    <Chart
                            width={'400px'}
                            height={'400px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Finish'],
                                ['On Time Filling', 55],
                                ['Late Filling', 45],
                               
                            ]}
                            options={{
                                title: 'PF',
                                colors: ['#00E9B8', '#00A9F3'],
                                legend:{position: 'bottom', textStyle: {color: 'blue'}}
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </div>
                    <div>
                        
                    <Chart
                            width={'400px'}
                            height={'400px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Task', 'Finish'],
                                ['On Time Filling', 48],
                                ['Late Filling', 52],
                               
                            ]}
                            options={{
                                title: 'TSD',
                                colors: ['#00E9B8', '#00A9F3'],
                                legend:{position: 'bottom', textStyle: {color: 'blue'}}
                            }}
                            rootProps={{ 'data-testid': '1' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compliance;