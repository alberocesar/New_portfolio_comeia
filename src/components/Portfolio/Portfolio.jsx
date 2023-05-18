import React from "react";
import './Portfolio.css'

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";
import portfolio from "./Portfolio.json";

function Portfolio() {

    const image = [
        {
          "link": "https://alberocesar.github.io/Chal-_comeiaAcademy/",
          "image": "https://cdn.pixabay.com/photo/2015/09/04/05/56/sunset-921630_1280.jpg",
          "title": "Card Interativo"
        }
      ]


    return (
        <main>
            {image.map((item, index) => (
                <ItemPortfolio
                    key={index}
                    link={item.link}
                    image={item.image}
                    title={item.title}
                ></ItemPortfolio>
            ))}
        </main>
    )

}


export default Portfolio;