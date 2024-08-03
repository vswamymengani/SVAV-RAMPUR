import React, { useEffect, useState, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';
import './PdfViewer.css'; // Import CSS file for styling

const PdfViewer = ({ pdfUrl }) => {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const canvasRef = useRef(null);

  const renderPage = (num) => {
    if (!pdfDoc) return;

    pdfDoc.getPage(num).then((page) => {
      const scale = 1.5;
      const viewport = page.getViewport({ scale });

      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport,
      };
      page.render(renderContext);
    });
  };

  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    loadingTask.promise.then(
      (pdf) => {
        setPdfDoc(pdf);
        setNumPages(pdf.numPages);
        renderPage(pageNum);
      },
      (error) => {
        console.error('Error loading PDF:', error);
      }
    );
  }, [pdfUrl, pageNum]);

  const handlePrevPage = () => {
    setPageNum((prevPageNum) => Math.max(prevPageNum - 1, 1));
  };

  const handleNextPage = () => {
    setPageNum((prevPageNum) => Math.min(prevPageNum + 1, numPages));
  };

  return (
    <div className="pdf-container">
      <div className="pdf-controls">
        <button onClick={handlePrevPage} disabled={pageNum <= 1}>
          Previous
        </button>
        <span>Page {pageNum} of {numPages}</span>
        <button onClick={handleNextPage} disabled={pageNum >= numPages}>
          Next
        </button>
      </div>
      <div className="pdf-canvas-container">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default PdfViewer;
