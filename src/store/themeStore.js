import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useThemeStore = create(
	persist(
		(set, get) => ({
			darkMode: false,
			toggleDarkMode: () =>
				set({
					darkMode: !get().darkMode,
				}),
		}),
		{
			name: 'theme-storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
);

export default useThemeStore;
