export default function ContactPage(){
    return (
        <>
    <div className="appointment">
         <div className="container">
            <div className="row">
               <div className="col-md-12 ">
                  <div className="titlepage text_align_center">
                     <h2>Contact Us</h2>
                     <p>If you have any questions, please don't hesitate to contact us. </p>
                  </div>
               </div>
               <div className="col-md-12">
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-6 ">
                           <input className="form_control" placeholder="Your name" type="type" name="name" /> 
                        </div>
                        <div className="col-md-6">
                           <input className="form_control" placeholder="Email" type="type" name="email" /> 
                        </div>
                        <div className="col-md-6">
                           <input className="form_control" placeholder="Phone Number" type="type" name="phoneNumber" />                          
                        </div>
                        <div className="col-md-6">
                           <input className="form_control" placeholder="Select Massage spa" type="type" name="select" />                          
                        </div>
                        <div className="col-md-6 ">
                           <input className="form_control" placeholder="Time" type="type" name="time" /> 
                        </div>
                        <div className="col-md-6">
                           <input type="text" className="form_control" id="my_date_picker" placeholder="Select Date" />
                        </div>
                        <div className="col-md-12">
                           <textarea style={{color: '#d0d0cf'}} className="textarea" placeholder="Message" type="type" name="message">message </textarea>
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