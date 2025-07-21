import React from 'react'

const Footer = () => {
  return (
    <div className='Footer mt-5'>

        <div className='container p-5'>

            <div className='row'>

                <div className='col-4 Logo'>

                    <div>
                        <img width={300} src="images/Imperial_Logo_2x.png" alt="Imperial Logo" />
                    </div>

                    <div className='my-4'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                </div>

                <div className='col-4 Links d-flex justify-content-center'>

                    <div>
                        <div className='mb-4'>
                            <p className='Title'>useful links</p>
                        </div>

                        <div className='my-3'>
                            <p>home</p>
                        </div>

                        <div className='my-3'>
                            <p>about</p>
                        </div>

                        <div className='my-3'>
                            <p>service</p>
                        </div>

                        <div className='my-3'>
                            <p>room</p>
                        </div>
                    </div>

                </div>

                <div className='col-4 Subscribe'>

                    <div className='mb-4'>
                        <p className='Title'>subscribe</p>
                    </div>

                    <div className='my-3'>
                        <p>Don’t miss to subscribe our news, kindly fill the form bellow</p>
                    </div>

                    <div className='Email'>

                        <div>
                            <input className='px-3 py-2' type="text" placeholder='Your Email Here' />
                            <button className='px-3 py-2'><img src="images/Right_Arrow_white.png" alt="Right Arrow" /></button>
                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div className='container my-3'>

            <div className='row'>

                <div className='d-flex col align-items-center'><span className='HorizontalLine'></span></div>

                <div className='d-flex col justify-content-center align-items-center'>

                    <div className='mx-2'><img width={30} src="images/X.png" alt="X" /></div>
                    <div className='mx-2'><img width={30} src="images/Facebook.png" alt="X" /></div>
                    <div className='mx-2'><img width={30} src="images/Box.png" alt="X" /></div>
                    <div className='mx-2'><img width={30} src="images/Pinterest.png" alt="X" /></div>
                    <div className='mx-2'><img width={30} src="images/Browser.png" alt="X" /></div>

                </div>

                <div className='d-flex col align-items-center'><span className='HorizontalLine'></span></div>

            </div>

        </div>

        <div className='container Copyright py-5'>

            <div className='d-flex justify-content-between'>

                <div><p>© 2025 Imperial Grand Hotel. All Rights Reserved.</p></div>


                <div className='d-flex'>
                    <p className='mx-5'>Privacy Policy</p>

                    <p>Terms of Use</p>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Footer