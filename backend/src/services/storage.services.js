const ImageKit = require("imagekit");



const imagekit = new ImageKit({
    publickey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlendpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    
});

// console.log(response);

async function fileUpload(file,filename)
{
    const result = await imagekit.upload({
        file: file ,
        filename: filename ,
    });

    return result ;
};

module.exports = {
    fileUpload ,

}