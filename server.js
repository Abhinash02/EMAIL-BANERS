

// const express = require("express");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = 7000; // Using a single port for everything

// // Set EJS as the templating engine
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // Serve static files from a 'public' directory
// app.use(express.static(path.join(__dirname, "public")));

// // --- Universal Template Data ---
// // This object contains ALL data for ALL templates.
// const templateData = {
//     // Shared data
//     logoUrl: 'https://mrproptekbucket.s3.ap-south-1.amazonaws.com/1756795010079_LOGO_image%201.png',
//     bannerUrl: 'https://mrproptekbucket.s3.ap-south-1.amazonaws.com/1756795197188_BANNER_Bannerimage.png',
//     name: "Lokachi",
//     username: "Lokachi",
    
//     // Data for the Reminder template
//     eventName: "Grand Property Expo 2025",
//     appLink: "#",
//     voucherCode: "3JSQYDXV84GP9EMT",
//     pin: "948064",

//     // Data for OTP template
//     otp: "5720",

//     // Data for Meeting template
//     date: 'Tuesday, September 9, 2025',
//     time: '1:00 PM (IST)',
//     purpose: 'Property consultation and walkthrough',
//     meetingLink: 'https://meet.google.com/xyz-abcd-pqr',
    
//     // Data for Booking Successful template
//     propertyName: "Flex Space, Office Space in Dubai, UAE",
//     possessionDate: "March 2025",
//     unitDetails: "Floor 15, Unit E1",
//     preferences: "Fully Furnished, Sea View",
//     basicPrice: "1,30,00,000",
//     plc: "25,000",
//     giftCard: "30,000",
//     coupon: "25,000",
//     waiver: "0",
//     taxes: "0",
//     totalAmount: "1,18,30,000",
//     bookingAmount: "1,00,000",

//     // Data for Cab Booking template
//     carName: "Sedan (Toyota Etios or similar)",
//     pickupLocation: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
//     dropLocation: "The Taj Mahal Palace, Apollo Bandar, Colaba, Mumbai",
//     bookingTime: "4:00 PM, September 4, 2025",
//     tripType: "One Way",
//     estimatedPrice: "₹850",

//     // Data for Site Visit template (This is the new part that fixes the error)
//     visitDate: "September 8, 2025",
//     visitTime: "11:00 AM (IST)",
//     propertyAddress: "123 Proptek Lane, Innovation City, 400001",
//     contactPerson: "Mr. Alex Ray"
// };

// // Route to render a specific template by name
// app.get("/template/:templateName", (req, res) => {
//     const { templateName } = req.params;
//    const templatePath = path.join(__dirname, "views", `${templateName}.ejs`);

//     if (fs.existsSync(templatePath)) {
//         // The complete templateData object is passed to the template here
//         res.render(templateName, templateData);
//     } else {
//         res.status(404).send("Template not found");
//     }
// });

// // Home page route to list all available templates
// app.get("/", (req, res) => {
//     const viewsDir = path.join(__dirname, "views");
//     fs.readdir(viewsDir, (err, files) => {
//         if (err) {
//             console.error("Could not scan directory:", err);
//             return res.status(500).send("Unable to scan templates directory");
//         }

//         const templateFiles = files
//             .filter((file) => file.endsWith(".ejs"))
//             .map((file) => file.replace(".ejs", ""));

//         let html = `
//       <body style="font-family: Arial, sans-serif; padding: 40px; background-color: #f4f4f9;">
//         <h1 style="color: #333;">Available Email Templates</h1>
//         <ul style="list-style-type: none; padding: 0;">
//     `;

//         templateFiles.forEach((template) => {
//             html += `
//         <li style="margin: 10px 0; background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//           <a href="/template/${template}" style="text-decoration: none; color: #007BFF; font-size: 18px; font-weight: bold;">
//             ${template.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
//           </a>
//         </li>
//       `;
//         });

//         html += `</ul></body>`;
//         res.send(html);
//     });
// });

// app.listen(PORT, () => {
//     console.log(`✅ Server running. View templates at http://localhost:${PORT}`);
// });



const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 7000; // Using a single port for everything

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from a 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// --- Universal Template Data ---
// This object contains ALL data for ALL templates.
const templateData = {
    // Shared data
    logoUrl: 'https://mrproptekbucket.s3.ap-south-1.amazonaws.com/1756795010079_LOGO_image%201.png',
    bannerUrl: 'https://mrproptekbucket.s3.ap-south-1.amazonaws.com/1756795197188_BANNER_Bannerimage.png',
    name: "Lokachi",
    username: "Lokachi",
    
    // Data for the Reminder & Gift Card templates
    eventName: "Grand Property Expo 2025",
    appLink: "#",
    voucherCode: "3JSQYDXV84GP9EMT",
    pin: "948064",

    // Data for OTP template
    otp: "5720",

    // Data for Meeting template
    date: 'Tuesday, September 9, 2025',
    time: '1:00 PM (IST)',
    purpose: 'Property consultation and walkthrough',
    meetingLink: 'https://meet.google.com/xyz-abcd-pqr',
    
    // Data for Booking Successful template
    propertyName: "Flex Space, Office Space in Dubai, UAE",
    possessionDate: "March 2025",
    unitDetails: "Floor 15, Unit E1",
    preferences: "Fully Furnished, Sea View",
    basicPrice: "1,30,00,000",
    plc: "25,000",
    giftCard: "30,000",
    coupon: "25,000",
    waiver: "0",
    taxes: "0",
    totalAmount: "1,18,30,000",
    bookingAmount: "1,00,000",

    // Data for Cab Booking template
    carName: "Sedan (Toyota Etios or similar)",
    pickupLocation: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    dropLocation: "The Taj Mahal Palace, Apollo Bandar, Colaba, Mumbai",
    bookingTime: "4:00 PM, September 4, 2025",
    tripType: "One Way",
    estimatedPrice: "₹850",

    // Data for Site Visit template
    visitDate: "September 8, 2025",
    visitTime: "11:00 AM (IST)",
    propertyAddress: "123 Proptek Lane, Innovation City, 400001",
    contactPerson: "Mr. Alex Ray"
};

// Route to render a specific template by name
app.get("/template/:templateName", (req, res) => {
    const { templateName } = req.params;
   const templatePath = path.join(__dirname, "views", `${templateName}.ejs`);

    if (fs.existsSync(templatePath)) {
        res.render(templateName, templateData);
    } else {
        res.status(404).send("Template not found");
    }
});

// Home page route to list all available templates
app.get("/", (req, res) => {
    const viewsDir = path.join(__dirname, "views");
    fs.readdir(viewsDir, (err, files) => {
        if (err) {
            console.error("Could not scan directory:", err);
            return res.status(500).send("Unable to scan templates directory");
        }

        const templateFiles = files
            .filter((file) => file.endsWith(".ejs"))
            .map((file) => file.replace(".ejs", ""));

        let html = `
      <body style="font-family: Arial, sans-serif; padding: 40px; background-color: #f4f4f9;">
        <h1 style="color: #333;">Available Email Templates</h1>
        <ul style="list-style-type: none; padding: 0;">
    `;

        templateFiles.forEach((template) => {
            html += `
        <li style="margin: 10px 0; background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <a href="/template/${template}" style="text-decoration: none; color: #007BFF; font-size: 18px; font-weight: bold;">
            ${template.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
          </a>
        </li>
      `;
        });

        html += `</ul></body>`;
        res.send(html);
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server running. View templates at http://localhost:${PORT}`);
});