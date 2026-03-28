const ImageKit = require('imagekit');

const imagekit = new ImageKit({
  publicKey: process.env.ImageKit_Public_key,
  privateKey: process.env.ImageKit_Private_key,
  urlEndpoint: 'https://ik.imagekit.io/rohan1145',
});

async function uploadFile(buffer){

    const result = await imagekit.upload({
        file: buffer,
        fileName: "image.jpg"
    })
    return result;
}
module.exports = uploadFile;