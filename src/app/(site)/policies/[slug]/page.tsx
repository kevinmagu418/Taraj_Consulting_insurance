export default function PolicyDetailsPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Policy: {params.slug}</h1>
      <p className="text-lg text-muted-foreground">
        Placeholder for specific policy details.
      </p>
    </div>
  );
}
