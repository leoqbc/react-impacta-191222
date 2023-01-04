import './index.css';
import axios from 'axios';
import '@fontsource/roboto/500.css';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import MuralItem from './components/MuralItem';
import { useEffect, useState } from 'react';

const apiEndpoint = 'http://localhost:3030';

function App() {
  const [muralItens, setMuralItens] = useState([]);
  const [textField, setTextField] = useState('');
  const [textFieldStatus, setTextFieldStatus] = useState(false);

  const updateMural = () => {
    axios.get(`${apiEndpoint}/murals?user_id=1&_sort=created_at&_order=desc`).then(({ data }) => {
      setMuralItens(data);
    });
  };

  useEffect(() => {
    updateMural();
  }, []);

  const postMural = async () => {
    if (textField.length < 3) {
      return;
    }

    const actualDate = new Date();

    const result = await axios.post(`${apiEndpoint}/murals`, {
      text: textField,
      created_at: actualDate.toISOString(),
      user_id: 1
    });

    if (result.status === 201) {
      setTextField('');
      updateMural();
      return;
    }

    setTextFieldStatus(false);
  };

  return (
    <div className="App">
      <Container>
        <Typography my={3} align="center" variant="h2">My Mural App</Typography>
        
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <form>
              <Stack spacing={2}>
                <TextField
                  error={textFieldStatus}
                  rows={6}
                  multiline
                  fullWidth
                  label="Digite um conteúdo para seu hoje!"
                  variant="filled"
                  value={textField}
                  onChange={(event) => setTextField(event.target.value)}
                />
                <Button onClick={postMural} color="info" variant="contained" size="large">
                  Publicar no mural
                </Button>
              </Stack>
            </form>
          </Grid>
        </Grid>

        <Grid mt={1} container spacing={2}>
          {muralItens.map(item => <MuralItem key={item.id} {...item} />)}
        </Grid>

      </Container>
    </div>
  );
}

export default App;
