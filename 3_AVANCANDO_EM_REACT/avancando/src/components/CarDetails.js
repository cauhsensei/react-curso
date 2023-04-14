import React from 'react'

const CarDetails = ({ brand, km, color, newCar }) => {
    return (
        <div>
            <h2>Lista Carros</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>KM: {km}</li>
                <li>Cor: {color}</li>
                {newCar && <p>Este carro é novo!</p>}
            </ul>
        </div>
    )
}

export default CarDetails