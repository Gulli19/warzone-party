import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Check, Star, Zap, Crown } from "lucide-react";

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  highlighted = false,
  popular = false 
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  popular?: boolean;
}) => (
  <div className={`glass-card p-8 space-y-6 relative ${highlighted ? 'ring-2 ring-primary shadow-glow' : ''}`}>
    {popular && (
      <Badge variant="accent" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <Star className="w-3 h-3 mr-1" />
        Più popolare
      </Badge>
    )}
    
    <div className="text-center space-y-2">
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
    
    <div className="text-center">
      <div className="text-4xl font-extrabold">€{price}</div>
      <div className="text-muted-foreground text-sm">/mese</div>
    </div>
    
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <Check className="w-5 h-5 text-accent flex-shrink-0" />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    
    <Button variant={highlighted ? "hero" : "glass"} className="w-full" size="lg">
      {highlighted ? "Inizia ora" : "Scegli piano"}
    </Button>
  </div>
);

export default function Pricing() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="space-y-4">
            <h1 className="text-5xl font-extrabold font-inter">
              Scegli il tuo piano
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Accedi a eventi esclusivi, tornei premium e funzionalità avanzate per la community gaming
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <Badge variant="glass">
              <Zap className="w-3 h-3 mr-1" />
              Nessun impegno
            </Badge>
            <Badge variant="glass">
              <Crown className="w-3 h-3 mr-1" />
              Cancella quando vuoi
            </Badge>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Casual"
            price="0"
            description="Per chi inizia nel gaming sociale"
            features={[
              "Accesso eventi pubblici",
              "Matchmaking base",
              "Chat community Discord",
              "Classifica pubblica",
              "Supporto via Discord"
            ]}
          />
          
          <PricingCard
            title="Premium"
            price="9.99"
            description="Il piano più completo per gamer attivi"
            features={[
              "Tutti i benefici Casual",
              "Eventi esclusivi Premium",
              "Priorità matchmaking",
              "Statistiche avanzate",
              "Coaching mensile",
              "Badge Premium",
              "Supporto prioritario",
              "Early access nuove features"
            ]}
            highlighted={true}
            popular={true}
          />
          
          <PricingCard
            title="Pro Team"
            price="19.99"
            description="Per team competitivi e streamer"
            features={[
              "Tutti i benefici Premium",
              "Tornei privati team",
              "Analytics avanzati",
              "Custom lobby",
              "Coaching personalizzato",
              "Integrazione streaming",
              "API access",
              "Manager dedicato"
            ]}
          />
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Domande frequenti</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Posso cambiare piano in qualsiasi momento?",
                a: "Sì, puoi fare upgrade o downgrade del tuo piano in qualsiasi momento. I cambiamenti saranno effettivi dal prossimo ciclo di fatturazione."
              },
              {
                q: "Cosa succede se cancello l'abbonamento?",
                a: "Continuerai ad avere accesso alle funzionalità premium fino alla fine del periodo già pagato, poi tornerai al piano gratuito."
              },
              {
                q: "I tornei premium sono inclusi?",
                a: "Con il piano Premium hai accesso a tutti i nostri tornei esclusivi con premi maggiori e meno partecipanti."
              },
              {
                q: "Offrite supporto tecnico?",
                a: "Tutti gli utenti hanno supporto via Discord. Gli utenti Premium ricevono supporto prioritario con tempi di risposta più rapidi."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass-card p-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="glass-card p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Pronto per iniziare?
            </h2>
            <p className="text-muted-foreground mb-8">
              Unisciti a centinaia di gamer che già si divertono con PartyDrop
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://discord.gg/dvEzHX8nhH" target="_blank" rel="noopener">
                  Entra nel Discord
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="/">
                  Torna alla home
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}