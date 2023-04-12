
import { FormGroup, FormControl, InputLabel, Input, Typography, styled, Button, TextField } from "@mui/material";



const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div{
 margin-top:20px;
 
}
`
const AddUser = () => {

    return (
        <Container>
            <Typography variant="h4">Write Task</Typography>
            <FormControl>
                <InputLabel>Title</InputLabel>
                <Input name="name" />
            </FormControl>
            <FormControl>
                <TextField>write something</TextField>
                <Input name="username" />
            </FormControl>
            <FormControl>
                <Button variant="contained" >Add Task</Button>
            </FormControl>
        </Container>

    )
}

export default AddUser;