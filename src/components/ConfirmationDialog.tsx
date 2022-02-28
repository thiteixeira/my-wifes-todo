import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

interface IDialogProps {
  children: JSX.Element | string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  onConfirm: () => void;
  title: string;
}

export const ConfirmDialog = ({
  children,
  isOpen,
  setOpen,
  onConfirm,
  title,
}: IDialogProps): JSX.Element => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setOpen(false)}
      aria-labelledby='confirm-dialog'
    >
      <DialogTitle id='confirm-dialog'>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          variant='outlined'
          onClick={() => setOpen(false)}
          // color="secondary"
        >
          Cancel
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            setOpen(false);
            onConfirm();
          }}
          color='error'
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
