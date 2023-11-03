"use client"
import React, { useState } from 'react';

const Priority = () => {
    const [selectedPriority, setSelectedPriority] = useState(1);

    const handlePriorityChange = (e) => {
        setSelectedPriority(parseInt(e.target.value));
    };

    return (
        <select
            className="dropdown"
            style={{ width: '100px', height: '30px', marginLeft: '180px', marginTop: '5px' }}
            value={selectedPriority}
            onChange={handlePriorityChange}
        >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
    );
};

export default Priority;
