import React, { useState, useEffect } from 'react';
import './donation.css'

const items = [
    { id: 1, name: 'Item 1', cost: 10 },
    { id: 2, name: 'Item 2', cost: 20 },
    { id: 3, name: 'Item 3', cost: 30 },
    { id: 4, name: 'Item 4', cost: 40 },
    { id: 5, name: 'Item 5', cost: 50 },
  ];
const Donate = () => {
    const [quantities, setQuantities] = useState(
        items.reduce((acc, item) => {
            acc[item.id] = 0;
            return acc;
        }, {})
    );

    const handleChange = (e, id) => {
        const { value } = e.target;
        setQuantities({
            ...quantities,
            [id]: parseInt(value) || 0,
        });
    };

    const calculateTotal = () => {
        return items.reduce((total, item) => {
            return total + item.cost * quantities[item.id];
        }, 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', quantities, 'Total Amount:', calculateTotal());
        // Handle form submission (e.g., send data to server)
        // Reset quantities
        setQuantities(
            items.reduce((acc, item) => {
                acc[item.id] = 0;
                return acc;
            }, {})
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Cost per Item</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.cost}</td>
                            <td>
                                <input
                                    type="number"
                                    value={quantities[item.id]}
                                    onChange={(e) => handleChange(e, item.id)}
                                    min="0"
                                />
                            </td>
                            <td>USD</td>
                            <td>{item.cost * quantities[item.id]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <strong>Total Donation Amount: {calculateTotal()} USD</strong>
            </div>
            <button type="submit">Donate</button>
        </form>
    );
};
export default Donate
