import { Button } from "@/components/ui/button";
import { CheckCircle, Clock } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Claim Your Reward?
        </h2>
        
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of satisfied participants who have already 
          claimed their Target gift cards.
        </p>
        
        <Button 
          size="lg" 
          variant="secondary"
          className="mb-6 px-8 py-3 text-lg bg-white text-primary hover:bg-gray-100"
          onClick={() => window.open('https://nodejs.org/en/download', '_blank')}
        >
          Start Your Claim Process →
        </Button>
        
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>Secure Process</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Quick Setup</span>
          </div>
        </div>
      </div>
    </section>
  );
};
