const leaderboardItemUpToDate = (
  leaderboardItem: LeaderboardItem,
  time: number
): boolean => {
  return leaderboardItem.timestamp >= time;
};
