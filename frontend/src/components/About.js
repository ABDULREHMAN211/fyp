import React from 'react'
import Bar from './Bar'

export default function About() {
  return (
    <div>
    <Bar/>
  <section className="contact" id="contact">
  <div className="content-text">
    <h2>
      Get Info About Us
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
  <div className="content-text mb-5">
    <h2>
      Our Core <span>Features</span>
    </h2>
   
    <div className="list ">
      <li className='my-4'>
        <a href="#">Compatibility and Devices</a>
      </li>
      <li className='my-4'>
        <a href="#">Ensuring Accuracy</a>
      </li>
      <li className='my-4'>
        <a href="#">Saving and Sharing Your AR Designs</a>
      </li>
      <li className='my-4'>
        <a href="#">Troubleshooting AR Issues</a>
      </li>
      <li className='my-4'>
        <a href="#">Privacy and Security</a>
      </li>
      <li className='my-4'>
        <a href="#">Feedback and Improvements</a>
      </li>
    </div>
  </div>
  
</section>
</div>
  )
}
