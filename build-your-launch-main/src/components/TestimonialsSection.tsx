import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emily R.",
      location: "Verified Participant",
      rating: 5,
      text: "I was skeptical at first, but I actually received my $520 Target gift card after completing the tasks. The process was straightforward and legitimate.",
    },
    {
      name: "Marcus T.",
      location: "Verified Participant", 
      rating: 5,
      text: "Completed all the requirements and got my $750 reward. It took some time but was worth it. Great way to earn Target credit.",
    },
    {
      name: "Jennifer L.",
      location: "Verified Participant",
      rating: 5,
      text: "The surveys were easy and the partner offers were actually useful. Received my $430 gift card as promised. Highly recommend!",
    },
    {
      name: "David K.",
      location: "Verified Participant",
      rating: 5,
      text: "The email delivery was exactly as promised - received my $680 gift card within 18 hours. Very smooth process and great customer support.",
    },
    {
      name: "Amanda S.",
      location: "Verified Participant",
      rating: 5,
      text: "I was impressed by how professional everything was. The surveys were relevant and the partner offers were actually interesting. Got my $590 reward as expected.",
    },
    {
      name: "Robert T.",
      location: "Verified Participant",
      rating: 4,
      text: "Took a bit longer than expected to complete all requirements, but the $450 reward was worth it. Make sure to read all instructions carefully.",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">
          What Participants Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-sm font-medium">
                    {testimonial.rating}.0
                  </span>
                </div>
                
                <p className="text-neutral-gray mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-neutral-gray">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};