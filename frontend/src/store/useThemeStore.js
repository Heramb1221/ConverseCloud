import { create } from 'zustand';

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("conversecloud-theme")||'coffee',
    setTheme: (theme) => {
        localStorage.setItem("conversecloud-theme", theme);
        set({ theme });
    },
}));