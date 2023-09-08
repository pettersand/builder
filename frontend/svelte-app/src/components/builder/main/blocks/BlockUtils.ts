export function generateBlocksAndRows(
    trainingDays: number,
    exercisesPerDay: number,
    programBlocks: number,
    sessions: number
  ) {
    const blocks = [];
    const rows = [];
    let currentRow = [];
  
    // Loop for each program block
    for (let block = 1; block <= programBlocks; block++) {
      // Add Start block with conditional label
      const startLabel = programBlocks > 1 ? `Block ${block}` : "BUILDR";
      blocks.push({ type: "Start", label: startLabel });
  
      // Add Session blocks
      for (let i = 1; i <= sessions; i++) {
        blocks.push({ type: "Session", label: `Session ${i}` });
      }
  
      // Add Day blocks
      for (let day = 1; day <= trainingDays; day++) {
        const label = trainingDays > 1 ? `Day ${day}` : "Exercise";
        blocks.push({ type: "Day", label });
  
        // Add Keys, Exercise, and CellBlock blocks
        for (let i = 0; i < sessions; i++) {
          blocks.push("Keys");
        }
        for (let exercise = 1; exercise <= exercisesPerDay; exercise++) {
          blocks.push("ExerciseName");
          for (let i = 0; i < sessions; i++) {
            blocks.push("CellBlock");
          }
        }
      }
    }
  
    // Organize blocks into rows
    for (let block of blocks) {
        if (block.type === "Start" || block.type === "Day" || block === "ExerciseName") {
          if (currentRow.length > 0) {
            rows.push([...currentRow]);
          }
          currentRow = [block];
        } else {
          currentRow.push(block);
        }
      }
    
      if (currentRow.length > 0) {
        rows.push(currentRow);
      }
    
      return { blocks, rows };
    }