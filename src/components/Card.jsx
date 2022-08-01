import { NavLink } from 'react-router-dom'

export const Card = ({ filter }) => {


    return (
        <>
            {filter.map((product) => (

                <div className="col-md-3 mb-4" key={product.id}>
                    <div className="card h-100 text-center p-4">
                        <img src={product.images[0]} className="card-img-top" alt={product.title} height='250px' />
                        <div className="card-body">
                            <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                            <p className="card-text lead fw-bold">${product.price}</p>
                            <NavLink to={`/products/${product.id}`} className="btn btn-primary">Comprar</NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
