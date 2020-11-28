import React from "react";

import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard"
import { useAxiosGet } from "../hooks/HttpRequests";

function Home(){
    const url = `https://5fbb1da1cc6c9d001624a89c.mockapi.io/api/v1/products?page=1&limit=10`;
    
    let products = useAxiosGet(url)
    
    let content = null

    if(products.error){
        content= <p>
            There be an error 
        </p>
    }

    if(products.loading){
        content= <Loader></Loader>
    }

    if(products.data){
        content = 
        products.data.map((product) => 
            <div key={product.id}>
               <ProductCard 
                    product={product}  
               /> 
            </div>
        )
    }
    return (
        <div>
            <h1 className="font-bold text-2xl mb-3">
                Best Sellers
            </h1>
            {content}
           
        </div>
    )
}

export default Home