import React from "react";
import '../style/ServiciosPage.css'
const ServiciosPage = (props) => {
 return (
        <main class="holder">
          <h2>Servicios</h2>
            <div class="servicio">
                <img src="img/servicios/ferroviario.jpg" alt="Tren"></img>
                <div class="info">
                    <h4>Transporte Ferroviario</h4>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quibusdam molestias nulla a aspernatur eveniet atque soluta culpa! Illo minima ullam sint aperiam aliquam incidunt praesentium id! Quae, ratione a.
                    </p>
                </div>
            </div>
            <div class="servicio">
                <img src="img/servicios/aereo.jpg" alt="avion"></img>
                <h4>Transporte Aereo</h4>
                <div class="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ullam? Rerum commodi aliquid exercitationem illum! Alias quas, magni a maxime, hic nobis eveniet nihil soluta quidem repellendus placeat illum doloribus.</p>
                </div>
            </div>
            <div class="servicio">
                <img src="img/servicios/maritimo.jpg" alt="barco"></img>
                <h4>Transporte Maritimo</h4>
                <div class="info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vel esse, iste quos corporis quae tenetur sint laboriosam labore sapiente est maxime ab atque veniam dolorum possimus perferendis consequuntur culpa.</p>
                </div>
            </div>
            <div class="servicio">
                <img src="img/servicios/terrestre.jpg" alt="camion"></img>
                <h4>Transporte Terrestre </h4>
                <div class="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nostrum. Dolores aliquam voluptas, a error sapiente deserunt iusto rerum. Culpa facilis natus, inventore perspiciatis sit voluptas. Assumenda officiis nam beatae.</p>
                </div>
            </div>
        </main>

    );
};

export default ServiciosPage;