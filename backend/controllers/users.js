const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { PAGE_URL } = require('../config');


usersRouter.post('/', async (request, response) => {

 
  const { firstName, lastName, email, phone, address, password } = request.body;


    
  if (!firstName || !lastName || !email || !phone || !address || !password) {
      return response.status(400).json({error: 'All fields are required'});
  }

  const userExist = await User.findOne({email});

  if (userExist) {
      return response.status(400).json({error: 'The email address is already in use'});
  }

  // const saltRounds = 10;

  // const passwordHash = await bcrypt.hash(password, saltRounds);

  
  const newUser = new User({
      firstName,
      lastName,
      email, 
      phone,
      address,
      password
  });

  const savedUser = await newUser.save();

  
  // const token = jwt.sign( { id: savedUser.id}, process.env.ACCESS_TOKEN_SECRET, {
  //     expiresIn: '1d'
  // });

  const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

await transporter.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to: savedUser.email, // list of receivers
    subject: "¡Bienvenido a Fitmind Academy! 💪", // Subject line
    html: `
    <!DOCTYPE html><html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en"><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><style>
*{box-sizing:border-box}body{margin:0;padding:0}a[x-apple-data-detectors]{color:inherit!important;text-decoration:inherit!important}#MessageViewBody a{color:inherit;text-decoration:none}p{line-height:inherit}.desktop_hide,.desktop_hide table{mso-hide:all;display:none;max-height:0;overflow:hidden}.image_block img+div{display:none} @media (max-width:720px){.mobile_hide{display:none}.row-content{width:100%!important}.stack .column{width:100%;display:block}.mobile_hide{min-height:0;max-height:0;max-width:0;overflow:hidden;font-size:0}.desktop_hide,.desktop_hide table{display:table!important;max-height:none!important}}
</style></head><body style="background-color:#fff;margin:0;padding:0;-webkit-text-size-adjust:none;text-size-adjust:none"><table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff"><tbody><tr><td><table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tbody><tr><td><table 
class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:20px;padding-top:30px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="image_block block-1" width="100%" 
border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad" style="width:100%"><div class="alignment" align="center" style="line-height:10px"><div style="max-width:430px"><a href="${PAGE_URL}" target="_blank" style="outline:none" tabindex="-1"><img src="https://fitmind-academy.com/wp-content/uploads/2023/11/Fitmind-Logo-Black-e1700427894980.png" 
style="display:block;height:auto;border:0;width:100%" width="430" alt="Fitmind Academy" title="Fitmind Academy"></a></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" 
style="mso-table-lspace:0;mso-table-rspace:0;background-color:#47474d;background-image:url(https://img.freepik.com/free-photo/dark-grunge-texture_1048-4055.jpg);background-repeat:no-repeat;background-size:cover"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-size:auto;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" 
width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:40px;padding-left:40px;padding-right:40px;padding-top:40px;vertical-align:middle;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad"><div style="font-family:sans-serif"><div class 
style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#fff;line-height:1.2"><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px"><span style="font-size:30px;"><strong>¡Bienvenido!</strong></span></p></div></div></td></tr></table><table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" 
style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px"><div style="font-family:sans-serif"><div class style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:18px;color:#d8ebf8;line-height:1.5"><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:24px">
<span style="font-size:16px;">Has sido invitado a formar parte de la plataforma online de Fitmind Academy.</span></p></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" 
style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f6f6f6;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-top:40px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="text_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" 
style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px"><div style="font-family:sans-serif"><div class style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2"><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px">
<strong><span style="font-size:24px;">Datos de acceso</span></strong></p></div></div></td></tr></table><table class="text_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word"><tr><td class="pad" style="padding-bottom:10px;padding-left:30px;padding-right:30px;padding-top:10px"><div style="font-family:sans-serif"><div class 
style="font-size:12px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;mso-line-height-alt:18px;color:#555;line-height:1.5"><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:21px"><strong>Usuario</strong>: ${savedUser.email}</p><p style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:21px"><strong>Contraseña</strong>: ${savedUser.password}</p></div></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table><table class="row row-4" align="center" width="100%" border="0" cellpadding="0" 
cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tbody><tr><td><table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;color:#000;width:700px;margin:0 auto" width="700"><tbody><tr><td class="column column-1" width="100%" 
style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-bottom:40px;padding-top:5px;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0"><table class="button_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace:0;mso-table-rspace:0"><tr><td class="pad"><div class="alignment" align="center"><!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${PAGE_URL}/login/" style="height:48px;width:182px;v-text-anchor:middle;" arcsize="105%" stroke="false" fillcolor="#b61e20">
<w:anchorlock/>
<v:textbox inset="0px,0px,0px,0px">
<center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px">
<![endif]-->
<a href="${PAGE_URL}/login/" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#b61e20;border-radius:50px;width:auto;border-top:0px solid transparent;font-weight:undefined;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:8px;padding-bottom:8px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:40px;padding-right:40px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;"><strong>Iniciar sesión</strong></span></span></a>
<!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div></td></tr></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><!-- End --><div style="background-color:transparent;">
    <div style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
        <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 500px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->
            <!--[if (mso)|(IE)]><td align="center" width="500" style=" width:500px; padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                </div>
            </div>
            <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
        </div>
    </div>
</div></body></html>
    `,
  });

  return response.status(201).json('User created. Please verify your inbox.');


});

// usersRouter.patch('/:id/:token', async (request, response) => {
//   try {
//       const token = request.params.token;
//       const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//       const id = decodedToken.id;
//       await User.findByIdAndUpdate(id, { verified: true});
//       return response.sendStatus(200);
//   } catch (error) {

//       // Encontrar el email del usuario
//       const id = request.params.id;
//       const { email } = await User.findById(id);

//       // Firmar el nuevo token 
//       const token = jwt.sign( { id: id}, process.env.ACCESS_TOKEN_SECRET, {
//           expiresIn: '1d'
//       });

//       // Enviar el email
  
//       const transporter = nodemailer.createTransport({
//           host: "smtp.gmail.com",
//           port: 465,
//           secure: true,
//           auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//           },
//         });
  
//   await transporter.sendMail({
//         from: process.env.EMAIL_USER, // sender address
//         to: email, // list of receivers
//         subject: "Please verify your email", // Subject line
//         html: `
//         <head>
        
//           <meta charset="utf-8">
//           <meta http-equiv="x-ua-compatible" content="ie=edge">
//           <title>Please verify your email</title>
//           <meta name="viewport" content="width=device-width, initial-scale=1">
//           <style type="text/css">
//           /**
//            * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
//            */
//           @media screen {
//             @font-face {
//               font-family: 'Source Sans Pro';
//               font-style: normal;
//               font-weight: 400;
//               src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
//             }
//             @font-face {
//               font-family: 'Source Sans Pro';
//               font-style: normal;
//               font-weight: 700;
//               src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
//             }
//           }
//           /**
//            * Avoid browser level font resizing.
//            * 1. Windows Mobile
//            * 2. iOS / OSX
//            */
//           body,
//           table,
//           td,
//           a {
//             -ms-text-size-adjust: 100%; /* 1 */
//             -webkit-text-size-adjust: 100%; /* 2 */
//           }
//           /**
//            * Remove extra space added to tables and cells in Outlook.
//            */
//           table,
//           td {
//             mso-table-rspace: 0pt;
//             mso-table-lspace: 0pt;
//           }
//           /**
//            * Better fluid images in Internet Explorer.
//            */
//           img {
//             -ms-interpolation-mode: bicubic;
//           }
//           /**
//            * Remove blue links for iOS devices.
//            */
//           a[x-apple-data-detectors] {
//             font-family: inherit !important;
//             font-size: inherit !important;
//             font-weight: inherit !important;
//             line-height: inherit !important;
//             color: inherit !important;
//             text-decoration: none !important;
//           }
//           /**
//            * Fix centering issues in Android 4.4.
//            */
//           div[style*="margin: 16px 0;"] {
//             margin: 0 !important;
//           }
//           body {
//             width: 100% !important;
//             height: 100% !important;
//             padding: 0 !important;
//             margin: 0 !important;
//           }
//           /**
//            * Collapse table borders to avoid space between cells.
//            */
//           table {
//             border-collapse: collapse !important;
//           }
//           a {
//             color: #1a82e2;
//           }
//           img {
//             height: auto;
//             line-height: 100%;
//             text-decoration: none;
//             border: 0;
//             outline: none;
//           }
//           </style>
        
//         </head>
//         <body style="background-color: #e9ecef;">
        
//           <!-- start preheader -->
//           <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
//             Please verify your email address.
//           </div>
//           <!-- end preheader -->
        
//           <!-- start body -->
//           <table border="0" cellpadding="0" cellspacing="0" width="100%">
        
//             <!-- start logo -->
//             <tr>
//               <td align="center" bgcolor="#e9ecef">
//                 <!--[if (gte mso 9)|(IE)]>
//                 <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
//                 <tr>
//                 <td align="center" valign="top" width="600">
//                 <![endif]-->
//                 <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
//                   <tr>
//                     <td align="center" valign="top" style="padding: 36px 24px;">
                    
//                     </td>
//                   </tr>
//                 </table>
//                 <!--[if (gte mso 9)|(IE)]>
//                 </td>
//                 </tr>
//                 </table>
//                 <![endif]-->
//               </td>
//             </tr>
//             <!-- end logo -->
        
//             <!-- start hero -->
//             <tr>
//               <td align="center" bgcolor="#e9ecef">
//                 <!--[if (gte mso 9)|(IE)]>
//                 <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
//                 <tr>
//                 <td align="center" valign="top" width="600">
//                 <![endif]-->
//                 <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
//                   <tr>
//                     <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
//                       <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Confirm Your Email Address 👋</h1>
//                     </td>
//                   </tr>
//                 </table>
//                 <!--[if (gte mso 9)|(IE)]>
//                 </td>
//                 </tr>
//                 </table>
//                 <![endif]-->
//               </td>
//             </tr>
//             <!-- end hero -->
        
//             <!-- start copy block -->
//             <tr>
//               <td align="center" bgcolor="#e9ecef">
//                 <!--[if (gte mso 9)|(IE)]>
//                 <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
//                 <tr>
//                 <td align="center" valign="top" width="600">
//                 <![endif]-->
//                 <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
        
//                   <!-- start copy -->
//                   <tr>
//                     <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
//                       <p style="margin: 0;">You're receiving this message because you recently signed up for a account in <strong>Contactly</strong>. Confirm your email address by clicking the button below.</p>
//                     </td>
//                   </tr>
//                   <!-- end copy -->
        
//                   <!-- start button -->
//                   <tr>
//                     <td align="left" bgcolor="#ffffff">
//                       <table border="0" cellpadding="0" cellspacing="0" width="100%">
//                         <tr>
//                           <td align="center" bgcolor="#ffffff" style="padding: 12px;">
//                             <table border="0" cellpadding="0" cellspacing="0">
//                               <tr>
//                                 <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
//                                   <a href="${PAGE_URL}/verify/${id}/${token}" target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">Confirm email</a>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </table>
//                     </td>
//                   </tr>
//                   <!-- end button -->
        
                 
        
//                   <!-- start copy -->
//                   <tr>
//                     <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
//                       <p style="margin: 0;">Cheers,<br> Contactly team</p>
//                     </td>
//                   </tr>
//                   <!-- end copy -->
        
//                 </table>
//                 <!--[if (gte mso 9)|(IE)]>
//                 </td>
//                 </tr>
//                 </table>
//                 <![endif]-->
//               </td>
//             </tr>
//             <!-- end copy block -->
        
        
//           </table>
//           <!-- end body -->
        
//         </body>`,
//       });

//       return response.status(400).json({error: 'The link expired. A new verification email has been sent.'})
//   }
// });

usersRouter.get('/', async (request, response) => {
  const user = request.user;
  const users = await User.find();
  return response.status(200).json(users);
});

module.exports = usersRouter;