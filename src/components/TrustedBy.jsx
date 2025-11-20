import Marquee from "react-fast-marquee"; // Import the component

export default function TrustedBy() {
  // We no longer need to duplicate this array!
  const partners = [
    'Strive Ventures',
    'Titan Capital',
    'Lumis',
    'Moo Farm',
    'Padup',
    'Accel',
    'Sequoia',
    'Lightspeed',
  ];

  return (
    <div 
    id="partners"
    className="bg-white py-16 sm:py-20 hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Trusted Businesses
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Febi redefines your accounting and finance experience, taking out complex, time-taking and costly operations — a solution that streamlines, automates and optimises.
          </p>
        </div>
        
        {/* We replace our custom CSS marquee with this component */}
        <div className="mt-12">
          <Marquee
            pauseOnHover={true}
            speed={60}
            gradient={true}
            gradientColor="[255,255,255]" // This sets the gradient to white
            gradientWidth={50}
          >
            {/* We just map over the single array of partners */}
            {partners.map((partnerName) => (
              <div
                key={partnerName}
                className="flex justify-center items-center py-4 px-8 w-48 flex-shrink-0 cursor-pointer "
              >
                <span className="text-gray-500 text-2xl font-semibold opacity-70">
                  {partnerName}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}