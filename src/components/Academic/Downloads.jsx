

const Downloads = [
  { id: '1', title: 'About SVAV-Rampur:', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/Svav+About+us.pdf' },
  { id: '2', title: 'SDP-School Development Plan:', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/SVAV-RAMPUR-SDP+Document.pptx' },
  { id: '3', title: 'School Land details:', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/School+Land+Survy+Area+Report.pdf' },
  { id: '4', title: 'School initial plan:', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/SDP-Initial+Plan.pdf' },
  { id: '5', title: 'School Gateway design:', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/School+New+Gateway+Design.pdf' },
  { id: '6', title: 'School Brochure:', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/SVAV-Brochure.pdf' },
  { id: '7', title: 'Admission form :', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/ADMISSION+FORM.pdf' },
  { id: '8', title: 'Academic Calendar:', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/Academic+Calendar.pdf' },
  { id: '9', title: 'Syllabus and Curriculum:', url: 'https://example.com/sample3.pdf' },
  { id: '10', title: 'SVAV Policies and Guidelines:', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/SVAV+School+Policies+and+Guidelines.pdf' },
  { id: '11', title: 'Fee Structure:', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/SVAV+FEE-STRUCTURE.pdf' },
  { id: '12', title: 'Parent Handbook:', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/Parent+Hand+Book.pdf' },
  { id: '13', title: 'Event Information:', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/Bhumipuja-Event+invitation.pdf' },
  { id: '14', title: 'Extracurricular Activities:', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/School+Extracurricular.pdf' },
  { id: '15', title: 'School Annual Report:', url: 'https://svavdocs.s3.ap-southeast-2.amazonaws.com/School+Anual+report-2023-24.pdf' },
];

const PdfList = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Download PDF Files</h2>
      <ul>
        {Downloads.map((file) => (
          <li key={file.id}>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              {file.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PdfList;
