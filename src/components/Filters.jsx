import { Container, MenuItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export const Filters = ({ products, setFilteredList, filteredList }) => {

    const [city, setCity] = useState("")
    const [sport, setSport] = useState("")

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
        let newData = [...products]
        if(sport) {
            newData = newData.filter(item => item.sport.toLowerCase().includes(sport.toLowerCase()))
        }
        if(city){
            newData= newData.filter(item => item.city.toLowerCase().includes(city.toLowerCase()))
        }
        setFilteredList(newData)
    },[sport, city])

    return (

            <Container
                maxWidth="md"
                sx={{ display: 'flex', flexDirection: 'row', gap: '3rem', marginBottom: '2rem' }}>
                <TextField
                    value={'x'}
                    select
                    fullWidth
                    label="Ordenar por"
                    onChange={(e) => handleSort(e.target.value)}>
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
                />
                <TextField
                    fullWidth
                    label="Buscar por ciudad"
                    placeholder="Viña del Mar..."
                    onChange={(e) => setCity(e.target.value)}
                />
            </Container>

    );
};
