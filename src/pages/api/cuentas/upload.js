import fs from 'fs'
import multer from 'multer'
import { join } from 'path'

const uploadDir = join(process.cwd(), './public/uploads');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Verificar si el directorio de carga existe y crearlo si no existe
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueFileName = `${Date.now()}_${file.originalname}`;
        cb(null, uniqueFileName);
    },
});

const upload = multer({ storage });

export default async function uploadAPI(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }
    const { image } = req.files;

    if (!image) {
        return res.status(400).json({ error: 'No se proporcionó una imagen' });
    }

    try {
        upload.single('image')(req, res, async (err) => {
        if (err) {
            console.error('Error al subir la imagen:', err);
            return res.status(500).json({ error: 'Error interno del servidor' });
        }

        const imageUrl = `/uploads/${req.file.filename}`;
        res.status(200).json({ imageUrl });
        })
    } catch (error) {
        console.error('Error al subir la imagen:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    };
}
