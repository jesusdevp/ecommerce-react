import React, { useEffect } from 'react'
import { Card } from './Card'

export const ProductosContainer = ({ data, filter, setFilter }) => {

    const filterProduct = (cat) => {
        const actualizarLista = data.filter((x) => x.category.name === cat)
        setFilter(actualizarLista ? actualizarLista : data)
    }

    useEffect(() => {

        setFilter(Object.keys(data).length > 0 ? data : [])

    }, [data])

    return (
        <>
            <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                <button className='btn btn-primary me-2' onClick={() => setFilter(Object.keys(data).length > 0 ? data : [])} >Todo</button>
                <button className='btn btn-primary me-2' onClick={() => filterProduct("Shoes")} >Zapatos</button>
                <button className='btn btn-primary me-2' onClick={() => filterProduct("Furniture")} >Muebles</button>
                <button className='btn btn-primary me-2' onClick={() => filterProduct("Clothes")} >Ropa</button>
                <button className='btn btn-primary me-2' onClick={() => filterProduct("Electronics")} >Electronica</button>
            </div>
            <Card filter={filter} />
        </>

    )
}
