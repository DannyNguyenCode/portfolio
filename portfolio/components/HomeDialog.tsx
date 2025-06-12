import React from 'react'
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import { DialogActions, DialogContent, Stack } from '@mui/material';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export interface SimpleDialogProps {
  open: boolean;
  link: string;
  downloadLink: string;
}
const HomeDialog = ({ link, title, downloadLink, isButton = true }: { link: string, title: string, downloadLink: string, isButton?: boolean }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  function SimpleDialog(props: SimpleDialogProps) {
    const { open, link, downloadLink } = props;

    const handleClose = () => {
      setOpen(false);
    };



    return (
      <Dialog fullScreen={fullScreen} onClose={handleClose} open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }} >
          {title} Preview
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ padding: { xs: 0, md: '16px 24px' } }} className='content' dividers>
          <Image src={link.replace('pdf', 'png')} alt='resume' width={500} height={500} />
        </DialogContent>
        <DialogActions>
          <Stack width={'100%'} sx={{ margin: '1em' }} direction={'row'} spacing={2} display={'flex'} justifyContent={'space-around'}>
            <Button variant="contained" download href={downloadLink}>
              Download
            </Button>
            <Button variant="contained" target='_blank' rel='noopener noreferrer' href={link}>
              Open New Tab
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    );
  }

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const showAsButton = () => {
    if (isButton) {
      return (
        <Button size='large' variant="contained" onClick={handleClickOpen}>
          {title}
        </Button>)
    } else {
      return (
        <Button sx={{ color: 'white', textTransform: 'none', textAlign: 'left', padding: 0 }} size='large' variant="text" onClick={handleClickOpen}>
          {title}
        </Button>)
    }
  }

  return (
    <div>
      {showAsButton()}


      <SimpleDialog
        open={open}
        link={link}
        downloadLink={downloadLink}
      />
    </div>
  )
}

export default HomeDialog