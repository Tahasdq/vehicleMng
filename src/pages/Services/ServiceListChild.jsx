import React from "react";

const ServiceListChild = () => {
  return (
    <div className="container">
      <div className=" row garison my-5 popa">
        <div className=" col-md-4 col-sm-12 Record_1">
         
          <ul>
            <li>
              <h4> Phone: 0987654</h4>
            </li>
            <li>
              <h4> Applicant: hunain</h4>
            </li>
            <li>
              <h4> Occurrance_Num: 9898</h4>
            </li>
          </ul>
        </div>
        <div className=" col-md-4 col-sm-12  Record_2">
          <ul>
            <li>
              <h4> Adress: Herabad</h4>
            </li>
            <li>
              <h4> Neighborhood: jjjjjj</h4>
            </li>
            <li>
              <h4> City: hyderabad,</h4>
            </li>

            <li>
              <h4> Refrence: huiasfgd</h4>
            </li>
          </ul>
        </div>
      </div>

      <div className=" row request_card py-5 my-5">
        <div class=" col-sm-12 col-md-12 input-group request-group mb-3 mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Request"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>

      <div className="loki"></div>

      <div className=" row request_card py-5 mb-5" style={{marginTop: "10px"}}>
        <div class=" col-sm-12 col-md-12 input-group request-group mb-3 mt-3">
          <input
            type="text"
            class="form-control"
            placeholder="Description"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceListChild;
