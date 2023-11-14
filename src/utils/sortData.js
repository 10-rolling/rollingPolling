function Popular(data) {
  const sortedData = data.sort((a, b) => b.messageCount - a.messageCount);

  return sortedData;
}

function Latest(data) {
  const sortedData = data.sort((a, b) => b.id - a.id);

  return sortedData;
}

export { Latest, Popular };
