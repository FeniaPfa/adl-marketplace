import { useEffect, useState } from 'react';
import { Avatar, Box, Divider, Rating, Stack, Typography } from '@mui/material';
import DefaultImg from '/defaultavatar.svg';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../../../config/firebase';

export const Comment = ({ comment }) => {
    const [img, setImg] = useState();

    const getUserAvatar = async () => {
        const imgRef = ref(storage, `users-avatar/${comment.userId}`);
        try {
            const url = await getDownloadURL(imgRef);
            setImg(url);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        if (comment.hasAvatar) {
            getUserAvatar();
        } else {
            setImg(DefaultImg);
        }
    }, []);

    return (
        <>
            <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                <Box p={2} display="flex" gap="2rem">
                    <Avatar sx={{ width: 56, height: 56 }} src={img} alt={comment.name} />
                    <Box>
                        <Typography variant="h5" fontWeight="bold">
                            {comment.name}
                        </Typography>

                        <Rating value={comment.score} readOnly />
                        <Typography color="warning">{comment.text}</Typography>
                    </Box>
                </Box>
            </Stack>
            <Divider />
        </>
    );
};
