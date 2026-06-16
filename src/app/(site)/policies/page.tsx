import { PageHero } from "@/components/layout/page-hero";
import { PoliciesGrid } from "@/components/sections/policies-grid/policies-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance Policies",
  description: "Explore our featured insurance products. From motor and medical to corporate and life cover, find the right protection for your future.",
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero 
        title="Insurance Policies"
        subtitle="FEATURED PRODUCTS"
        description="Discover our most popular insurance solutions designed to provide maximum protection and peace of mind for every stage of your life."
      />
      
      <PoliciesGrid />
    </>
  );
}
