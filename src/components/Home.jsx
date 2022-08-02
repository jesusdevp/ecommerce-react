import { Products } from './Products'
import Banner from '../../public/assets/hero.jpg'

export const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src={Banner} style={{ height: '95vh', width: '100%' }} className="card-img" alt="Hero" />
                <div className="card-img-overlay d-flex flex-column justify-content-start">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bolder mb-0">Compra ahora</h5>
                        <p className="card-text lead fs-2">Precios increibles</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}
