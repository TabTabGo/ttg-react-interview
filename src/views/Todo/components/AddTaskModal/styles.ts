import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: 400,
      height : 250,
      backgroundColor: theme.palette.background.paper,
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: 10,
      boxShadow: theme.shadows[24],
      padding: theme.spacing(2, 4, 3),
    },
    title: {
      color: theme.palette.text.secondary,
      fontSize: 30,
    },
  })
);
