import { makeStyles } from '@material-ui/core';
import React from 'react';
import Highlight from './Highlight';

const LargeHighlight = ({ title, image, onClicked }) => {
  return (
    <Highlight
      title={title}
      image={image}
      onClicked={onClicked}
      size={128}
      fontIndex={6}
    />
  );
};

export default LargeHighlight;
