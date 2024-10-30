function decodificarMensajeAda(mensaje) {
  const mapeoConocido = {
    "?": "a",
    "[": "e",
    "\\": "i",
    "~": "o",
    "+": "u",
    "()": " ",
    "}": "q",
    "¬": "ó",
    "]": "n",
    "=": "t",
    "`": "c",
    "^": "m",
    "{": "s",
    "-": "h",
    $: "r",
    "¡": "d",
    "*": "p",
    "/": "l",
    ";": "f",
    "¿": "y",
    "%": "b",
    "!": "j",
    "#": "v",
    __: "z",
  };

  let mensajeProcessed = mensaje.replace(/\(\)/g, mapeoConocido["()"]);

  for (let char in mapeoConocido) {
    if (char !== "()") {
      const regex = new RegExp("\\" + char, "g");
      mensajeProcessed = mensajeProcessed.replace(regex, mapeoConocido[char]);
    }
  }

  return mensajeProcessed;
}

const mensajeEncriptado =
  "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~";

const resultado = decodificarMensajeAda(mensajeEncriptado);
console.log("resultado:", resultado);
// reduci el codigo ya que estaba utilizando funciones redundantes
