interface Step {
  num: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="relative grid grid-cols-1 gap-0 md:grid-cols-3">
      {steps.map((step, i) => (
        <div key={step.num} className="relative flex flex-col gap-4 px-8 py-8">
          {/* Connector line between steps */}
          {i < steps.length - 1 && (
            <div className="absolute right-0 top-12 hidden h-px w-8 bg-gradient-to-r from-gold/30 to-gold/10 md:block" />
          )}

          <div className="flex items-center gap-3">
            <span className="font-display text-4xl font-bold text-gold/20">
              {step.num}
            </span>
            <div className="h-px flex-1 bg-gold/15" />
          </div>

          <h3 className="font-display text-xl font-semibold text-cream">
            {step.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-light">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
