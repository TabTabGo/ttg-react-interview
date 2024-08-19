import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(theme =>
    createStyles({
        emptyMessage: {
            width: '100%',
            textAlign: 'center',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '10px',
        },
    })
);

type EmptyMessageProps = {};

const EmptyMessage: React.FC<EmptyMessageProps> = props => {
    const { } = props;
    const classes = useStyles();

    return (
        <div className={classes.emptyMessage}>
            <Typography variant="h5" color="error">
                No Tasks.
            </Typography>
            <Typography variant="h5">You Can Add Tasks from Add Button</Typography>
        </div>
    );
};

export default EmptyMessage;
