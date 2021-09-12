const nodemailer = require('nodemailer')
const { Router } = require('express')

const router = Router()

router.post('/send-email', async(req,res) => {

    let {from, to, subject, text, html} = req.body

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'cleora.waters20@ethereal.email',
            pass: '6Y36kNRHwAQ9BHY6CB'
        }
    });

    let mailOptions =  {
        from: from,
        to: to,
        subject: subject,
        text: text,
        html: html
    }

    await transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error)
            res.status(404).json(error.message)
        }else{
            console.log("Email enviado")
            res.status(202).json(req.body)
        }
    })
})

module.exports = router