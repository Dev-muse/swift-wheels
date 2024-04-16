
const ToastMsg = ({ message }: any) => {

    return (
        <div  >
            <div className="toast toast-end">

                <div className="alert text-white alert-success">
                    <span>{message}</span>
                </div>
            </div>
        </div>
    )
}

export default ToastMsg