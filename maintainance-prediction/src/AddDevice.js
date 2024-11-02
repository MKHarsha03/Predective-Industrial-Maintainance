import './App.css'


function SensorForm(){
    return(
        <>
            <form>
            <label for="Product ID">Sensor Id:</label><br/>
            <input type="text" id="Product ID" name="Product ID" /><br/>
            <label for="Type">Product Type(L/M/H):</label>
            <input type="text" id="Type" name="Type"/><br/>
            <label for="Air temperature">Air Temperature [K]:</label>
            <input type="number" id="Air temperature" name="Air temperature"/><br />
            <label for="Process temperature">Process Temperature [K]:</label>
            <input type="number" id="Process temperature" name="Process temperature"/><br/>
            <label for="Rotational speed">Rotation Speed [rpm]:</label>
            <input type="number" id="Rotational speed" name="Rotational speed"/><br />
            <label for="Torque">Torque:</label>
            <input type="number" id="Torque" name="Torque"/><br />
            <label for="Tool wear">Tool Wear[minutes]</label>
            <input type="number" id="Tool wear" name="Tool wear"/><br/>
            <input type="submit" value="Submit" />
            </form>
        </>
    );
}

function AddDevice(){
    return(
    <>
    <h1>Welcome Add Sensor to get status</h1>
    <SensorForm />
    </>
    );
}

export default AddDevice;