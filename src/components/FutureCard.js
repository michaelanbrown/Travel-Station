import './App.css';

function FutureCard({ handleCompleteAdd, futureEvent, future, setFuture, password, passwordData }) {

    function deletePlan(deletedPlan) {
        const updatedPlans = future.filter((plan) => plan.id !== deletedPlan.id);
        setFuture(updatedPlans)
    }

  
    function handleFutureDelete() {
        fetch(`https://travel-station-data.onrender.com/future/${futureEvent.id}`, {
        method: "DELETE",
        })
        .then(r => r.json())
        .then(() => deletePlan(futureEvent))
    }

    
    function handleCompleteDelete() {
        fetch(`https://travel-station-data.onrender.com/future/${futureEvent.id}`, {
        method: "DELETE",
        })
        .then(r => r.json())
        .then(() => deletePlan(futureEvent))
        .then(handleCompleteAdd(futureEvent))
    }
    

    return (
            <div className="Future">
                <br></br>
                { password === passwordData ? <button onClick={handleFutureDelete} className="delete"><span role="img" aria-label="delete">🗑️</span></button> : null }
                <img className="FuturePhoto" src={futureEvent.photo} alt={futureEvent.city} width="75%" height="75%" />
                <p>{futureEvent.city}
                <br></br>
                {futureEvent.state}
                <br></br>
                {futureEvent.date}
                <br></br>
                {futureEvent.reason}
                </p>
                { password === passwordData ? <button onClick={handleCompleteDelete} className="complete">Complete 🗸</button> : null }
                <br></br>
                <br></br>
                <br></br>
            </div>

    )
}

export default FutureCard;