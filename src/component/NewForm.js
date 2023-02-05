const NewForm = () => {
    return (
      <div id="container">
        {/* <div id="imgContainer">
          <div id="wrapper" />
        </div>
        <div id="formContainer">
          <div id="iconContainer">
               <img src="Logo.png" id='iconContainer' alt=""/>
          </div>
          <div className="h1 w-100">Thanks for choosing us</div>
          <div className="content">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">First Name</span>{" "}
                  <input type="text" placeholder="First Name" required />
                </div>
  
                <div className="input-box">
                  <span className="details">Last Name</span>
                  <input type="text" placeholder="Last Name" required />
                </div>
                <div className="input-box">
                  <span className="details">company Name</span>
                  <input type="text" placeholder="Company Name" required />
                </div>
                <div className="input-box">
                  <span className="details">Role</span>
                  <input type="text" placeholder="Role" required />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>{" "}
                  <input type="text" placeholder="Phone Number" required />
                </div>
                <div className="input-box">
                  <span className="details">Email Address</span>
                  <input type="text" placeholder="Email Address" required />
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div> */}
        <div className="col-lg-6 col-md-6 col-sm-6" style={{backgroundColor:'white'}}>
             <div id="imgContainer">
                 <div id="wrapper" />
             </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6">
        <div id="formContainer">
          <div id="iconContainer">
               <img src="Logo.png" id='iconContainer' alt=""/>
          </div>
          <div className="h1 w-100">Thanks for choosing us</div>
          <div className="content">
            <form action="#">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">First Name</span>{" "}
                  <input type="text" placeholder="First Name" required />
                </div>
  
                <div className="input-box">
                  <span className="details">Last Name</span>
                  <input type="text" placeholder="Last Name" required />
                </div>
                <div className="input-box">
                  <span className="details">company Name</span>
                  <input type="text" placeholder="Company Name" required />
                </div>
                <div className="input-box">
                  <span className="details">Role</span>
                  <input type="text" placeholder="Role" required />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>{" "}
                  <input type="text" placeholder="Phone Number" required />
                </div>
                <div className="input-box">
                  <span className="details">Email Address</span>
                  <input type="text" placeholder="Email Address" required />
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default NewForm;