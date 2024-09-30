import { ArrowCircleLeft } from '@mui/icons-material';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { logo } from '../../assets';
import * as XLSX from 'xlsx';

const Attendance = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();
  
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  // Sample attendance data (You can dynamically load this as needed)
  const attendanceData = [
    { id: 1, name: "Beth Heal", number: "0554855849", weeks: [true, false, true, true, false] },
    { id: 2, name: "Bob Boby", number: "0554855849", weeks: [true, true, true, false, false] },
    { id: 3, name: "Charlie Bobby", number: "0554855849", weeks: [false, true, false, true, true] },
  ];

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const years = ["2023", "2024", "2025"];

  const handleDownload = (format) => {
    if (format === 'excel') {
      const ws = XLSX.utils.json_to_sheet(attendanceData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Attendance');
      XLSX.writeFile(wb, `Attendance_${selectedMonth}_${selectedYear}.xlsx`);
    } else if (format === 'text') {
      const textData = attendanceData.map(data => 
        `Name: ${data.name}, Number: ${data.number}, Attendance: ${data.weeks.join(', ')}`
      ).join('\n');
      const blob = new Blob([textData], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `Attendance_${selectedMonth}_${selectedYear}.txt`;
      link.click();
    }
  };

  return (
    <div className={`card ${state?.expanded ? "expanded" : ""}`}>
      <div className="relative h-full overflow-auto">
        <div className="sticky justify-between top-0 left-0 w-full h-20 flex items-center p-4 bg-white text-[#04133F] z-10">
          <button onClick={() => { navigate('/dashboard'); }}>
            <ArrowCircleLeft className="mr-2" />
          </button>
          <img src={logo} alt="logo" style={{ width: '50px', height: 'auto' }} />
          <h3 className="text-lg font-semibold">ATTENDANCE</h3>
        </div>

        <div className="bg-white h-3/4 m-10">
          <div className="flex justify-between items-center mb-4">
            {/* Month and Year dropdown */}
            <div className="flex space-x-4">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="border p-2 rounded"
              >
                {months.map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border p-2 rounded"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Overview and Download Buttons */}
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => alert('Show overview')}>Overview</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleDownload('excel')}>Download Excel</button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => handleDownload('text')}>Download Text</button>
            </div>
          </div>

          {/* Attendance Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-gray-600">
                  <th className="px-4 py-2 border-b">#</th>
                  <th className="px-4 py-2 border-b">Name</th>
                  <th className="px-4 py-2 border-b">Numbers</th>
                  <th className="px-4 py-2 border-b text-center" colSpan="5">Attendance ({selectedMonth})</th>
                </tr>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="px-4 py-2 border-b"></th>
                  <th className="px-4 py-2 border-b"></th>
                  <th className="px-4 py-2 border-b"></th>
                  <th className="px-4 py-2 border-b text-center">Week 1</th>
                  <th className="px-4 py-2 border-b text-center">Week 2</th>
                  <th className="px-4 py-2 border-b text-center">Week 3</th>
                  <th className="px-4 py-2 border-b text-center">Week 4</th>
                  <th className="px-4 py-2 border-b text-center">Week 5</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((person, index) => (
                  <tr key={person.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b">{index + 1}</td>
                    <td className="px-4 py-2 border-b">{person.name}</td>
                    <td className="px-4 py-2 border-b">{person.number}</td>
                    {person.weeks.map((week, i) => (
                      <td key={i} className="px-4 py-2 border-b text-center">
                        <input type="checkbox" className="form-checkbox" aria-label={`Week ${i + 1}`} checked={week} readOnly />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
