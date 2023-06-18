# pdf2text

Uses pdf2json to scrape text from PDFs

## Usage

```javascript
import pdf2text from "@crit-tech/pdf2text";

const pages = await pdf2text("path/to/file.pdf");

pages.forEach((page, pageNo) => {
  console.log(`Text from page ${pageNo}:`);
  console.log(page);
});
```
