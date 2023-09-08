export function generateBlocksAndRows(
    trainingDays: number,
    exercisesPerDay: number,
    sessionsPerWeek: number,
    weeks: number
  ) {
    const blocks = [];
    const rows = [];
    let currentRow = [];
  
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
        blocks.push('ExerciseName');
        for (let i = 0; i < weeks * sessionsPerWeek; i++) {
          blocks.push('CellBlock');
        }
      }
    }
  
    // Organize blocks into rows
    currentRow.push(blocks[0]); // Start block is always the first
  
    for (let i = 1; i < blocks.length; i++) {
      const block = blocks[i];
  
      if (block === 'Week') {
        currentRow.push(block);
      } else {
        if (block.type === 'Day' || block === 'ExerciseName') {
          if (currentRow.length > 0) {
            rows.push([...currentRow]);
          }
          currentRow = [block];
        } else {
          currentRow.push(block);
        }
      }
    }
  
    if (currentRow.length > 0) {
      rows.push(currentRow);
    }
  
    return { blocks, rows };
  }