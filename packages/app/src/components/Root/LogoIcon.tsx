import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 28,
  },
  path: {
    fill: '#7df3e1',
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 337.46 428.5">
      <path d="M2,4 L2,12 M14,4 L14,12" stroke="#4169E1" stroke-width="2"/>
      <path d="M4,8 Q5,6 6,8 T8,8" fill="#4169E1" />
    </svg>


    

  );
};

export default LogoIcon;
