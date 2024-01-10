import React from 'react'
import Bar from './Bar'
export default function Contact() {
  return (
    <div>
      <Bar/>
    <section className="contact" id="contact">
    <div className="content-text">
      <h2>
        Get In <span>Touch</span>
      </h2>
      <p>
      The AR Furniture project aims to revolutionize the furniture retail industry by creating an interactive augmented reality (AR) platform. This web-based platform allows retailers to showcase products in a realistic and immersive manner, enabling customers to visualize and customize furniture within their own living spaces.
      </p>
      <div className="list">
        <li>
          <a href="#">+9200000000000000</a>
        </li>
        <li>
          <a href="#">hafiz@gmail.com</a>
        </li>
        <li>
          <a href="#">Pakistan Punjab Lahore</a>
        </li>
      </div>
    </div>
    <div className="contact-form">
      <form action="#">
        <input type="name" placeholder="Name" required="" />
        <input type="number" placeholder="Phone" required="" />
        <input type="email" placeholder="Email" required="" />
        <textarea
          name=""
          id=""
          cols={35}
          rows={10}
          placeholder="Message"
          defaultValue={""}
        />
        <input
          type="submit"
          defaultValue="Send"
          className="submit"
          required=""
        />
      </form>
    </div>
  </section>
  </div>
  )
}
