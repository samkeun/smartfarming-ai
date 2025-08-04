import { NextResponse } from "next/server";
import Replicate from "replicate";
import axios from "axios";
import { storage } from '../../../config/firebaseConfig';
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { db } from '../../../config/db';
import { AiGeneratedImage } from "../../../config/schema";

const replicate = new Replicate({
    auth: process.env.NEXT_PUBLIC_REPLICATE_API_TOKEN,
});

async function ConvertImageToBase64(imageUrl){ 
    const resp=await axios.get(imageUrl,{responseType:'arraybuffer'}); 
    const base64ImageRaw=Buffer.from(resp.data).toString('base64'); 
    
    return "data:image/png;base64,"+base64ImageRaw; 
}

export async function POST(request) {

    const {imageUrl, roomType, designType, additionalReq, userEmail} = await request.json();

    try {
        const input = {
            image: imageUrl,
            prompt: 'A ' + roomType + " with a " + designType + " style interior " + additionalReq      
        };
        
        const output = await replicate.run("adirik/interior-design:76604baddc85b1b4616e1c6475eca080da339c8875bd4996705440484a6eac38", { input });

        const base64Image = await ConvertImageToBase64(output);
        const fileName=Date.now()+'.png'; 
        const storageRef=ref(storage,'interior-ai2/'+fileName);        
        await uploadString(storageRef,base64Image,'data_url'); 
        const downloadUrl=await getDownloadURL(storageRef);    
        console.log(downloadUrl); 
        const dbResult=await db.insert(AiGeneratedImage).values({ 
            roomType:roomType, 
            designType:designType, 
            orgImage:imageUrl, 
            aiImage:downloadUrl, 
            userEmail:userEmail 
        }).returning({id:AiGeneratedImage.id}); 
        
        console.log(dbResult);
        return NextResponse.json({'result':downloadUrl});
    }
    catch(e) {
        return NextResponse.json({
            error: e
        });
    }
}

