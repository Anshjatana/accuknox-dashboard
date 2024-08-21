'use client'
import { Box } from "@mui/material"
import CachedIcon from '@mui/icons-material/Cached';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { useContext } from "react";
import { DataContext } from "@/app/context/DataContext";

const App = () => {
    const { open, handleClick, handleClose } = useContext(DataContext);
    return (
        <Box sx={{ backgroundColor: '#eaeff6', paddingX: '25px', paddingY:'20px' }}> {/* HomeContainer */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> {/* HomeWrapper */}
                <Box sx={{ fontWeight: 700,fontSize:'18px' }}> {/* MainHeading */}
                    CNAPP Dashboard
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', '& > *': { margin: '0px 8px' } }}> {/* CustomButtons */}
                    <button
                    onClick={handleClick}
                        style={{
                            width: '120px',
                            height: '37px',
                            backgroundColor: 'white',
                            color: 'grey',
                            cursor: 'pointer',
                            border: '2px solid #ddd',
                            borderRadius: '6px',
                            fontSize: '16px'
                        }}
                    > {/* Button */}
                        Add widget <Box component='span'>&#43;</Box>
                    </button>
                    <Box sx={{ padding: '4px', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '6px', color: 'grey' }}>
                        <CachedIcon fontSize="small" /> {/* Refresh */}
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: 'white',
                            height: '31px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            width: '28px',
                            padding: '3px 0px 0px 3px',
                            '& > div': {
                                color: 'grey',
                            },
                        }}
                    > {/* More */}
                        <MoreVertIcon htmlColor='grey' fontSize="small" />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            border: '1px solid darkblue',
                            gap: '2px',
                            padding: '1px 3px',
                            backgroundColor: 'white',
                            borderRadius: '3px',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    > {/* DropDown */}
                        <WatchLaterIcon htmlColor='darkblue' fontSize="small" />
                        <Box sx={{ fontSize: 'x-large', fontWeight: 200, color: 'darkblue' }} component='span'>
                            |
                        </Box> {/* Divider */}
                        <select
                            style={{
                                fontWeight: 600,
                                color: 'darkblue',
                                border: 'none',
                            }}
                        > {/* Select */}
                            <option>Last 2 Days</option>
                            <option>Last Week</option>
                            <option>Last Month</option>
                        </select>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default App
