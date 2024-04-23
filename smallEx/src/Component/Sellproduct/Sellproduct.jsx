import React from "react";
import "./sellproduct.css";
export default function Sellproduct() {
  return (
    <>
      <div className="container">
        <header>Sell Product </header>
        <form action="#" style={{ height: "600px" }}>
          <div className="form first">
            <div className="details personal">
              <span className="title">Product Details</span>
              <div className="fields">
                <div className="input-field">
                  <label>Product Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required=""
                  />
                </div>

                <div className="input-field">
                  <label>Product Price</label>
                  <input
                    type="number"
                    placeholder="Enter product price"
                    required=""
                  />
                </div>

                <div className="input-field">
                  <label> Select Catogery</label>
                  <select required="">
                    <option disabled="" selected="">
                      Select Catogery
                    </option>
                    <option value="car">Car</option>
                    <option value="mobile">Mobile</option>
                    <option value="Properties">Properties</option>
                    <option value="Bike">Bike</option>
                    <option value="Fashion">Fashion</option>
                    <option value="pets">Pets</option>
                    <option value="electronic">Electronics & Appliances</option>
                    <option value="other">Others</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Upload Product Image1</label>
                  <input
                    type="file"
                    placeholder="upload product img"
                    required=""
                  />
                </div>
                <div className="input-field">
                  <label>Upload Product Image2</label>
                  <input
                    type="file"
                    placeholder="upload product img"
                    required=""
                  />
                </div>
                <div className="input-field">
                  <label>Upload Product Image3</label>
                  <input
                    type="file"
                    placeholder="upload product img"
                    required=""
                  />
                </div>
                <div className="input-field">
                  <label>Product Description </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="details ID">
              <span className="title">Address Details</span>
              <div className="fields">
                <div className="input-field">
                  <label>Address </label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    required=""
                  />
                </div>
                <div className="input-field">
                  <label>Pincode</label>
                  <input
                    type="number"
                    placeholder="Enter your city Pincode"
                    required=""
                  />
                </div>
                <div className="input-field">
                  <label> Select Catogery</label>
                  <select required="" id="city">
                    <option disabled="" selected="">
                      Select City
                    </option>
                    <option value="">Select a state</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Aurangabad">Aurangabad</option>
                    <option value="Solapur">Solapur</option>
                    <option value="Thane">Thane</option>
                    <option value="Amravati">Amravati</option>
                    <option value="Navi Mumbai">Navi Mumbai</option>
                    <option value="Kolhapur">Kolhapur</option>
                    <option value="Akola">Akola</option>
                    <option value="Latur">Latur</option>
                    <option value="Ahmednagar">Ahmednagar</option>
                    <option value="Jalgaon">Jalgaon</option>
                    <option value="Sangli">Sangli</option>
                    <option value="Malegaon">Malegaon</option>
                    <option value="Dhule">Dhule</option>
                    <option value="Ichalkaranji">Ichalkaranji</option>
                    <option value="Chandrapur">Chandrapur</option>
                    <option value="Parbhani">Parbhani</option>
                    <option value="Jalna">Jalna</option>
                    <option value="Bhusawal">Bhusawal</option>
                    <option value="Panvel">Panvel</option>
                    <option value="Satara">Satara</option>
                    <option value="Beed">Beed</option>
                    <option value="Yavatmal">Yavatmal</option>
                    <option value="Khamgaon">Khamgaon</option>
                    <option value="Osmanabad">Osmanabad</option>
                    <option value="Nanded">Nanded</option>
                    <option value="Wardha">Wardha</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="">Next</button>
          </div>
        </form>
      </div>
    </>
  );
}
