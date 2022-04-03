// code your solution here
function superbowlWin(record) {

   const records = record.find(({result}) => result === "W")

   if (records) {
      return records.year
      } 
}
superbowlWin(record);
superbowlWin(sadReality);