"use client";

import { useState } from "react";
import { Terminal } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);

  const triggerAlert = () => {
    setShowAlert(true);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Button onClick={triggerAlert}>Button</Button>
      </div>

      {showAlert && (
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Hi user!</AlertTitle>
          <AlertDescription>
            Welcome to Typedia!
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
