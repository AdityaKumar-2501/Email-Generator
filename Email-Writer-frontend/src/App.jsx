import { useState } from "react";
import "./App.css";
import {
    Box,
    Button,
    CircularProgress,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import axios from "axios";

function App() {
    const [emailContent, setEmailContent] = useState("");
    const [tone, setTone] = useState("");
    const [generatedReply, setGeneratedReply] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
      setLoading(true);
      setError('');

      try{
        const response = await axios.post("http://localhost:8080/api/email/generate",{
          emailContent,
          tone
        });
        setGeneratedReply(typeof response.data === "string" ? response.data : JSON.stringify(response.data));
      }
      catch(e){
        setError("Failed to generate the email reply. Please Try Again!");
        console.log(e);
      }
      finally{
        setLoading(false);
      }
    }

    return (
        <div>
            <Container maxWidth="md" sx={{ py: 10 }}>
                <Typography variant="h3" gutterBottom>
                    Email Generator
                </Typography>
                <Box sx={{ px: 4 }}>
                    <TextField
                        fullWidth
                        multiline
                        rows={6}
                        variant="outlined"
                        label="Original Email Content"
                        value={emailContent || ""}
                        onChange={(e) => setEmailContent(e.target.value)}
                        sx={{ mb: 2 }}
                    />

                    <FormControl sx={{ width: 200 }}>
                        <InputLabel>Tone (Optional)</InputLabel>
                        <Select
                            value={tone || ""}
                            label={"Tone (Optional)"}
                            onChange={(e) => setTone(e.target.value)}
                        >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value="Professiona">
                                Professional
                            </MenuItem>
                            <MenuItem value="Casual">Casual</MenuItem>
                            <MenuItem value="Friendly">Friendly</MenuItem>
                            <MenuItem value="Sarcastic">Sarcastic</MenuItem>
                        </Select>
                    </FormControl>

                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={!emailContent || loading}
                        sx={{ ml: 5, py: 2 }}
                    >
                        {loading ? (
                            <CircularProgress size={24} />
                        ) : (
                            "Generate Reply"
                        )}
                    </Button>
                </Box>
                {error && error.length > 0 &&
                (
                    
                    <Typography color="error" sx={{ px:4,mt:4,mb: 2 }}>
                        {error}
                    </Typography>
                )}

                {generatedReply && (
                    <Box sx={{ mt: 3 }}>
                        <Typography variant="h5" className="text-bold" gutterBottom>
                            Generated Reply:
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={8}
                            variant="outlined"
                            value={generatedReply || ""}
                            inputProps={{readOnly:true}}
                        />

                        <Button
                          variant="outlined"
                          sx={{mt:2}}
                          onClick={()=> navigator.clipboard.writeText(generatedReply)}
                        >
                          Copy to Clipboard
                        </Button>
                    </Box>
                )}
            </Container>
        </div>
    );
}

export default App;
