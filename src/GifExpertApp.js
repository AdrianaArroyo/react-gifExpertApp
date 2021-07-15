import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Shingeki no Kyojin']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <h3>Buscar</h3>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
            <h3>Resultados de: </h3>
                {
  
                    categories.map((category) =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>
        </>
    );

}

export default GifExpertApp;