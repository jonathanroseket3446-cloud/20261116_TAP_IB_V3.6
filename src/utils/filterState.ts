export interface CohortFilters {
  tapStages: string[];
  tapGenetics: string[];
  tapYears: string[];
  tapTargets: string[];
  tapVlTypes: string[];
  tnpStages: string[];
  tnpGenetics: string[];
  tnpYears: string[];
  tnpTargets: string[];
}

const STORAGE_KEYS: Record<keyof CohortFilters, string> = {
  tapStages: 'tapStages',
  tapGenetics: 'tapGenetics',
  tapYears: 'tapYears',
  tapTargets: 'tapTargets',
  tapVlTypes: 'tapVlTypes',
  tnpStages: 'tnpStages',
  tnpGenetics: 'tnpGenetics',
  tnpYears: 'tnpYears',
  tnpTargets: 'tnpTargets'
};

function readStringArray(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

export function loadCohortFilters(): CohortFilters {
  return {
    tapStages: readStringArray(STORAGE_KEYS.tapStages),
    tapGenetics: readStringArray(STORAGE_KEYS.tapGenetics),
    tapYears: readStringArray(STORAGE_KEYS.tapYears),
    tapTargets: readStringArray(STORAGE_KEYS.tapTargets),
    tapVlTypes: readStringArray(STORAGE_KEYS.tapVlTypes),
    tnpStages: readStringArray(STORAGE_KEYS.tnpStages),
    tnpGenetics: readStringArray(STORAGE_KEYS.tnpGenetics),
    tnpYears: readStringArray(STORAGE_KEYS.tnpYears),
    tnpTargets: readStringArray(STORAGE_KEYS.tnpTargets)
  };
}

export function saveCohortFilters(filters: CohortFilters): void {
  (Object.keys(STORAGE_KEYS) as Array<keyof CohortFilters>).forEach(k => {
    localStorage.setItem(STORAGE_KEYS[k], JSON.stringify(filters[k] || []));
  });
}

export function getEmptyCohortFilters(): CohortFilters {
  return {
    tapStages: [],
    tapGenetics: [],
    tapYears: [],
    tapTargets: [],
    tapVlTypes: [],
    tnpStages: [],
    tnpGenetics: [],
    tnpYears: [],
    tnpTargets: []
  };
}

export function buildGuidelinesSearchParams(filters: CohortFilters): URLSearchParams {
  const params = new URLSearchParams();
  (Object.keys(STORAGE_KEYS) as Array<keyof CohortFilters>).forEach(k => {
    const arr = filters[k];
    if (arr && arr.length > 0) {
      params.append(k, arr.join(','));
    }
  });
  return params;
}

export function countModalityFilters(filters: CohortFilters, modality: 'TAP' | 'TNP'): number {
  if (modality === 'TAP') {
    return (
      filters.tapStages.length +
      filters.tapGenetics.length +
      filters.tapYears.length +
      filters.tapTargets.length +
      filters.tapVlTypes.length
    );
  }
  return (
    filters.tnpStages.length +
    filters.tnpGenetics.length +
    filters.tnpYears.length +
    filters.tnpTargets.length
  );
}

const PTM_INCLUDE_FR_LOOPS_KEY = 'ptmIncludeFrLoops';

export function loadIncludeFrLoops(): boolean {
  try {
    return localStorage.getItem(PTM_INCLUDE_FR_LOOPS_KEY) === 'true';
  } catch {
    return false;
  }
}

export function saveIncludeFrLoops(value: boolean): void {
  try {
    localStorage.setItem(PTM_INCLUDE_FR_LOOPS_KEY, value ? 'true' : 'false');
  } catch {
    // Ignore storage quota / privacy mode errors
  }
}

