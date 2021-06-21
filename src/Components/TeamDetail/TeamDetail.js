import React from 'react';
import linkedin from '../../images/linkedin.png';

const TeamDetail = () => {
    return (
        <div className='container-fluid'>
            <div style={{ backgroundColor: "white", padding: "10px" }}>
                <h5>Team</h5>
                <div className="container">
                    <table className="table table-borderless">
                        <thead style={{ backgroundColor: "#F4F7FC", padding: "10px" }}>
                            <tr>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Title</th>
                                <th className="text-secondary" scope="col">Email</th>
                                <th className="text-secondary" scope="col">LinkedIn ID</th>
                                <th className="text-secondary" scope="col">View Complete Profile</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Avinash Venkat</td>
                                <td>Sr. HR Director</td>
                                <td>avinahs@gmail.com</td>
                                <td>
                                    <img style={{ width: "25px" }} src={linkedin} alt="" />
                                </td>
                                <td>
                                    <button style={{ color: "red", border: "1px solid red", borderRadius: "20px" }}>View Complete Profile</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Avinash Venkat</td>
                                <td>Sr. HR Director</td>
                                <td>avinahs@gmail.com</td>
                                <td>
                                    <img style={{ width: "25px" }} src={linkedin} alt="" />
                                </td>
                                <td>
                                    <button style={{ color: "red", border: "1px solid red", borderRadius: "20px" }}>View Complete Profile</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Avinash Venkat</td>
                                <td>Sr. HR Director</td>
                                <td>avinahs@gmail.com</td>
                                <td>
                                    <img style={{ width: "25px" }} src={linkedin} alt="" />
                                </td>
                                <td>
                                    <button style={{ color: "red", border: "1px solid red", borderRadius: "20px" }}>View Complete Profile</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Avinash Venkat</td>
                                <td>Sr. HR Director</td>
                                <td>avinahs@gmail.com</td>
                                <td>
                                    <img style={{ width: "25px" }} src={linkedin} alt="" />
                                </td>
                                <td>
                                    <button style={{ color: "red", border: "1px solid red", borderRadius: "20px" }}>View Complete Profile</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Avinash Venkat</td>
                                <td>Sr. HR Director</td>
                                <td>avinahs@gmail.com</td>
                                <td>
                                    <img style={{ width: "25px" }} src={linkedin} alt="" />
                                </td>
                                <td>
                                    <button style={{ color: "red", border: "1px solid red", borderRadius: "20px" }}>View Complete Profile</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Avinash Venkat</td>
                                <td>Sr. HR Director</td>
                                <td>avinahs@gmail.com</td>
                                <td>
                                    <img style={{ width: "25px" }} src={linkedin} alt="" />
                                </td>
                                <td>
                                    <button style={{ color: "red", border: "1px solid red", borderRadius: "20px" }}>View Complete Profile</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Avinash Venkat</td>
                                <td>Sr. HR Director</td>
                                <td>avinahs@gmail.com</td>
                                <td>
                                    <img style={{ width: "25px" }} src={linkedin} alt="" />
                                </td>
                                <td>
                                    <button style={{ color: "red", border: "1px solid red", borderRadius: "20px" }}>View Complete Profile</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;