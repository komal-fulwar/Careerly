import { create } from 'zustand';

export interface RoadmapModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  status: 'locked' | 'current' | 'completed';
  topics: string[];
  resources: Resource[];
}

export interface Resource {
  id: string;
  title: string;
  platform: string;
  type: 'video' | 'article' | 'course' | 'project';
  url: string;
  duration: string;
  rating: number;
  price: string;
  isFree: boolean;
}

export interface CareerPath {
  id: string;
  title: string;
  salaryRange: string;
  avgSalary: string;
  growth: string;
  demand: 'High' | 'Medium' | 'Low';
  companies: string[];
  skills: string[];
}

export interface RoadmapData {
  title: string;
  skill: string;
  estimatedTime: string;
  totalModules: number;
  completedModules: number;
  modules: RoadmapModule[];
  careerPaths: CareerPath[];
  weeklyPlan: WeeklyPlan;
}

export interface WeeklyPlan {
  currentWeek: number;
  totalWeeks: number;
  days: DayPlan[];
}

export interface DayPlan {
  day: string;
  tasks: Task[];
  timeEstimate: string;
}

export interface Task {
  id: string;
  title: string;
  type: 'learn' | 'practice' | 'project' | 'review';
  duration: string;
  completed: boolean;
}

interface RoadmapState {
  roadmap: RoadmapData | null;
  activeTab: 'roadmap' | 'resources' | 'career' | 'schedule' | 'chat';
  isGenerated: boolean;
  setRoadmap: (data: RoadmapData) => void;
  setActiveTab: (tab: 'roadmap' | 'resources' | 'career' | 'schedule' | 'chat') => void;
  toggleTask: (dayIndex: number, taskId: string) => void;
  setModuleStatus: (moduleId: string, status: 'locked' | 'current' | 'completed') => void;
}

export const useRoadmapStore = create<RoadmapState>((set) => ({
  roadmap: null,
  activeTab: 'roadmap',
  isGenerated: false,
  setRoadmap: (data) => set({ roadmap: data, isGenerated: true }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  toggleTask: (dayIndex, taskId) =>
    set((state) => {
      if (!state.roadmap) return state;
      const newDays = [...state.roadmap.weeklyPlan.days];
      const day = { ...newDays[dayIndex] };
      day.tasks = day.tasks.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t
      );
      newDays[dayIndex] = day;
      return {
        roadmap: {
          ...state.roadmap,
          weeklyPlan: { ...state.roadmap.weeklyPlan, days: newDays },
        },
      };
    }),
  setModuleStatus: (moduleId, status) =>
    set((state) => {
      if (!state.roadmap) return state;
      const modules = state.roadmap.modules.map((m) =>
        m.id === moduleId ? { ...m, status } : m
      );
      return {
        roadmap: {
          ...state.roadmap,
          modules,
          completedModules: modules.filter((m) => m.status === 'completed').length,
        },
      };
    }),
}));
