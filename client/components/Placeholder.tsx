import { Construction } from "lucide-react";
import { Layout } from "./Layout";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <Layout>
      <div className="container py-24 text-center">
        <Construction className="mx-auto h-16 w-16 text-muted-foreground mb-6" />
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-muted-foreground text-lg mb-6">
          {description ||
            "Cette page est en cours de développement. Revenez bientôt pour découvrir du contenu exclusif !"}
        </p>
        <div className="text-sm text-muted-foreground">
          Continuez à explorer les autres sections de notre boutique.
        </div>
      </div>
    </Layout>
  );
}
