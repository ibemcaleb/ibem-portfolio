const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 4001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static("build"))

app.get('/', (req, res) => {
    res.send("data")
})

app.post('/send', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    })

    const mailOptions = {
        from: `${req.body.fullName}  ${req.body.email}`,
        to: process.env.RECEIVER,
        subject: req.body.subject,
        text: `Email: ${req.body.email} \n\n Message: ${req.body.message}`
        // text: `Subject: ${req.body.subject}\n\n Message: ${req.body.message}`
    }

    async function main() {
        const info = await transporter.sendMail(mailOptions)
        console.log("Message sent: %s", info)
        res.json(info)
    }

    main().catch(console.error)

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         console.log(error)
    //         res.send(error)
    //     } else {
    //         console.log("Email sent")
    //         res.json({status: "success"})
    //     }
    // })
})

app.listen(PORT, (res, err) => {
    if (err) {
        console.log(`Server failed with ${err}`)
    } else {
        console.log(`Server started and listening on ${PORT}`)
    }
})