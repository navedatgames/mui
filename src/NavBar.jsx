import {Box, Typography} from '@mui/material';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const NavBar = ()=>{
    return(
    <Box
    sx = {{
        height:'3.5rem',
        bgcolor:"secondary.main",
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    }}>
        <Typography variant='h3'>Nexus</Typography>
        
                <Stack sx = {{
                    display:'flex',
                alignItems: 'center',
                justifyContent: 'space-between'

                }}direction="row" spacing={3}>
                    <Badge badgeContent={10} color="primary">
                        <MailIcon color="action" />
                    </Badge>
                    <Badge sx={{ mx: 2 }} badgeContent={6} color="primary">
                        <ShoppingCartIcon />
                    </Badge>
                <Avatar >NK</Avatar>
                </Stack>
           
    </Box>
    )
}
export default NavBar;
