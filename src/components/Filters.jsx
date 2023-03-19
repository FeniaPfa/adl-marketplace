import { Container, InputAdornment, MenuItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import SortIcon from '@mui/icons-material/Sort';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import PlaceIcon from '@mui/icons-material/Place';

export const Filters = ({ products, setFilteredList, filteredList }) => {
    const [city, setCity] = useState('');
    const [sport, setSport] = useState('');

    const handleSort = (type) => {
        let sortedList = [...filteredList];
        if (type === 'cheap') {
            sortedList.sort((a, b) => b.price - a.price);
            setFilteredList(sortedList);
        }
        if (type === 'expensive') {
            sortedList.sort((a, b) => a.price - b.price);
            setFilteredList(sortedList);
        }
    };

    useEffect(() => {
        let newData = [...products];
        if (sport) {
            newData = newData.filter((item) =>
                item.sport.toLowerCase().includes(sport.toLowerCase())
            );
        }
        if (city) {
            newData = newData.filter((item) =>
                item.city.toLowerCase().includes(city.toLowerCase())
            );
        }
        setFilteredList(newData);
    }, [sport, city]);

    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: '2rem',
                marginBottom: '2rem',
            }}>
            <TextField
                value={'x'}
                select
                fullWidth
                label="Ordenar por"
                onChange={(e) => handleSort(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SortIcon />
                        </InputAdornment>
                    ),
                }}>
                <MenuItem disabled value="x">
                    <em>Ordenar</em>
                </MenuItem>
                <MenuItem value="cheap">Precio Descendiente</MenuItem>
                <MenuItem value="expensive">Precio Ascendente</MenuItem>
            </TextField>

            <TextField
                fullWidth
                label="Buscar por disciplina"
                placeholder="Karate..."
                onChange={(e) => setSport(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SportsMartialArtsIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                fullWidth
                label="Buscar por ciudad"
                placeholder="Viña del Mar..."
                onChange={(e) => setCity(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PlaceIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Container>
    );
};
