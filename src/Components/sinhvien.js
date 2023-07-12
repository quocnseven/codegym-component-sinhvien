
function Sinhvien (infomations) {
    console.log(infomations);
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{textAlign: "center"}}>
                <table style={{borderStyle: "solid", borderColor: "black"}}>
                    <tr style={{borderStyle: "solid", borderWidth: 5}}>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    <tr >
                        <td>{infomations.id}</td>
                        <td>{infomations.name}</td>
                        <td>{infomations.age}</td>
                        <td>{infomations.address}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Sinhvien