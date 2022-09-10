import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => (
    <div ref={ref} className='contactSec'>
        <div className='row contactSecCont center'>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.74330711855302!2d76.1124485458224!3d15.966967712547786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb80ceef7008b61%3A0xfdf8827bc782db7b!2sH%20L%20Kendhuli%20Silk%20Sarees!5e0!3m2!1sen!2sin!4v1662803412243!5m2!1sen!2sin" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
            </div>
            <div className='msg'>
                <form className='col'>
                    <div className='frmgrp col'>
                        <label>Name</label>
                        <input type='text' placeholder='Name' />
                    </div>
                    <div className='frmgrp col'>
                        <label>Phone No</label>
                        <input type='number' placeholder='Phone No' />
                    </div>
                    <div className='frmgrp col'>
                        <label>Message</label>
                        <textarea rows='10' style={{ resize: 'none' }} type='text' placeholder='Enter your message'></textarea>
                    </div>
                    <button>Send</button>
                </form>
            </div>
        </div>
    </div>
))

export default Contact