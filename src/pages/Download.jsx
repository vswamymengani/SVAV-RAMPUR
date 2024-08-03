import React from 'react';
import PdfViewer from './PdfViewer'; // Import your PDF viewer component

const Download = () => {
  const pdfUrl = '/SVAV-Brochure.pdf'; // URL to your PDF

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href and download attributes
    link.href = pdfUrl;
    link.download = 'SVAV-Brochure.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Simulate a click on the link
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
  };

  return (
    <div>
      <span className="title" onClick={handleDownload}>
        Download Brochure
      </span>
      <a href={pdfUrl} download className="btn btn2">
        Download CV
      </a>
      <div style={{ marginTop: '20px', width: '100%', height: '600px' }}>
        <PdfViewer pdfUrl={pdfUrl} />
      </div>
    </div>
  );
};

export default Download;
