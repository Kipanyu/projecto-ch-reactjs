import React from 'react'
import './footer.scss'
import { FaTwitterSquare, FaFacebookMessenger, FaInstagram, FaFacebook } from 'react-icons/fa' 
import {MdEmail} from 'react-icons/md'


export const Pie = () => {
    
    return (
        <footer className='text-center text-lg-start text-muted'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span>Seguinos en:</span>
            </div>
    
            <div>
              <a href='/contacto' className='me-4 text-reset'>
              <FaTwitterSquare/>
              </a>
              
             
              <a href='#s' className='me-4 text-reset'>
              <FaFacebookMessenger/>
              </a>
              <a href='#s' className='me-4 text-reset'>
              <FaInstagram/>
              </a>
              <a href='#s' className='me-4 text-reset'>
                <MdEmail/>
              </a>
              <a href='#s' className='me-4 text-reset'>
                <FaFacebook/>
              </a>
            </div>
          </section>
    
          <section className=''>
            <div className='container text-center text-md-start mt-5'>
              <div className='row mt-3'>
                <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <i className='fas fa-gem me-3'></i>Stompstore
                  </h6>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis orci turpis, rhoncus vel hendrerit a, pharetra et lectus. Suspendisse. 
                  </p>
                </div>
    
                <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Productos</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Distortion
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Compressor
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      delay
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      octaver
                    </a>
                  </p>
                </div>
    
                <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                  <p>
                    <a href='#!' className='text-reset'>
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Help
                    </a>
                  </p>
                </div>
    
                <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <i className='fas fa-home me-3'></i> Calle Falsa 123
                  </p>
                  <p>
                    <i className='fas fa-envelope me-3'></i>
                    info@stompstore.com
                  </p>
                  <p>
                    <i className='fas fa-phone me-3'></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className='fas fa-print me-3'></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>
    
          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            2022
            
          </div>
        </footer>
      );
    }