import React from 'react';
import {Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles'

const About = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.content}>
            <div>
                This is a test E-commerce store.
                Start making your <Link className={classes.link} to="./">shopping!</Link>
            </div>
        </Typography>
    )
}

export default About
