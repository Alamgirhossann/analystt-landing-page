import React from 'react';

const CreditRating = () => {
    return (
        <div className='container-fluid'>
            <div style={{ backgroundColor: "white", padding: "10px" }}>
                <h5>Credi Rating</h5>
                <table className="table table-borderless">
                    <thead style={{ backgroundColor: "#F4F7FC", padding: "10px" }}>
                        <tr>
                            <th className="text-secondary" scope="col">Agency</th>
                            <th className="text-secondary" scope="col">Date</th>
                            <th className="text-secondary" scope="col">Rating</th>
                            <th className="text-secondary" scope="col">Type</th>
                            <th className="text-secondary" scope="col">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ICRA</td>
                            <td>20-Oct-2020</td>
                            <td>AAA</td>
                            <td>Long Term</td>
                            <td><a href="3">View Detail</a></td>
                        </tr>
                        <tr>
                            <td>Marketing</td>
                            <td>20-Oct-2020</td>
                            <td>AAA</td>
                            <td>Long Term</td>
                            <td><a href="3">View Detail</a></td>
                        </tr>
                        <tr>
                            <td>CRISIL</td>
                            <td>20-Oct-2020</td>
                            <td>AAA</td>
                            <td>Long Term</td>
                            <td><a href="3">View Detail</a></td>
                        </tr>
                        <tr>
                            <td>ICRA</td>
                            <td>20-Oct-2020</td>
                            <td>AAA</td>
                            <td>Long Term</td>
                            <td><a href="3">View Detail</a></td>
                        </tr>
                        <tr>
                            <td>Marketing</td>
                            <td>20-Oct-2020</td>
                            <td>AAA</td>
                            <td>Long Term</td>
                            <td><a href="3">View Detail</a></td>
                        </tr>
                        <tr>
                            <td>ICRA</td>
                            <td>20-Oct-2020</td>
                            <td>AAA</td>
                            <td>Long Term</td>
                            <td><a href="3">View Detail</a></td>
                        </tr>
                        <tr>
                            <td>CRISIL</td>
                            <td>20-Oct-2020</td>
                            <td>AAA</td>
                            <td>Long Term</td>
                            <td><a href="3">View Detail</a></td>
                        </tr>
                        <tr>
                            <td>ICRA</td>
                            <td>20-Oct-2020</td>
                            <td>AAA</td>
                            <td>Long Term</td>
                            <td><a href="3">View Detail</a></td>
                        </tr>

                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CreditRating;