

const AddressBox = ({ iptitle }) => {
    return (
        <div className="address_box">
            <span>IP ADDRESS</span>
            <div className="contentBox">
                    <p> {iptitle} </p>
            </div>
        </div>
    )
}

export default AddressBox
