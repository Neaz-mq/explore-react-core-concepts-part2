import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const handleAdd = () => {

        const newTeam = team + 1;
        setTeam(newTeam);

    }

    const handleReduceTeam = () => {
        const reduceTeam = team - 1;
        setTeam(reduceTeam);

    }


    const teamStyle = {
        border: '2px solid red',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'

    }


    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduceTeam}>Reduce</button>
        </div>
    )
}