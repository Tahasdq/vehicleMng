import React from "react";

const ServiceNew = () => {
  return (
   <div className="custom-container">
   <div className="container">
      {/* <div className="Dashboard_heading">
        <h3>Service</h3>
      </div> */}

      {/* <div className="button-group my-4 mx-3">
        <a href="#" class="btn btn-primary px-5 py-2">
          New
        </a>
        <a href="#" class="btn btn-primary ml-2 px-5 py-2">
          List
        </a>
      </div> */}

      <div className="form form_card row my-5">
        <div class="input-group mb-3 col-md-4 col-sm-12">
          <input
            type="text"
            class="form-control"
            placeholder="Telefone"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group mb-3 col-md-4  col-sm-12">
          <input
            type="text"
            class="form-control"
            placeholder="Candidato"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group mb-3 col-md-4 col-sm-12">
          <input
            type="text"
            class="form-control"
            placeholder="Rua"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3 col-md-4  col-sm-12">
          <input
            type="text"
            class="form-control"
            placeholder="Bairro"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3 col-md-4 col-sm-12">
          <input
            type="text"
            class="form-control"
            placeholder="Cidade"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3 col-md-4 col-sm-12 ">
          <input
            type="text"
            class="form-control"
            placeholder="Referência"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>

      <div className="request_card my-5">
        <div class="dropdown">
          <a
            class="btn border dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Código de Ocorrência
          </a>

          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>

          <a
            class="btn border dropdown-toggle ml-3"
            href="#"
            role="button"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            número de ocorrências
          </a>

          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
        <div class="input-group request-group mb-3 mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Solicitação"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>

      <div className="request_card py-5 my-5">
        <div class="input-group request-group mb-3 mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Descrição"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>

      <div className=" row garison my-5">
        <div className=" col-md-5 col-sm-12 avalible_garison ">
          <h3 className="text-center">Garnição Disponível</h3>
          <div>
            <input type="radio" id="vehicle1" name="vehicle" value="Bike" />
            <label for="vehicle1" className="ml-2"> I have a bike</label>
          </div>
          <div>
            <input type="radio" id="vehicle2" name="vehicle" value="Car" />
            <label for="vehicle2" className="ml-2"> I have a car</label>
          </div>

          <div>
            <input type="radio" id="vehicle3" name="vehicle" value="Boat" />
            <label for="vehicle3" className="ml-2"> I have a boat</label>
          </div>
        </div>

        <div className=" col-md-5 col-sm-12 unavalible_garison ml-5">
          <h3 className="text-center">Garnição Indisponível</h3>

          <ul>
            <li>WOrk</li>
            <li>WOrk</li>
            <li>WOrk</li>

          </ul>
        </div>
      </div>
    </div>

    </div>
  );
};

export default ServiceNew;
