import React, { useState, useEffect } from 'react';
import { Trophy, Target, Calendar, Edit2, Check, X, StickyNote, RefreshCw, Trash2, Download, Upload, TrendingUp, ChevronDown, ChevronUp, Menu, BarChart3, CalendarDays } from 'lucide-react';

const WorldZeroTracker = () => {
  const [playerName, setPlayerName] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState(null);

Edit src/components/world-zero-tracker.tsx

The file ******/src/components/world-zero-tracker.tsx has been updated. Here's the result of running `cat -n` on a snippet of the edited file:
  const [currentSeason, setCurrentSeason] = useState(18);
  const [showSeasonModal, setShowSeasonModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [importData, setImportData] = useState('');
  const [collapsedWorlds, setCollapsedWorlds] = useState({});
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(null);

  // Get today's date string in EST (format: YYYY-MM-DD)
  const getTodayEST = () => {
    const now = new Date();

Edit src/components/world-zero-tracker.tsx

The file ******/src/components/world-zero-tracker.tsx has been updated. Here's the result of running `cat -n` on a snippet of the edited file:
      currentStreak
    };
  };

  const analytics = getAnalyticsData();

  const getSeasonStartDate = () => {
    return '2024-11-14';
  };

  const getSeasonEndDate = () => {
    const startDate = new Date('2024-11-14T17:00:00-05:00');
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 18);
    
    const year = endDate.getFullYear();
    const month = String(endDate.getMonth() + 1).padStart(2, '0');
    const day = String(endDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getAllSeasonDates = () => {
    const start = new Date('2024-11-14T17:00:00-05:00');
    const today = new Date(getTodayEST() + 'T17:00:00-05:00');
    const dates = [];
    
    const current = new Date(start);
    while (current <= today) {
      const year = current.getFullYear();
      const month = String(current.getMonth() + 1).padStart(2, '0');
      const day = String(current.getDate()).padStart(2, '0');
      dates.push(`${year}-${month}-${day}`);
      current.setDate(current.getDate() + 1);
    }
    
    return dates;
  };

  const openCalendarForDate = (date) => {
    setSelectedCalendarDate(date);
    const points = history[date] || 0;
    startEdit(date, points);
    setShowCalendar(false);
  };

  if (!currentPlayer) {
    return (
      <div className="min-h-screen bg-black p-6">

Todo updated successfully

Edit src/components/world-zero-tracker.tsx

The file ******/src/components/world-zero-tracker.tsx has been updated. Here's the result of running `cat -n` on a snippet of the edited file:
                    title="Import Data"
                  >
                    <Upload size={24} />
                  </button>
                  {recentHistory.length > 0 && (
                    <button
                      onClick={() => setShowAnalytics(!showAnalytics)}
                      className="text-gray-400 hover:text-purple-400 transition-colors p-2 hover:bg-white/5 rounded-lg"
                      title="View Analytics"
                    >
                      <BarChart3 size={24} />
                    </button>
                  )}
                  <button
                    onClick={() => setShowCalendar(true)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors p-2 hover:bg-white/5 rounded-lg"
                    title="Calendar - Backdate Points"
                  >
                    <CalendarDays size={24} />
                  </button>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl text-yellow-400 font-semibold">World // Zero Point Tracker</h2>
              <p className="text-gray-300 mt-2 text-base md:text-lg">Season {currentSeason} • Daily Goal: 300+ Points</p>
            </div>

Now I'll add the calendar modal before the closing div of the component:

Edit src/components/world-zero-tracker.tsx

The file ******/src/components/world-zero-tracker.tsx has been updated. Here's the result of running `cat -n` on a snippet of the edited file:
                <p className="text-yellow-300 text-xs">
                  <strong>Warning:</strong> Importing data may overwrite your existing data. Make sure to export a backup first if you want to preserve current data.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Calendar Modal */}
        {showCalendar && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-gray-900 rounded-xl p-6 max-w-4xl w-full border border-cyan-500/30 my-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <CalendarDays size={20} className="text-cyan-400" />
                  Season {currentSeason} Calendar - Select Date
                </h3>
                <button
                  onClick={() => setShowCalendar(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <p className="text-gray-400 text-sm mb-6">
                Season 18 started November 14th at 5 PM EST. Select any date to add or update points for that day.
              </p>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500/30 border-2 border-green-500 rounded"></div>
                    <span className="text-gray-300">Goal reached (≥300)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500/30 border-2 border-yellow-500 rounded"></div>
                    <span className="text-gray-300">Has points (&lt;300)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-700 border-2 border-gray-600 rounded"></div>
                    <span className="text-gray-300">No data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500/30 border-2 border-blue-500 rounded"></div>
                    <span className="text-gray-300">Today</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 max-h-96 overflow-y-auto">
                {getAllSeasonDates().map((date) => {
                  const points = history[date] || 0;
                  const hasData = history[date] !== undefined;
                  const isToday = date === currentDate;
                  const note = notes[date];
                  
                  let bgColor = 'bg-gray-700 border-gray-600';
                  if (isToday) {
                    bgColor = 'bg-blue-500/30 border-blue-500';
                  } else if (points >= 300) {
                    bgColor = 'bg-green-500/30 border-green-500';
                  } else if (hasData) {
                    bgColor = 'bg-yellow-500/30 border-yellow-500';
                  }
                  
                  return (
                    <button
                      key={date}
                      onClick={() => openCalendarForDate(date)}
                      className={`${bgColor} border-2 rounded-lg p-3 hover:opacity-80 transition-all text-left relative group`}
                      title={`${formatDate(date)}${hasData ? ` - ${points} pts` : ' - No data'}${note ? `\nNote: ${note}` : ''}`}
                    >
                      <div className="text-white text-xs font-semibold mb-1">
                        {new Date(date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                      {hasData && (
                        <div className="text-gray-300 text-xs font-medium">
                          {points} pts
                        </div>
                      )}
                      {!hasData && (
                        <div className="text-gray-500 text-xs">
                          No data
                        </div>
                      )}
                      {isToday && (
                        <div className="absolute top-1 right-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        </div>
                      )}
                      {note && (
                        <div className="absolute bottom-1 right-1">
                          <StickyNote size={10} className="text-gray-400" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <p className="text-cyan-300 text-xs">
                  <strong>Tip:</strong> Click on any date to add or update points for that day. This allows you to backdate entries from the start of Season 18 (November 14th).
                </p>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => setShowCalendar(false)}
                  className="w-full px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  Close Calendar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  const myPoints = calculatePoints(currentPlayer);

  return (

Todo updated successfully

Now let me enhance the Edit Points modal to clearly show which date is being edited:

Edit src/components/world-zero-tracker.tsx

The file ******/src/components/world-zero-tracker.tsx has been updated. Here's the result of running `cat -n` on a snippet of the edited file:
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        {editingDate && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 rounded-xl p-6 max-w-sm w-full border border-yellow-500/30">
              <h3 className="text-xl font-bold text-white mb-2">Edit Points</h3>
              <div className="mb-4">
                <p className="text-gray-400 text-sm">{formatDate(editingDate)}</p>
                {editingDate === currentDate ? (
                  <span className="inline-block mt-1 text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Today</span>
                ) : (
                  <span className="inline-block mt-1 text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">Past Date</span>
                )}
              </div>
              <input
                type="number"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter points"
                autoFocus
              />
              <div className="flex gap-3">
                <button
                  onClick={saveEdit}
                  className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Check size={18} />
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <X size={18} />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Note Modal */}
        {editingNote && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">

Todo updated successfully

Now let me write a summary of the changes to the results file:

Write .netlify/results.md

File created successfully at: ******/.netlify/results.md