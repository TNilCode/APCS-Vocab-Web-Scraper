// IMPORTANT: RIGHT CLICK ON A VOCAB WORD AND CLICK INSPECT!!!
// Then go to the tab that says "console" and then paste the code in the console.

const data = document.querySelector("body > footer").innerHTML;
const finalTerms = [];
const finalDefinitions = [];

const rawScripts = data.split("/script>");

const scripts = rawScripts
  .filter((curScript) => curScript.trim() != "")
  .map((curScript) => curScript.trim());

scripts.forEach(function (curItem) {
  if (!curItem.includes("s9-remark")) {
    const rawDefinition = curItem.split("<definition>")[1];
    const term = rawDefinition.split("<title>")[1].split("</title>")[0].trim();

    const titleDefinition = rawDefinition
      .replaceAll("&#160;", " ")
      .replaceAll("<i>", " ")
      .replaceAll("</i>", " ")
      .replaceAll("&gt;", ">")
      .replaceAll("&lt;", "<");

    const definition = titleDefinition
      .split("<text>")[1]
      .split("</text>")[0]
      .trim();

    const finalDef = definition
      .split("\n")
      .filter((curScript) => curScript.trim() != "")
      .join(" ")
      .split(" ")
      .filter((curScript) => curScript.trim() != "")
      .join(" ");

    finalTerms.push(term);
    finalDefinitions.push(finalDef);
  }
});

console.log(`Number of Vocab: ${finalTerms.length}`);
console.log(finalTerms.join("\n"));
console.log(finalDefinitions.join("\n"));
