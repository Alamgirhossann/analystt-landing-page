import React from 'react';

const ComparablesAndPeers = () => {
    return (
        <div className='container-fluid'>
        <div style={{ backgroundColor: "white", padding: "10px" }}>
            <div className="d-flex justify-content-between">
            <h5>Comparabies and Peers</h5>
            <p style={{ color: "red", border: "1px solid red", borderRadius: "20px", padding:"3px" }}>Add to Compare</p>
            </div>
            <table className="table table-borderless">
                <thead style={{ backgroundColor: "#F4F7FC", padding: "10px" }}>
                    <tr>
                        <th className="text-secondary" scope="col">Company Name</th>
                        <th className="text-secondary" scope="col">Revenue</th>
                        <th className="text-secondary" scope="col">Location</th>
                        <th className="text-secondary" scope="col">Age</th>
                        <th className="text-secondary" scope="col">Industry</th>
                        <th className="text-secondary" scope="col">Sub Industry</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" name="name" id="peer"/>
                            <label style={{marginRight:"10px"}} htmlFor="peer"></label>FLIPKART INTERNET  <br/> PRIVATE LIMITED <br/> Flipkart Internet
                        </td>
                        <td>Rs. 250 Cr.</td>
                        <td>Karnataka</td>
                        <td>8 years</td>
                        <td>IT&ITES</td>
                        <td>Online Commerce</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="name" id="peer"/>
                            <label style={{marginRight:"10px"}} htmlFor="peer"></label>FLIPKART INTERNET  <br/> PRIVATE LIMITED <br/> Flipkart Internet
                        </td>
                        <td>Rs. 250 Cr.</td>
                        <td>Karnataka</td>
                        <td>8 years</td>
                        <td>IT&ITES</td>
                        <td>Online Commerce</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="name" id="peer"/>
                            <label style={{marginRight:"10px"}} htmlFor="peer"></label>FLIPKART INTERNET  <br/> PRIVATE LIMITED <br/> Flipkart Internet
                        </td>
                        <td>Rs. 250 Cr.</td>
                        <td>Karnataka</td>
                        <td>8 years</td>
                        <td>IT&ITES</td>
                        <td>Online Commerce</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="name" id="peer"/>
                            <label style={{marginRight:"10px"}} htmlFor="peer"></label>FLIPKART INTERNET  <br/> PRIVATE LIMITED <br/> Flipkart Internet
                        </td>
                        <td>Rs. 250 Cr.</td>
                        <td>Karnataka</td>
                        <td>8 years</td>
                        <td>IT&ITES</td>
                        <td>Online Commerce</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="name" id="peer"/>
                            <label style={{marginRight:"10px"}} htmlFor="peer"></label>FLIPKART INTERNET  <br/> PRIVATE LIMITED <br/> Flipkart Internet
                        </td>
                        <td>Rs. 250 Cr.</td>
                        <td>Karnataka</td>
                        <td>8 years</td>
                        <td>IT&ITES</td>
                        <td>Online Commerce</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="name" id="peer"/>
                            <label style={{marginRight:"10px"}} htmlFor="peer"></label>FLIPKART INTERNET  <br/> PRIVATE LIMITED <br/> Flipkart Internet
                        </td>
                        <td>Rs. 250 Cr.</td>
                        <td>Karnataka</td>
                        <td>8 years</td>
                        <td>IT&ITES</td>
                        <td>Online Commerce</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ComparablesAndPeers;