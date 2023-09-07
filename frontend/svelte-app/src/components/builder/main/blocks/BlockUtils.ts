export function generateBlocks(trainingDays: number, exercisesPerDay: number, sessionsPerWeek: number, weeks: number) {
    const blocks = [];
  
    // Add Start block
    blocks.push('Start');
  
    // Add Week blocks
    for (let i = 0; i < weeks; i++) {
      blocks.push('Week');
    }
  
    // Add Day, Keys, Exercise, and CellBlock blocks
    for (let day = 1; day <= trainingDays; day++) {
        const label = trainingDays > 1 ? `Day ${day}` : 'Exercise';
        blocks.push({ type: 'Day', label });
  
      // Add Keys blocks
      for (let i = 0; i < weeks * sessionsPerWeek; i++) {
        blocks.push('Keys');
      }
  
      // Add Exercise and CellBlock blocks
      for (let exercise = 1; exercise <= exercisesPerDay; exercise++) {
        blocks.push('Exercise');
        for (let i = 0; i < weeks * sessionsPerWeek; i++) {
          blocks.push('CellBlock');
        }
      }
    }
  
    return blocks;
  }