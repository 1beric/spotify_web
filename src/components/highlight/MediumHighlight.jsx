import { makeStyles } from '@material-ui/core';
import React from 'react';
import Highlight from './Highlight';

const MediumHighlight = ({ title, image, onClicked }) => {
  return (
    <Highlight
      title={title}
      image={image}
      onClicked={onClicked}
      size={64}
      fontIndex={4}
    />
  );
};

export default MediumHighlight;
