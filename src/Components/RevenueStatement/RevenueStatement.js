import React from 'react';
import './RevenueStatement.css';
import Chart from "react-google-charts";

const RevenueStatement = () => {
    return (
        <div className='container-fluid'>
            <div className="revenue-statement">
                <div className="chart">
                    <h5>Revenue, Gross Profit, Net Profit After Tax</h5>
                    <Chart
                        width={'500px'}
                        height={'300px'}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Year', 'Percentage'],
                            ["2013", 200],
                            ["2014", 400],
                            ["2015", 600],
                            ["2016", 900],
                            ['2017', 1300]
                        ]}
                        options={{
                           
                            bars: 'vertical', // Required for Material Bar Charts.
                            axes: {
                              y: {
                                0: { side: 'top', label: 'Percentage'} // Top x-axis.
                              }
                            },
                            bar: { groupWidth: "90%" }
                        }}
                        // For tests
                        rootProps={{ 'data-testid': '2' }}
                    />
                </div>
                <div className="profit">
                    <h5>Profit and Loss Statement</h5>
                    <p style={{ backgroundColor: "#F4F7FC" }}>MAR 2019</p>
                    <div className="d-flex justify-content-between">
                        <p>Total Revenue Operation</p>
                        <p>63401.20 Cr.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Total Cost Sales</p>
                        <p>0.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Total Income</p>
                        <p>77913.36 Cr.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Total Operating Expenses</p>
                        <p>74550.06 Cr.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Profit Before Tax</p>
                        <p>3363.31 Cr.</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Total Taxes</p>
                        <p>0.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Net Profit After Tax</p>
                        <p>3363.31 Cr.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RevenueStatement;