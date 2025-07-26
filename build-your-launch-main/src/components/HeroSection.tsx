import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="bg-light-gray py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
            </div>
          </div>
          <span className="text-2xl font-bold text-primary">Target Rewards</span>
        </div>

        <Badge variant="outline" className="mb-6 border-primary text-primary">
          🎁 Reward Program
        </Badge>

        <h1 className="text-5xl font-bold text-foreground mb-6">
          Get Your $750 Gift Card
        </h1>

        <p className="text-xl text-neutral-gray mb-8 max-w-2xl mx-auto">
          Complete simple tasks and earn up to $750 in Target gift cards. 
          Join thousands of satisfied participants.
        </p>

        <Button 
          size="lg" 
          className="mb-6 px-8 py-3 text-lg"
          onClick={() => window.open('https://rewarduplevel.com/aff_c?offer_id=250&aff_id=4035', '_blank')}
        >
          Claim Your Giftcard →
        </Button>

        <div className="flex items-center justify-center gap-2 text-sm text-neutral-gray">
          <CheckCircle className="w-4 h-4" />
          <span>Secure & Verified Process</span>
        </div>
      </div>
    </section>
  );
};
