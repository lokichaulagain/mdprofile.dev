// "use client";
// import { IconAlertCircle } from "@tabler/icons-react";
// import TextInput from "../TextInput";
// import { useState } from "react";
// // var TurndownService = require("turndown");
// import TurndownService from "turndown"; // Import TurndownService directly, not using "require"

// export default function Introduction() {
//   var turndownService = new TurndownService();
//   var markdown = turndownService.turndown("<h1>Hello world!</h1>");
//   console.log(markdown);

//   const [name, setName] = useState("");
//   const [classValue, setClassValue] = useState("");
//   const [rollNo, setRollNo] = useState("");

//   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setName(event.target.value);
//   };

//   const handleClassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setClassValue(event.target.value);
//   };

//   const handleRollNoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setRollNo(event.target.value);
//   };

//   console.log(name, classValue, rollNo);
//   var markdown1 = turndownService.turndown( "console.log(name, classValue, rollNo)");
//   console.log(markdown1)

//   return (
//     <div>
//       <TextInput
//         labelIcon={<IconAlertCircle />}
//         labelText={"Name"}
//         placeholder={"Name here"}
//         toolTipLabel={"This is tool tip"}
//         type={"text"}
//         value={name}
//         onChange={handleNameChange}
//       />

//       <TextInput
//         labelIcon={<IconAlertCircle />}
//         labelText={"Class"}
//         placeholder={"Class here"}
//         toolTipLabel={"This is tool tip"}
//         type={"text"}
//         value={classValue}
//         onChange={handleClassChange}
//       />

//       <TextInput
//         labelIcon={<IconAlertCircle />}
//         labelText={"Roll No"}
//         placeholder={"Roll here"}
//         toolTipLabel={"This is tool tip"}
//         type={"text"}
//         value={rollNo}
//         onChange={handleRollNoChange}
//       />
//     </div>
//   );
// }

"use client";
import { IconAlertCircle } from "@tabler/icons-react";
import TextInput from "../TextInput";
import { useState } from "react";
import TurndownService from "turndown";

export default function Introduction() {
  const turndownService = new TurndownService();

  const [name, setName] = useState("");
  const [classValue, setClassValue] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [generatedMarkdown, setGeneratedMarkdown] = useState(""); // State to store generated Markdown

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleClassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClassValue(event.target.value);
  };

  const handleRollNoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRollNo(event.target.value);
  };

  const generateMarkdown:any = () => {
    // Generate Markdown based on user inputs
    const markdownText = `## User Information\n\nName: ${name}\nClass: ${classValue}\nRoll No: ${rollNo}`;

    // Convert to Markdown format
    const convertedMarkdown = turndownService.turndown(markdownText);

    // Set the generated Markdown in state
    setGeneratedMarkdown(convertedMarkdown);
  };

  console.log(generatedMarkdown)

  return (
    <div>
      <TextInput
        labelIcon={<IconAlertCircle />}
        labelText={"Name"}
        placeholder={"Name here"}
        toolTipLabel={"This is tool tip"}
        type={"text"}
        value={name}
        onChange={handleNameChange}
      />

<TextInput
       labelIcon={<IconAlertCircle />}
       labelText={"Class"}
       placeholder={"Class here"}
       toolTipLabel={"This is tool tip"}
       type={"text"}
       value={classValue}
       onChange={handleClassChange}
     />

     <TextInput
       labelIcon={<IconAlertCircle />}
       labelText={"Roll No"}
       placeholder={"Roll here"}
       toolTipLabel={"This is tool tip"}
       type={"text"}
       value={rollNo}
       onChange={handleRollNoChange}
     />

      <button onClick={generateMarkdown}>Generate Markdown</button>

      {/* Display the generated Markdown */}
      {generatedMarkdown && (
        <div>
          <h2>Generated Markdown:</h2>
          <pre>{generatedMarkdown}</pre>
        </div>
      )}
    </div>
  );
}
