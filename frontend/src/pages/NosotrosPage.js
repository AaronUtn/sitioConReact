import React from "react";
import '../style/nosotrosPage.css'
const NosotrosPage = (props) => {
  return (
    <main className="holder">
      <div className="hostoria">
        <h2>Historia</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="staff">
        <h2>staff</h2>
        <div className="personas">
          <div className="persona">
            <img src="img/nosotros/nosotros1.jpg" alt="Juan Gomez"></img>
            <h5>Juan Gomez</h5>
            <h6>Gerente General</h6>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="persona">
            <img src="img/nosotros/nosotros2.jpg" alt="Persona Dos"></img>
            <h5>Persona Dos</h5>
            <h6>Cargo Dos</h6>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="persona">
            <img src="img/nosotros/nosotros3.jpg" alt="Persona Tres"></img>
            <h5>Persona Tres</h5>
            <h6>Cargo Tres</h6>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="persona">
            <img src="img/nosotros/nosotros4.jpg" alt="Persona Cuatro"></img>
            <h5>Persona Cuatro</h5>
            <h6>Cargo Cuatro</h6>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="persona">
            <img src="img/nosotros/nosotros5.jpg" alt="Persona Cinco"></img>
            <h5>Persona Cinco</h5>
            <h6>Cargo Cinco</h6>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NosotrosPage;
