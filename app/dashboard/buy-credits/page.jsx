"use client"
import React, {useState, useContext} from "react"
import { PayPalButtons } from "@paypal/react-paypal-js"; 
import { db } from "../../../config/db";
import { Users } from "../../../config/schema";
import { UserDetailContext } from "../../_context/UserDetailContext";
import { useRouter } from "next/navigation";

function BuyCredits(){    
    const [selectedOption, setSelectedOption] = useState([]);
    const {userDetail, setUserDetail} = useContext(UserDetailContext);
    const router = useRouter();

    if (!userDetail) return <div className="text-center py-8">Loading user data...</div>;

    const creditsOption = [
        {
            credits: 5,
            amount: 0.99
        },
        {
            credits: 10,
            amount: 1.99
        },
        {
            credits: 25,
            amount: 3.99
        },
        {
            credits: 50,
            amount: 6.99
        },
        {
            credits: 100,
            amount: 9.99
        }
    ]

    const onPaymentSuccess = async() => {
        console.log("Payment Success...");
        const result = await db.update(Users)
        .set({
            credits: userDetail?.credits + selectedOption?.credits
        }).returning({id:Users.id});

        if(result) {
            setUserDetail(prev => ({
                ...prev,
                credits: userDetail?.credits + selectedOption?.credits
            }))
            router.push('/dashboard');
        }
    }
    
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-3xl md:text-4xl font-bold text-center mb-8">
                Buy More Credits
            </div>
            
            {/* 모바일: 2컬럼(grid-cols-2), 태블릿: 3컬럼(sm:grid-cols-3) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {creditsOption.map((item, index) => (
                    <div 
                        key={index} 
                        className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg 
                            ${selectedOption?.credits === item.credits ? 'ring-2 ring-blue-500' : ''}`}
                    >
                        <div className="p-4 sm:p-6 flex flex-col items-center">
                            <h2 className="text-lg sm:text-xl font-semibold mb-2">
                                {item.credits} Credits
                            </h2>
                            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">for ${item.amount}</p>
                            <button 
                                className={`w-full py-2 px-3 sm:px-4 rounded-md transition-colors text-sm sm:text-base
                                    ${selectedOption?.credits === item.credits 
                                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                                        : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                                onClick={() => setSelectedOption(item)}
                            >
                                Buy
                            </button>
                        </div>
                    </div>
                ))}   
            </div>
            
            <div className="max-w-3xl mx-auto mt-8 px-4">
                {selectedOption?.amount && (
                    <div className="border rounded-lg p-4 sm:p-6 shadow-sm">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Complete Your Purchase</h3>
                        <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                            You're buying <span className="font-bold">{selectedOption.credits} credits</span> 
                            for <span className="font-bold">${selectedOption.amount.toFixed(2)}</span>
                        </p>
                        <PayPalButtons 
                            style={{
                                layout: "horizontal", 
                                width: "100%",
                                color: "blue",
                                shape: "pill",
                                label: "checkout"
                            }}
                            onApprove={() => onPaymentSuccess()}
                            onCancel={() => console.log("Payment Cancelled")}
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            value: selectedOption?.amount?.toFixed(2),
                                            currency_code: "USD"
                                        }
                                    }]
                                })
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default BuyCredits;