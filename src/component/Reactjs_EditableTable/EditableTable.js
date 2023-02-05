import React, { useState } from "react";

const EditableTable = () => {
    const [rows, setRows] = useState([
        { id: 1, name: "John Doe", age: 25, weight: 150 },
        { id: 2, name: "Jane Doe", age: 30, weight: 140 },
        { id: 3, name: "Jim Brown", age: 35, weight: 170 },
    ]);

    const handleChange = (e, id) => {
        const newRows = [...rows];
        const index = newRows.findIndex((row) => row.id === id);
        newRows[index][e.target.name] = e.target.value;
        setRows(newRows);
    };

    const calculateMacros = (id) => {
        // Your calculation logic here
        // For example:
        const newRows = [...rows];
        const index = newRows.findIndex((row) => row.id === id);
        newRows[index].protein = newRows[index].weight * 2;
        newRows[index].carbohydrates = newRows[index].weight * 3;
        newRows[index].fat = newRows[index].weight * 0.5;
        setRows(newRows);
    };

    return (
        <>
            <div style={{marginLeft:'10%', marginTop:'5%'}}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Weight (lbs)</th>
                            <th>Protein (g)</th>
                            <th>Carbohydrates (g)</th>
                            <th>Fat (g)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id}>
                                <td>
                                    <input
                                        type="text"
                                        name="name"
                                        value={row.name}
                                        onChange={(e) => handleChange(e, row.id)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="age"
                                        value={row.age}
                                        onChange={(e) => handleChange(e, row.id)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        name="weight"
                                        value={row.weight}
                                        onChange={(e) => handleChange(e, row.id)}
                                        onBlur={() => calculateMacros(row.id)}
                                    />
                                </td>
                                <td>{row.protein}</td>
                                <td>{row.carbohydrates}</td>
                                <td>{row.fat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default EditableTable;
