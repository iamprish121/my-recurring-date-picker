"use client";

import { useState } from 'react';
import '../style/globals.css';

const RecurringDatePicker = () => {
  // Local state
  const [recurrenceType, setRecurrenceType] = useState('Daily');
  const [customRecurrence, setCustomRecurrence] = useState(1);
  const [selectedDays, setSelectedDays] = useState([]);
  const [nthDay, setNthDay] = useState(1);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const toggleDaySelection = (day) => {
    setSelectedDays((prevSelectedDays) => {
      const selectedDaysSet = new Set(prevSelectedDays);
      if (selectedDaysSet.has(day)) {
        selectedDaysSet.delete(day);
      } else {
        selectedDaysSet.add(day);
      }
      return Array.from(selectedDaysSet);
    });
  };

  return (
    <div className='container'>
      <h2 id='container_h2'>Recurring Date Picker</h2>

      {/* Recurrence Type Selection */}
      <label id='rt'>Recurrence Type</label>
      <select
        value={recurrenceType}
        onChange={(e) => setRecurrenceType(e.target.value)}
      >
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>

      {/* Custom Recurrence */}
      {recurrenceType !== 'Daily' && (
        <div>
          <label>
            Repeat every X {recurrenceType === 'Weekly' ? 'weeks' : recurrenceType.toLowerCase()}
          </label>
          <input
            type="number"
            value={customRecurrence}
            onChange={(e) => setCustomRecurrence(parseInt(e.target.value) || 1)}
            min={1}
          />
        </div>
      )}

      {/* Weekly Recurrence: Select specific days of the week */}
      {recurrenceType === 'Weekly' && (
        <div>
          <label>Select Days of the Week</label>
          <div>
            {daysOfWeek.map((day) => (
              <label key={day}>
                <input
                  type="checkbox"
                  checked={selectedDays.includes(day)}
                  onChange={() => toggleDaySelection(day)}
                />
                {day}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Monthly Recurrence: Select nth day of the month */}
      {recurrenceType === 'Monthly' && (
        <div>
          <label>Select nth day of the month</label>
          <select
            value={nthDay}
            onChange={(e) => setNthDay(parseInt(e.target.value) || 1)}
          >
            {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default RecurringDatePicker;
