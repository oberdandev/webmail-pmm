import express from 'express';
import dotenv from 'dotenv'
const app = express();
dotenv.config();

import nodemailer from 'nodemailer'; 

const port = 4000;
app.listen(port, () => console.log('listening on http://localhost:%i', port));

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.USER_PASS,
  },
})

async function enviaMensagem (firstName, completeName, email) {
  const info = await transporter.sendMail({
    from: 'NUMOA <numoa.disaoeste@pmm.am.gov.br>',
    to: 'oberdan.sousa@pmm.am.gov.br',
    subject: "Teste de envio de email automatico para chamados!",
    text: "Este foi um envio de email automatico para teste do site!",
  })

  console.log('message sent: ', info)
}

enviaMensagem();