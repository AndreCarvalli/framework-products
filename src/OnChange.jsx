export default function OnChange({}) {

    function handleChange(event) {
        console.log(`${event.target.name}: ${event.target.value}`);
    }
    return (
        <div>
           

            <select name="filter" onChange = {handleChange}>
                <option value="all">Select a filter...</option>
                <option value="completed">Completed</option>
                <option value="incomplete">Incomplete</option>
            </select>
        </div>
    )
}