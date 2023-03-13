import { Card, CardContent, Skeleton, Stack } from '@mui/material';
import React from 'react';

export const CardSkeleton = () => {
    return (
        <Card sx={{ width: 350 }}>
            <Skeleton variant="rectangular" width={350} height={200} />
            <CardContent>
                <Stack gap=".6rem">
                    <Skeleton height={25} />
                    <Skeleton height={25} />
                    <Skeleton height={25} />
                </Stack>
            </CardContent>
        </Card>
    );
};
