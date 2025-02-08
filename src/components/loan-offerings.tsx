"use client";

import { Card } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function LoanOfferings() {
  const offerings = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      title: "Home Loan",
      rate: "3.5%",
      term: "30 years"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      title: "Property Loan",
      rate: "4.2%",
      term: "15 years"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      title: "Apartment Loan",
      rate: "3.8%",
      term: "25 years"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      title: "Land Loan",
      rate: "5.1%",
      term: "20 years"
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Loan Offerings</h3>
        <Button variant="ghost" size="sm" className="gap-2">
          View all <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {offerings.map((offering) => (
          <Card
            key={offering.id}
            className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
          >
            <div className="relative h-32">
              <Image
                src={offering.image}
                alt={offering.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-4 space-y-2">
              <h4 className="font-medium">{offering.title}</h4>
              <div className="text-sm text-muted-foreground">
                <p>Rate: {offering.rate}</p>
                <p>Term: {offering.term}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}