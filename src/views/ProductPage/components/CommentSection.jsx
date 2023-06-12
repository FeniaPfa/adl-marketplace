import { useEffect, useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { useUserContext } from '../../../context';
import { Box, Button, Container, Divider, Rating, Stack, TextField, Typography } from '@mui/material';
import { EmptyAlert } from '../../../common/components';
import { Comment } from './Comment';

export const CommentSection = ({ productData, myUserInfo, setProductData }) => {
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
            setProductData({ ...productData, comments: [...productData.comments, newComment] });
            setNewComment({ score: 0, text: '' });
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
            <Divider sx={{ marginY: '1rem' }} />

            {user && user.uid !== productData.userId && (
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
                            required
                            value={newComment.text}
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

            <Container className="commentList" mt="1rem">
                <Typography variant="h5" fontWeight="bold">
                    Comentarios
                </Typography>
                <Box marginY="2rem">{productData.comments.length === 0 && <EmptyAlert width="md" type="comments" />}</Box>
                {productData.comments.map((item, index) => <Comment key={index} comment={item} />).reverse()}
            </Container>
        </>
    );
};
