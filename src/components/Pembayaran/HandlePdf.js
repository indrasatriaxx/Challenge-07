import React, { useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./HandlePdf.css";
import data_pdf from "./uts-dikonversi.pdf";
import { Button } from "react-bootstrap";

export const HandlePdf = () => {
  const [FilePdf, setFilePdf] = useState([]);

  return (
    <div>
      <div className="pdf-view">
        <div className="text-invoice">
          <p>Invoice</p>
          <Button className='btndownload' variant='outline-primary'>Unduh</Button>
        </div>
        <div className="pdf-show">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
            <Viewer fileUrl={data_pdf} />
          </Worker>
        </div>
      </div>
    </div>
  );
};
