import { create } from 'zustand';

export interface OnboardingData {
  name: string;
  skill: string;
  learningStyle: string;
  timeCommitment: string;
  budget: string;
  goal: string;
  level: string;
}

interface OnboardingState {
  step: number;
  data: OnboardingData;
  isComplete: boolean;
  isLoading: boolean;
  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setField: <K extends keyof OnboardingData>(field: K, value: OnboardingData[K]) => void;
  setComplete: (val: boolean) => void;
  setLoading: (val: boolean) => void;
  reset: () => void;
}

const initialData: OnboardingData = {
  name: '',
  skill: '',
  learningStyle: '',
  timeCommitment: '',
  budget: '',
  goal: '',
  level: '',
};

export const useOnboardingStore = create<OnboardingState>((set) => ({
  step: 0, // 0 = landing, 1-7 = onboarding steps
  data: { ...initialData },
  isComplete: false,
  isLoading: false,
  setStep: (step) => set({ step }),
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 8) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 0) })),
  setField: (field, value) =>
    set((state) => ({ data: { ...state.data, [field]: value } })),
  setComplete: (val) => set({ isComplete: val }),
  setLoading: (val) => set({ isLoading: val }),
  reset: () => set({ step: 0, data: { ...initialData }, isComplete: false, isLoading: false }),
}));
