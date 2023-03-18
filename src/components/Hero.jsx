import React from "react";


export default function Hero() {
    return (
    <div className="lg:grid grid-cols-2 -gap-3 item-center">Salut
        <div className="col-span-1 py-12 lg:py-0">
            bonjour 
            <h1 className="2x1:text-5xl lg:text-4xl sm:text-5xl text-4xl leading-snug 2xl">
                Discorver, Collect <br />
                <span className="text-pink-500">and sell Timeless</span>
                <span className="text-blue-500"> NFTs</span>
            </h1>
            <p className="font-medium text-lightBlack mt-3">Cosmic chill c'est cool
            </p>
            <div className="flex-colo w-full sm:w-3/5 border-whites py-6 px-6">
                <h2 className="italic font-semibold text-blue">
                    NFT coming soon!!
                </h2>
                
            </div>
        </div>
    </div>
    );
}
