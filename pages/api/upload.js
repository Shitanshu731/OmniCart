import multer from 'multer';
import { cloudinary } from '../../utils/cloudinary';
import { mongooseConnect } from '@/lib/mongoose';

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({ dest: 'uploads/' }); // Destination folder for uploaded files

export default async function handle(req, res) {
  await mongooseConnect();
  const { method } = req;
  if (method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  upload.single('file')(req, res, async (err) => {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).json({ message: 'Error uploading file' });
    }

    try {
      const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
        folder: 'Shitanshu', // Ensure folder name is a string
      });
      const imageUrl = cloudinaryResponse.secure_url;
      return res.status(200).json({ imageUrl });
    } catch (uploadError) {
      console.error('Error uploading to Cloudinary:', uploadError);
      return res.status(500).json({ message: 'Error uploading image to Cloudinary' });
    }
  });
}
