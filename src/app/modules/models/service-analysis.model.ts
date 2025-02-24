// models/service-analysis.model.ts
export interface ServiceAnalysis {
    id: string;
    name: string;
    status: string;
    details: string;
    history: {
      date: string;
      details: string;
    }[];
  }