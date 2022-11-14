const Data = (props) => {
    const info = props;

    return (
        <>
            <table className="table">
                <tbody>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{info.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Full Name</th>
                        <td>{info.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Address</th>
                        <td>
                            {info.address} {info.address2}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">City</th>
                        <td>{info.city}</td>
                    </tr>
                    <tr>
                        <th scope="row">Province</th>
                        <td>{info.province}</td>
                    </tr>
                    <tr>
                        <th scope="row">Postal Code</th>
                        <td>{info.postalcode}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Data;
