

const TimeBox = ({ time }) => {
    
    return (
        <div className="time_box">
            <span>TIMEZONE</span>
                <div className="contentBox">
                    <p> UTC {time} </p>
                </div>
        </div>
    )
}

export default TimeBox
