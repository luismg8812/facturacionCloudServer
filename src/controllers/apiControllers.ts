import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import path from 'path';



class ApiControllers {



  public async sendMail(req: Request, res: Response) {
    console.log(req.body);
    let html = req.body.html;
    let email = req.body.emailCliente;
    let xml_64 = req.body.xml_64;
    let xml_name = req.body.xml_name;
    let pdf_name = req.body.pdf_name;
    let pdf_64 = req.body.pdf_64;
    
    
    let transporter = nodemailer.createTransport({
      host: "mail.effectivesoftware.com.co",
      pool: true,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'facturacion_electronica@effectivesoftware.com.co',
        pass: 'Luismg88121234'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    let ruta=__dirname.replace("\controllers","public\\images\\");
    
     html =html+ `<b/><img src="${ruta+'logo.png'}" height="42" width="42">`
     html =html+ `<b/><img src="${ruta+'nice.jpeg'}" height="42" width="42">`
console.log(html);
    await transporter.sendMail({
      from: '"Facturacion Effective" <facturacion_electronica@effectivesoftware.com.co>', // sender address
      to: email, // list of receivers
      subject: "Factura Electrónica Effective", // Subject line

      html: html, // html body
      attachments: [
        {
          filename: 'logo.png',
          path: ruta+'logo.png',
          cid: 'logo.png' 
        },
        {
          filename: 'nice.jpeg',
          path: ruta+'nice.jpeg',
          cid: 'nice.png' 
        },
        {
          filename: xml_name,
          content: xml_64,
          encoding: 'base64'
        }/*,
        {
          filename: pdf_name,
          content: pdf_64,
          encoding: 'base64'
        }*/
      ]
    }, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });


    res.json({ "code": 200, "messaje": "info.messajeId" });
  }


}
export const apiControllers = new ApiControllers();