import { getItem, setItem } from '../utils/localStorage';

export interface Resource {
  id: string;
  title: string;
  description: string;
  subject: string;
  category: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  downloadUrl: string;
  uploadedBy: string;
  uploadedByName: string;
  uploadedAt: string;
  approved: boolean;
  status: string;
  approvedAt?: string;
  approvedBy?: string;
  rejectedAt?: string;
  rejectedBy?: string;
}

const RESOURCES_STORAGE_KEY = 'matrickonnekt_resources';

export const getResources = (): Resource[] => {
  return getItem<Resource[]>(RESOURCES_STORAGE_KEY, []);
};

export const saveResources = (resources: Resource[]): void => {
  setItem(RESOURCES_STORAGE_KEY, resources);
};

export const addResource = (resource: Resource): void => {
  const resources = getResources();
  resources.push(resource);
  saveResources(resources);
};

export const updateResource = (resourceId: string, updates: Partial<Resource>): void => {
  const resources = getResources();
  const index = resources.findIndex(r => r.id === resourceId);
  if (index !== -1) {
    resources[index] = { ...resources[index], ...updates };
    saveResources(resources);
  }
};

export const getResourceById = (resourceId: string): Resource | null => {
  const resources = getResources();
  return resources.find(r => r.id === resourceId) || null;
};
