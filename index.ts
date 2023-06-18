import PDFParser from "pdf2json";

export interface PdfTextDetail {
  T: string;
}

export interface PdfText {
  x: number;
  y: number;
  w: number;
  R: PdfTextDetail[];
}

export interface PdfPage {
  Texts: PdfText[];
}

export interface PdfData {
  Pages: PdfPage[];
}

export const pdf2Text = async (localPdf: string): Promise<string[]> => {
  const pdfData: PdfData = await new Promise<PdfData>((resolve, reject) => {
    const pdfParser = new PDFParser();
    pdfParser.on("pdfParser_dataError", (errData: unknown) => {
      reject(errData);
    });
    pdfParser.on("pdfParser_dataReady", async (pdfData: PdfData) => {
      resolve(pdfData);
    });
    pdfParser.loadPDF(localPdf);
  });

  return pdfData.Pages.map((page: PdfPage) =>
    page.Texts.map((t) =>
      t.R.map((r) => decodeURIComponent(r.T)).join("")
    ).join("\n")
  );
};

export default pdf2Text;
