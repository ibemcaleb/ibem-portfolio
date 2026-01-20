// import React, {useState} from 'react'
import '../contact.css'
import { FaEnvelope, FaPhone, FaSearchLocation } from 'react-icons/fa'
// import { FaUserAlt, FaTimes } from 'react-icons/fa'
// import { GiEnvelope } from 'react-icons/gi'
// import { IoLocation } from 'react-icons/io'

const Contact = () => {
    // const initialMail = {
    //     fullName: "",
    //     email: "",
    //     subject: "",
    //     message: ""
    // }

    // const [mailMessage, setMailMessage] = useState(initialMail)
    // const [mailResponse, setMailResponse] = useState(undefined)
    // const [isSending, setIsSending] = useState(false)

    // const handleChange = (e) => {
    //     setMailMessage({
    //         ...mailMessage,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     setIsSending(true)
    //     try {
    //         let res = await fetch("/send", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(mailMessage)
    //         })
    //         let data = await res.json()
    //         console.log(data)

    //         if (data) {
    //             setMailResponse(true)
    //             setMailMessage(initialMail)
    //         } else {
    //             setMailResponse(false)
    //         }
    //     } catch(error) {
    //         console.log(error)
    //     } finally {
    //         setTimeout(() => setMailResponse(undefined), 10000)
    //         setIsSending(false)
    //     }
    // }

  return (
    <div className='Contact' id='contact'>
        <div className="contact-info">
            <h2>Contact Information</h2>
            <span>
                <FaPhone />
                <p>+234 803 388 6920</p>
            </span>
            <span>
                <FaEnvelope />
                <p>iocaleb25@gmail.com (IOCALEB25@GMAIL.COM)</p>
            </span>
            <span>
                <FaSearchLocation />
                <p>Lagos, Nigeria</p>
            </span>
        </div>
        {/* <form action="send" method="post" className='form' onSubmit={handleSubmit}>
            <h2>Send Me A Mail</h2>
            
            <div className="input-wrapper">
                <i className="icon">
                    <FaUserAlt />
                </i>

                <input
                    className="input-field"
                    type="text"
                    placeholder="Name"
                    name="fullName"
                    autoComplete="off"
                    required
                    value={mailMessage.fullName}
                    onChange={handleChange}
                />
            </div>
            <div className="input-wrapper">
                <i className="icon">
                    <FaEnvelope />
                </i>

                <input
                    className="input-field"
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    required
                    value={mailMessage.email}
                    onChange={handleChange}
                />
            </div>
            <div className="input-wrapper">
                <i className="icon">
                    <GiEnvelope />
                </i>

                <input
                    className="input-field"
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    autoComplete="off"
                    required
                    value={mailMessage.subject}
                    onChange={handleChange}
                />
            </div>

            <div className="input-wrapper">
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required
                    value={mailMessage.message}
                    onChange={handleChange}
                ></textarea>
            </div>
                <input 
                    type="submit" 
                    className="send-btn" 
                    value={isSending ? 'Sending...' : 'Send'} 
                    // disabled={isSending}
                />
            <div className="input-wrapper">  
                {mailResponse === undefined ? '' : mailResponse === true ? (
                    <span className="success-msg">
                        <p>Thank you for your message! I respond within 24hrs.</p> 
                        <FaTimes onClick={() => setMailResponse(undefined)} />
                    </span>
                ) : (
                    <span className="fail-msg">
                        <p>Message not sent. Please try again.</p> 
                        <FaTimes onClick={() => setMailResponse(undefined)} />
                    </span>
                )}
            </div>
            

        </form> */}
    </div>
  )
}

export default Contact