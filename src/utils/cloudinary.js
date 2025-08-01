// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs"





// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET 
// });


// const uploadOnCloudinary = async (localFilePath) =>{
//     try {
//         if(!localFilePath) return null

//         // upload the file on cloudinary 
//         const response = await cloudinary.uploader.upload(localFilePath,{
//             resource_type: "auto"
//         })

//         // file has been uploaded successfully 
//         console.log('file is uploaded on cloudinary', response.url)
//         return response;
//     } catch (error) {
//         fs.unlinkSync(localFilePath) //remove the locally saved temp file as the upload operation got failed
//         return null;
//     }
// }


// export {uploadOnCloudinary}



import dotenv from "dotenv";
dotenv.config({ path: "./.env" }); //  Load env first

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


// console.log("Cloudinary ENV LOADED:", {
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file uploaded successfully
    console.log("Cloudinary Upload Response:", response);
    fs.unlinkSync(localFilePath); // remove from local storage
    return response;
  } catch (error) {
    console.error(" Cloudinary Upload Error:", error);
    return null;
  }
};

export { uploadOnCloudinary };

