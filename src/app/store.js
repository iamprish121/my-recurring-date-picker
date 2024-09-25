import create from 'zustand';

const useStore = create((set) => ({
  recurrenceType: 'Daily',
  customRecurrence: 1,
  selectedDays: [],
  nthDay: 1,
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setCustomRecurrence: (value) => set({ customRecurrence: value }),
  toggleDaySelection: (day) =>
    set((state) => {
      const selectedDays = new Set(state.selectedDays);
      if (selectedDays.has(day)) {
        selectedDays.delete(day);
      } else {
        selectedDays.add(day);
      }
      return { selectedDays: Array.from(selectedDays) };
    }),
  setNthDay: (day) => set({ nthDay: day }),
}));

export default useStore;
