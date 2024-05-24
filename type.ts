export interface Subcategory {
  text: string;
  key: string;
  icon: string;
  description: string;
  fetchUrl: string;
  rules: number;
}

export interface Category {
  text: string;
  key: string;
  icon: string;
  description: string;
  rules: number;
  subcategories: Record<string, Subcategory>;
}

export interface Rules {
  alert: string;
  expr: string;
  for: string;
  labels: Labels;
  annotations: Annotations;
}

export interface Labels {
  severity: string;
}

export interface Annotations {
  summary: string;
  description: string;
}
