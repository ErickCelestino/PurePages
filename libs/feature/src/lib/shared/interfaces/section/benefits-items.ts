export interface BenefitsItems {
  id: string;
  title: string;
  subTitle: string;
  image: string;
  buttonTitle?: string;
  onClick: () => void;
}
