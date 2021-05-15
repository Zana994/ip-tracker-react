

const TimeBox = ({ time }) => {
    let arr = time.split("/")
    
    return (
        <div className="time_box">
            <span>TIMEZONE</span>
                <div className="contentBox">
                    <p> {arr[0]} / {arr[1]} </p>
                </div>
        </div>
    )
}

export default TimeBox
