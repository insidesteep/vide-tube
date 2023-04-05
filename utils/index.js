import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
import ImageModule from "docxtemplater-image-module-free";
import QRCode from "qrcode";
import { appUrl } from "../config/config";

const base64Regex = /^data:image\/(png|jpg|svg|svg\+xml);base64,/;

function base64Parser(dataURL) {
  if (typeof dataURL !== "string" || !base64Regex.test(dataURL)) {
    return false;
  }
  const stringBase64 = dataURL.replace(base64Regex, "");

  // For nodejs, return a Buffer
  if (typeof Buffer !== "undefined" && Buffer.from) {
    return Buffer.from(stringBase64, "base64");
  }

  // For browsers, return a string (of binary content) :
  const binaryString = window.atob(stringBase64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    const ascii = binaryString.charCodeAt(i);
    bytes[i] = ascii;
  }
  return bytes.buffer;
}

const imageOpts = {
  getImage(tag) {
    return base64Parser(tag);
  },
  getSize() {
    return [100, 100];
  },
};

const loadFile = (url, cb) => {
  PizZipUtils.getBinaryContent(url, cb);
};

export const generateDocument = (data) => {
  loadFile(`${appUrl}/files/doc-template.docx`, (error, content) => {
    if (error) {
      throw error;
    }

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
      modules: [new ImageModule(imageOpts)],
    });

    doc.setData(data);

    try {
      doc.render();
    } catch (error) {
      const replaceErrors = (key, value) => {
        if (value instanceof Error) {
          return Object.getOwnPropertyNames(value).reduce((errorr, key) => {
            error[key] = value[key];
            return error;
          }, {});
        }

        return value;
      };

      console.log(JSON.stringify({ error: error }, replaceErrors));

      if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors
          .map((error) => error.properties.explantion)
          .join("\n");

        console.log("errorMessages", errorMessages);
      }

      throw error;
    }

    const out = doc.getZip().generate({
      type: "blob",
      mimeTye:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });

    saveAs(out, "output.docx");
  });
};

export const getQrCodeImg = async (text) => {
  const code = await QRCode.toDataURL(text);

  return code;
};
