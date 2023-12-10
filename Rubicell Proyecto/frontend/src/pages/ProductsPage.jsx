import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import Input from '../components/Input';
import { CartContext } from '../context/CartContext';

const ProductsPage = () => {
    const { products } = useContext(ProductContext);
    const { addToCard } = useContext(CartContext);


    if (!products || products.length === 0) {
        return <p>Cargando...</p>;
    }


    return (
        <>
            <div className='z-10'>
                <div className="flex md:ml-[300px] items-center justify-center md:py-5 flex-wrap text-[40px] font-semibold ">
                    Productos
                </div>
                <hr className='ml-[350px] mr-5' />
                <div className='flex flex-col ' >
                    <div className='md:w-[300px] w-full bg-gray-900 z-0 md:fixed md:top-0 bottom-0 overflow-y-auto text-center md:left-0 right-0 '>
                        <div>
                            <p className='text-white text-2xl items-center text-center lg:pt-[70px] md:pt-[130px] pt-5 pb-5 '>
                                Marcas
                            </p>
                            <div className='text-white items-center text-start md:pl-20'>
                                <label>
                                    <input type="radio" value="" name="celulares" />
                                    <span className='ml-4'> Todos</span>
                                </label><p className='m-2'></p>
                                <Input
                                    value="samsung"
                                    title=" Samsung"
                                    name="celulares"
                                /><p className='m-2'></p>
                                <Input
                                    value="apple"
                                    title=" Apple"
                                    name="celulares"
                                /><p className='m-2'></p>
                                <Input
                                    value="xiaomi"
                                    title=" Xiaomi"
                                    name="celulares"
                                /><p className='m-2'></p>
                                <Input
                                    value="motorola"
                                    title=" Motorola"
                                    name="celulares"
                                /><p className='m-2'></p>
                                <Input
                                    value="huawei"
                                    title=" Huawei"
                                    name="celulares"
                                /><p className='mb-2'></p>

                            </div>

                            <div>

                            </div>
                            <p className='text-white text-2xl items-center text-center pt-6 pb-4 '>
                                Precio
                            </p>
                            <div className='text-white items-center text-start md:pl-20 '>
                                <label>
                                    <input type="radio" value="" name="precio" />
                                    <span className='ml-4'> Todos</span>
                                </label><p className='m-2'></p>

                                <Input
                                    value={500}
                                    title=" S. /0 - 500"
                                    name="precio"
                                /><p className='m-2'></p>
                                <Input
                                    value={1000}
                                    title=" S/. 500 - 1000"
                                    name="precio"
                                /><p className='m-2'></p>
                                <Input
                                    value={1500}
                                    title=" S/. 1000 - 1500"
                                    name="precio"
                                /><p className='m-2'></p>
                                <Input
                                    value={5000}
                                    title=" S/. 1500 a más"
                                    name="precio"
                                /><p className='mb-2'></p>
                            </div>
                            <div>
                                <p className='text-white text-2xl items-center text-center  pt-6 pb-4 '>
                                    Colores
                                </p>
                                <div className='text-white items-center text-start md:pl-20 '>
                                    <label>
                                        <input type="radio" value="" name="colores" />
                                        <span className='ml-4'> Todos</span>
                                    </label><p className='m-2'></p>
                                    <Input
                                        value="blanco"
                                        title=" Blanco"
                                        name="colores"
                                    /><p className='m-2'></p>
                                    <Input
                                        value="negro"
                                        title=" Negro"
                                        name="colores"
                                    /><p className='m-2'></p>
                                    <Input
                                        value="azul"
                                        title=" Azul"
                                        name="colores"
                                    /><p className='m-2'></p>
                                    <Input
                                        value="gris"
                                        title=" Gris"
                                        name="colores"
                                    /><p className='m-2'></p>
                                    <Input
                                        value="rosado"
                                        title=" Rosado"
                                        name="colores"
                                    /><p className='mb-2'></p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <section
                        id="Project"
                        className="items-center md:ml-[350px] sm:ml-[70px] sm:mr-12   mx-auto grid sm:grid-cols-2 lg:grid-cols-2 grid-cols-1 md:grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 justify-items-center justify-center md:gap-y-20 lg:gap-x-14 gap-14 mt-10 mb-5"
                    >
                        {products.map((product) => (
                            <div key={product.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <Link to={`/products/${product.id}`}>
                                    <img
                                        src={product.url_imagen}
                                        alt="Product"
                                        className="h-80 w-72 object-cover rounded-t-xl"
                                    />
                                </Link>
                                <div className="px-4 py-3 w-72">
                                    <span className="text-gray-400 mr-3 uppercase text-xs">{product.marca}</span>
                                    <Link to={`/products/${product.id}`}>
                                        <p className="text-lg font-bold text-black truncate block capitalize">{product.titulo}</p>
                                    </Link>

                                    <div className="flex items-center">
                                        <p className="text-lg font-semibold text-black cursor-auto my-3">S/. {product.precio}</p>
                                        <del>
                                            <p className="text-sm text-gray-600 cursor-auto ml-2">S/. {product.precioantiguo}</p>
                                        </del>
                                        <div className="ml-auto">
                                            <svg onClick={() => addToCard(product, product.id)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus cursor-pointer" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </div >
            </div >




        </>
    )
}

export default ProductsPage