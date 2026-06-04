import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({apiKey : process.env.GOOGLE_GEMINI_API_KEY!});

async function main(){
    // Generate Text
    // const response = await ai.models.generateContent({
    //     model : "gemini-3.5-flash",
    //     contents : " Who is Andrej Karpathy..",
    // });

    // console.log(response.text);

    // stream response for faster.
    const responseStream = await ai.models.generateContentStream({
        model : "gemini-3.5-flash",
        contents : "Who is Andrej Karpathy ?"
    });

    for await (const chunk of responseStream){
        // @ts-ignore
        process.stdout.write(chunk?.text);
    }
}

main();