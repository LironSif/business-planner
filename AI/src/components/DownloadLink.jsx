// DownloadLink.jsx
import React from 'react';
import './DownloadLink.css';

const DownloadLink = ({ link }) => (
  <a href={link} download>
    Download File
  </a>
);

export default DownloadLink;
