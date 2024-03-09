import React from "react";

const ServiceNew = () => {
  return (
    <div className="container_fluid">
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

      <div className="form form_card row">
        <div class="input-group mb-3 col-md-4 col-sm-12">
          <input
            type="text"
            class="form-control"
            placeholder="Phone Number"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group mb-3 col-md-4  col-sm-12">
          <input
            type="text"
            class="form-control"
            placeholder="Applicant"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group mb-3 col-md-4 col-sm-12">
          <input
            type="text"
            class="form-control"
            placeholder="Street"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3 col-md-4  col-sm-12">
          <input
            type="text"
            class="form-control"
            placeholder="Neighborhood"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3 col-md-4 col-sm-12">
          <input
            type="text"
            class="form-control"
            placeholder="City"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3 col-md-4 col-sm-12 ">
          <input
            type="text"
            class="form-control"
            placeholder="Reference"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>


      <div className="request_card">

        <div class="dropdown">
          <a class="btn border dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            Occurance code
          </a>

          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>

          <a class="btn border dropdown-toggle ml-3" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            Occurance Number
          </a>

          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div class="input-group request-group mb-3 mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Request Quote"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>

      <div className="request_card py-5">
        <div class="input-group request-group mb-3 mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Description"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>

<div className=" row garison">


<div className=" col-md-6 col-sm-12 avalible_garison">
  
  <h3 className="text-center">Avalible Gariosn</h3>

  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
  <label for="vehicle1"> I have a bike</label><br/>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
  <label for="vehicle2"> I have a car</label><br/>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
  <label for="vehicle3"> I have a boat</label><br/><br/>
</div>

<div className=" col-md-6 col-sm-12 unavalible_garison">

<h3 className="text-center">Unavaliable Garison</h3>

  <ul>
    <li>WOrk</li>
    <li>WOrk</li>
    <li>WOrk</li>
    <li>WOrk</li>
    <li>WOrk</li>
  </ul>
</div>








</div>












    </div>
  );
};

export default ServiceNew;
