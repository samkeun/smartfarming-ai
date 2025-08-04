import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200"> 
                <div className="hero-content text-center"> 
                    <div className="max-w-[85rem]"> 
                        {/* Main Title */} 
                        <div className="mb-8"> 
                            <h1 className="text-5xl font-bold mb-4"> 
                                <span className="text-primary"> 작물 병해충 탐지 앱 </span> 
                            </h1> 
                            <p className="text-lg"> 
                                인공지능 기술을 활용하여 농민과 작물 재배자들이 병해충 문제를 빠르게 파악하고,
                                적절한 조치를 취할 수 있도록 지원합니다.
                            </p> 
                        </div> 
                        
                        {/* Get Started Button */} 
                        <div className="flex justify-center mb-8"> 
                            <Link href="/dashboard" className="btn btn-primary gap-2"> 
                                Get started 
                            </Link> 
                        </div> 
                        
                        {/* Main Image */} 
                        <div className="flex justify-center mb-16"> 
                            <Image src={'/landing.png'} alt="mockup" width={1000} height={600} /> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
        ); 
    }

