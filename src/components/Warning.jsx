import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function  Warning ()  {
    return (
        <Stack sx={{width:'39%',margin:'auto',textAlign:'center'}} spacing={2}>
            <Alert severity="warning">
                <strong>Choose a stage</strong> from the options above to resolve packets within that stage.
            </Alert>
        </Stack>
    );
}