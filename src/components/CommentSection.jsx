import { Box, Button, Container, Divider, Rating, Stack, TextField, Typography } from '@mui/material';
import { doc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import { useUserContext } from '../context/userContext';
import { Comment } from './Comment';

export const CommentSection = ({ productData, myUserInfo, getProduct }) => {
    const { user } = useUserContext();

    const [newComment, setNewComment] = useState({
        score: 0,
        text: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productRef = doc(db, 'products', productData.id);
        try {
            await updateDoc(productRef, {
                comments: [...productData.comments, newComment],
            });
            console.log('Nuevo Comentario');
            getProduct();
        } catch (err) {
            console.error({ err });
        }
    };

    useEffect(() => {
        if (myUserInfo) {
            setNewComment({
                ...newComment,
                userId: myUserInfo.id,
                name: `${myUserInfo.name} ${myUserInfo.apellido}`,
                hasAvatar: myUserInfo.hasAvatar,
            });
        }
    }, [myUserInfo]);

    return (
        <>
            <Divider />

            {(user && user.uid !== productData.userId) && (
                <Container sx={{ margin: '2rem auto' }} component="form" onSubmit={handleSubmit}>
                    <Stack gap="1rem" alignItems="flex-start">
                        <Typography variant="h5" fontWeight="bold">
                            Deja un comentario
                        </Typography>

                        <Rating
                            size="large"
                            value={newComment.score}
                            onChange={(event, newValue) => {
                                setNewComment({ ...newComment, score: newValue });
                            }}
                        />
                        <TextField
                            multiline
                            rows={2}
                            fullWidth
                            placeholder="Comentario..."
                            onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                        />
                        <Button variant="contained" type="submit">
                            Comentar
                        </Button>
                    </Stack>
                </Container>
            )}

            <Box className="commentList" mt="1rem">
                <Typography variant='h5' fontWeight="bold">Comentarios</Typography>
                {productData.comments.map((item, index) => (
                    <Comment key={index} comment={item} />
                )).reverse()}
            </Box>
        </>
    );
};
