export const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
            </div>
            <span className="text-lg font-bold text-primary">Target Rewards</span>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center">
            <h3 className="font-semibold mb-4">Disclaimer</h3>
            <p className="text-sm text-gray-400 max-w-4xl mx-auto leading-relaxed">
              This sweepstakes promotion is operated by an independent marketing company and is not affiliated with, endorsed 
              by, or sponsored by Target Corporation. Target and the Target logo are registered trademarks of Target Corporation.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sweepstakes Rules</a>
            <a href="#" className="hover:text-white transition-colors">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};