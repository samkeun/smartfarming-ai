import React, {useState} from "react";

function DesignType({ selectedDesignType }) {
    const designs = [
        {
            name: 'Americana',
            image: '/americana.jpg',
        },
        {
            name: 'Bohemian',
            image: '/bohemian.jpg',
        },
        {
            name: 'Farmhouse',
            image: '/farmhouse.jpg',
        },
        {
            name: 'Maximalist',
            image: '/maximalist.jpg',
        },
        {
            name: 'Minimalist',
            image: '/minimalist.jpg',
        },
        {
            name: 'Neo-Industrial',
            image: '/neo-industrial.jpg',
        },
        {
            name: 'Scandinavian',
            image: '/scandinavian.jpg',
        },
        {
            name: 'Traditional',
            image: '/traditional.jpg',
        }
    ]

    const [selectedOption, setSelectedOption] = useState();

    return (
        <div>
            <label>Select Interior Design Type</label>
            <div className="grid grid-cols-4 gap-4">
                {designs.map((design, index) => (
                    <div key={index} 
                        onClick={() => {
                            setSelectedOption(design.name);
                            selectedDesignType(design.name)
                        }}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        <div className={`aspect-square w-full 
                            relative overflow-hidden rounded-lg 
                            ${selectedOption === design.name ? 'ring-4 ring-blue-500' : ''}`}
                        >
                            <img 
                                src={design.image} 
                                className="absolute inset-0 w-full h-full object-cover rounded-lg" 
                                alt={design.name} 
                            />
                        </div>
                        <h2 className="text-center mt-2 font-medium">
                            {design.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DesignType;
