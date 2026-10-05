# PDFMake TS example

Why should i write this?

The reason, i can’t find any tutorial for making PDFMake running on typescript.

For the example, i will use nest js. because it natively using typescript on it’s base program.

```bash
$ npm i -g @nestjs/cli
$ nest new project-name
```

I will use these library:

```
"html-to-pdfmake": "^2.4.25",
"html-to-text": "^9.0.5",
"jsdom": "^22.1.0",
"pdf-lib": "^1.17.1",
*"pdfmake": "^0.2.7", // npm install --save @types/pdfmake*
```

Create folder and file that will do the process of pdf generating. I will add it inside src, so it can be included inside the dist directory after compilation.

```
mkdir etc/print-pdf.ts
```

And I will add asset folder that will contains fonts, images, etc. I will make the folder outside of the src folder because it has different context.

```
mkdir assets/fonts
mkdir assets/images
```

For example, if I want to add Century Gothic font, I just simply add century-gothic folder inside fonts and paste the ttf/woff file inside it.

Then, let’s do it…..

First I will create PrintPDF function inside **print-pdf.ts**.

```
export default function PrintPDf() {
    // ... the code goes here
}
```

then, create some custom layout.

```
const tableLayouts = {
    customLayout: {
      body: [
        ['Left', 'Center', 'Right', 'Justify'],
        ['1', '2', '3', '4'],
        ['5', '6', '7', '8'],
        ['9', '10', '11', '12'],
      ],
      hLineWidth: function (i: number, node: any) {
        if (i === 0 || i === node.table.body.length) {
          return 0;
        }
        return i === node.table.headerRows ? 0 : 0.5;
      },
      vLineWidth: function () {
        return 0;
      },
      hLineColor: function () {
        return '#aaaaaa';
      },
      paddingLeft: function (i: number) {
        return 8;
      },
      paddingRight: function (i: number, node: any) {
        return 8;
      },
    },
  };
```

Now, if you want to use some fonts other than the default font that already provided by pdfmake or if you want to add some images you can add it inside **VFS**.

```
const pdfMakeConstants = {
    VFS: {
      'fonts/century-gothic/GOTHIC.woff': await fs.promises.readFile(
        path.join(
          __dirname,
          '..',
          '..',
          '..',
          'assets/fonts/century-gothic/GOTHIC.woff',
        ),
      ),
    },
  };
```

We will add it to PDFMake VFS later…

Then we will create variable to contains all the fonts with **TFontDictionary** type. It’s imported from ‘pdfmake/interfaces’.

```
const fonts: TFontDictionary = {
    CenturyGothic: {
      normal: 'fonts/century-gothic/GOTHIC.woff',
      bold: 'fonts/century-gothic/GOTHICB.woff',
      italics: 'fonts/century-gothic/GOTHICI.woff',
      bolditalics: 'fonts/century-gothic/GOTHICBI.woff',
    },
    Urbanist: {
      normal: `fonts/Urbanist/Urbanist-Regular.ttf`,
    },
  };
```

create the doc definition.

```
const docDefinition = {
	paperSize: ....,
	defaultStyle: {
		font: 'CenturyGothic',
		fontSize: 10
	},
	images: { image_name: '<key name in pdfMakeConstants>' },
	styles: { ... },
	pageMargins: [...] as **Margins** // it's imported from pdfmake/interfaces,
	header: { ... },
	footer: { ... },
	content: [  ... ]
}
```

Now it’s the time for assign the fonts and constants to VFS. we will use pdfFonts library from 'pdfmake/build/vfs_fonts’ and we assign the fonts that we’ve create above.

```
pdfFonts.pdfMake.vfs = Object.assign(
    {},
    pdfFonts.pdfMake.vfs,
    pdfMakeConstants.VFS,
  );
```

For the final, we will generate the docDefinition including all layouts, fonts, and the vfs. We will use library pdfMake from 'pdfmake/build/pdfmake’.

```
const pdfDoc = pdfMake.createPdf(
    docDefinition as TDocumentDefinitions,
    tableLayouts,
    fonts,
    pdfFonts.pdfMake.vfs,
  );
```

The createPdf function above is for generaing the code we’ve type before into pdfmake type.

After that, we have to generate it into buffer. Because of that we will add one utility for that. Let’s create folder common/utils and create pdf.utils.ts file. I will make it inside src.

```
mkdir common/utils
cd common/utils
touch pdf.utils.ts
```

```
export async function generateBuffer(pdfDoc: pdfMake.TCreatedPdf) {
  const buffer = await new Promise<Buffer>((resolve, reject) => {
    pdfDoc.getBuffer((buffer: Buffer) => {
      try {
        resolve(buffer);
      } catch (error) {
        reject(error);
      }
    });
  });

  const chunkSize = 5;
  let offset = 0;
  const chunks = [];
  while (offset < buffer.length) {
    const chunk = buffer.slice(offset, offset + chunkSize);
    chunks.push(chunk);
    offset += chunkSize;
  }

  return Buffer.concat(chunks);
}
```
