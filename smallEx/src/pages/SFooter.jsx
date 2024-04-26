import React, { useState } from "react";
import "./sfooter.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SFooter({ id }) {
  const [email, setEmail] = useState();

  const subscribeHandler = async (e) => {
    e.preventDefault();
    const data = {
      email,
    };
    await fetch(`https://small-ex-like-olx.vercel.app/user/subscriber/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.json().then((d) => {
        if (res.status === 200) {
          toast.success(d.message);
          setEmail("");
        } else {
          toast.error(d.message);
          setEmail("");
        }
      })
    );
  };
  return (
    <>
      <section className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Info</h4>
            <ul className="links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Compressions</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Collection</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul className="links">
              <li>
                <a href="#">Free Designs</a>
              </li>
              <li>
                <a href="#">Latest Designs</a>
              </li>
              <li>
                <a href="#">Themes</a>
              </li>
              <li>
                <a href="#">Popular Designs</a>
              </li>
              <li>
                <a href="#">Art Skills</a>
              </li>
              <li>
                <a href="#">New Uploads</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="links">
              <li>
                <a href="#">Customer Agreement</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">GDPR</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Media Kit</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter for a weekly dose of news, updates,
              helpful tips, and exclusive offers.
            </p>
            <form onSubmit={subscribeHandler} method="POST">
              <input
                type="text"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <div className="icons">
              <i className="fa-brands fa-facebook-f" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-linkedin" />
              <i className="fa-brands fa-github" />
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
