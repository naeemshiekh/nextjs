import Image from 'next/image';

export default function Customers() {    
    return (
        <div>
            <h1>Customers</h1>
            <Image
                src="/hero-mobile.png" // Ensure the path to the image is correct
                width={1000}
                height={1000}
                alt="hero"        
            />
        </div>
    );
}
