"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Smartphone } from "lucide-react";

export function MobileAppPromo() {
  return (
    <Card className="overflow-hidden">
      <div className="p-6 flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight">Download Our Mobile App</h3>
            <p className="text-muted-foreground">Get instant access to loans and manage your payments on the go!</p>
          </div>
          <Button className="gap-2">
            <Smartphone className="h-4 w-4" />
            Download Now
          </Button>
        </div>
        <div className="relative w-48 h-48 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full animate-pulse" />
          <Smartphone className="w-full h-full text-primary/80" />
        </div>
      </div>
    </Card>
  );
}