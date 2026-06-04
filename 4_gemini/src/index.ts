import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({apiKey : process.env.GOOGLE_GEMINI_API_KEY!});

// async function runTextGenerationAndStreamResponse(){
//     // Generate Text
//     // const response = await ai.models.generateContent({
//     //     model : "gemini-3.5-flash",
//     //     contents : " Who is Andrej Karpathy..",
//     // });

//     // console.log(response.text);

//     // stream response for faster.
//     const responseStream = await ai.models.generateContentStream({
//         model : "gemini-3.5-flash",
//         contents : "Who is Andrej Karpathy ?"
//     });

//     for await (const chunk of responseStream){
//         // @ts-ignore
//         process.stdout.write(chunk?.text);
//     }
// }
// runTextGenerationAndStreamResponse();

async function main(){
    const response = await ai.models.generateContent({
        model : "gemini-3.5-flash",
        contents : [
                "What is the sum of the first 50 prime numbers? " +
      "Generate and run code for the calculation, and make sure you get all 50.",
        ],
        config:{
            tools : [{codeExecution:{}}],
        }
    });
    
    const parts = response?.candidates?.[0]?.content?.parts || [];
        
    parts.forEach((part) => {
        if (part.text) {
        console.log(part.text);
    }

  if (part.executableCode && part.executableCode.code) {
    console.log(part.executableCode.code);
  }

  if (part.codeExecutionResult && part.codeExecutionResult.output) {
    console.log(part.codeExecutionResult.output);
  }
    
})}

main()