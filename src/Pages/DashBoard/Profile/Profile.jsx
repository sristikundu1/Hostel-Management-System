import UseAuth from "../../../Hooks/UseAuth";
import { SlBadge } from "react-icons/sl";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Profile = () => {
    const { user } = UseAuth();
    const [open, setOpen] = React.useState(false);
    const [favoriteFood, setFavoriteFood] = React.useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleInputChange = (event) => {
        setFavoriteFood(event.target.value);
    };

    const handleSubmit = () => {
        handleClose(); // Close the modal
       
    };
    return (

        <div className="max-w-5xl mx-auto">
            <h2 className="text-center font-bold my-5 text-4xl text-[#370617] font-greate mt-12">My Profile</h2>
            <div className="flex flex-row justify-center items-center">
                <div>
                    <img className="w-44  h-48 rounded-xl" src={user?.photoURL} alt="" />

                    <h2 className="font-mono text-xl mt-4">Name:{user?.displayName}</h2>
                    <h2 className="font-mono text-xl mt-4">Email:{user?.email}</h2>
                    <h2 className="font-bold font-mono text-xl mt-4 mb-6">Badge:</h2>
                    <p className="font-bold ">Bronge <SlBadge className="text-6xl font-bold text-[#CD7F32]"></SlBadge></p>

                    <div className="w-56 h-44 bg-red-100 text-gray-800 rounded-lg my-6 p-4">
                        <div>
                            <h2 className="font-bold text-center pt-2 text-2xl text-red-900">About Me</h2>
                            <p className="font-bold mt-4">Favoutire Food:{favoriteFood}</p>
                        </div>


                    </div>
                    <Button onClick={handleOpen}>Edit</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                               write about yourself
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField  id="outlined-basic"
                                label="Favorite Meal"
                                variant="outlined"
                                value={favoriteFood}
                                onChange={handleInputChange} />
                                  <Button onClick={handleSubmit}>Submit</Button>
                                 
                                </Box>
                            </Typography>
                        </Box>
                    </Modal>
                </div>

            </div>

        </div>

    );
};

export default Profile;