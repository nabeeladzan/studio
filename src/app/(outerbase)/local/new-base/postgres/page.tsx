"use client";
import { Button } from "@/components/orbit/button";
import { ArrowLeft } from "@phosphor-icons/react";
import Link from "next/link";

export default function LocalPostgresNewBasePage() {
  return (
    <div className="container">
      <div className="my-8 flex">
        <Button variant="secondary" size="lg" href="/local" as="link">
          <ArrowLeft />
          Back
        </Button>
      </div>

      <div className="mb-8 p-4 text-xl leading-8">
        Running PostgreSQL from a browser is not possible.
        <br /> Please use the desktop app instead.
      </div>

      <Link
        href="https://github.com/outerbase/studio-desktop/releases"
        className="text-primary"
      >
        Download the desktop app
      </Link>
    </div>
  );
}
