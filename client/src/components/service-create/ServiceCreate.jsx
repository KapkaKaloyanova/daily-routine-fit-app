export default function ServiceCreate() {
  return (
    <>
      <div className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="titlepage text_align_center">
                <h2>Create a Routine</h2>
                <p>
                  How are you feeling today? Choose your exercises, nutrition
                  and meditations for a perfect day.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-6 ">
                    <input
                      className="form_control"
                      placeholder="Name of the routine"
                      type="type"
                      name="Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="Email"
                      type="type"
                      name="Email"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="Phone Number"
                      type="type"
                      name="Phone Number"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form_control"
                      placeholder="Select Massage spa"
                      type="type"
                      name="Select"
                    />
                  </div>
                  <div className="col-md-6 ">
                    <input
                      className="form_control"
                      placeholder="Time"
                      type="type"
                      name="Time"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form_control"
                      id="my_date_picker"
                      placeholder="Select Date"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      style={{ color: "#d0d0cf" }}
                      className="textarea"
                      placeholder="Message"
                      type="type"
                      name="message"
                      defaultValue={"message "}
                    />
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Send Now</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
