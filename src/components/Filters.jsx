import { Container, MenuItem, TextField } from '@mui/material';

export const Filters = ({ products, setFilteredList }) => {
    const handleSort = (type) => {
        let sortedList = [...products];
        if (type === 'cheap') {
            sortedList.sort((a, b) => b.price - a.price);
            setFilteredList(sortedList);
        }
        if (type === 'expensive') {
            sortedList.sort((a, b) => a.price - b.price);
            setFilteredList(sortedList);
        }
    };

    const handleSearch = (e) => {
        const query = e.target.value;
        setFilteredList(
            products.filter((item) => item.sport.toLowerCase().includes(query.toLowerCase()))
        );
    };
    const handleSearch2 = (e) => {
        const query = e.target.value;
        setFilteredList(
            products.filter((item) => item.city.toLowerCase().includes(query.toLowerCase()))
        );
    };

    return (
        <>
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
                    <MenuItem value="cheap">Precio Ascendente</MenuItem>
                    <MenuItem value="expensive">Precio Descendiente</MenuItem>
                </TextField>

                <TextField
                    fullWidth
                    label="Buscar por disciplina"
                    placeholder="Karate..."
                    onChange={handleSearch}
                />
                <TextField
                    fullWidth
                    label="Buscar por ciudad"
                    placeholder="Viña del Mar..."
                    onChange={handleSearch2}
                />
            </Container>
        </>
    );
};
