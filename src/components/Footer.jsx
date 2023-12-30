import React from "react";

const Footer=()=>{

    return(
        <div className=" bg-purple-700 ">
        <div className="flex justify-between text-purple-300 pt-8 mx-20">
            <div>
                <h3>Join Our newsletter</h3>
                <h4>we'll send you a nice letter once per week.No span</h4>
            </div>
            <div>
                <form>
                    <input type="email" placeholder="Enter your email" className="rounded-md mx-2 px-1 py-1"/>
                    <button className="rounded-md px-1 py-2 text-sm text-white font-semibold bg-purple-500">Subscribe</button>
                </form>
            </div>
        </div>
        <hr className="pl-4 w-full h-px my-8 bg-purple-500 border-0"></hr>
        <div className="flex mx-20 gap-60 text-purple-300 mt-5 mb-5 ">
       
          <div>
          <ul>
            <li>Home</li>
            <li>Experience</li>
            <li>Videos</li>
            <li>Deals</li>
            <li>Food</li>
            <li>Travel</li>
          </ul>
          </div>
          <div>
          <ul>
          <li>Social</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>YouTube</li>
          </ul>
          </div>
          <div>
          <ul>
          <li>About Us</li>
          <li>Advertise</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Get In Touch</li>
          <li>Team</li>
          </ul>
          </div>
          <div>
          <ul>
          <li>Originals</li>
          <li>Press</li>
          </ul>
          </div>

        </div>
        <hr className="pl-4 w-full h-px my-8 bg-purple-500 border-0"></hr>
        <div className="flex justify-between pb-5 text-purple-300 mx-20">
            <div>
                <h3>Untitled UI</h3>
            </div>
            <div>
                <h4>2023-ALL rights reserved</h4>
            </div>
        </div>
        </div>
    )
}

export default Footer;