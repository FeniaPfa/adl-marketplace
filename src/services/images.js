import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../config/firebase';

export const getImage = async (id) => {
    const imgRef = ref(storage, `products-img/${id}`);

    try {
        const url = await getDownloadURL(imgRef);
        return url;
    } catch (err) {
        console.log('Error al descagar la imagen', err);
    }
};
