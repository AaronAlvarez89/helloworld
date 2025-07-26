export const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Click Claim Button",
      description: "Start your reward journey by clicking the claim button above.",
    },
    {
      number: 2,
      title: "Complete Survey",
      description: "Answer a few quick questions about your shopping preferences.",
    },
    {
      number: 3,
      title: "Complete Deals",
      description: "Participate in partner offers to earn reward points.",
    },
    {
      number: 4,
      title: "Earn More Rewards",
      description: "Complete more deals to earn more reward points.",
    },
    {
      number: 5,
      title: "Receive Your Reward",
      description: "Your gift card will be delivered to your email within 24 hours of completion.",
    },
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          How It Works
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-gray">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};