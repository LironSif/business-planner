import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const generatePDF = async (text) => {
    const pdfPath = path.resolve(__dirname, `../../output/business-plan-${Date.now()}.pdf`);
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        doc.pipe(fs.createWriteStream(pdfPath));
        doc.text(text, 50, 50);
        doc.end();
        doc.on('finish', () => resolve(pdfPath));
        doc.on('error', reject);
    });
};

export default generatePDF;
