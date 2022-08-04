const useGetTime = unixTime => {
  const date = new Date(unixTime * 1000);
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  const output = `${date.toLocaleTimeString()} - ${date.toLocaleDateString(
    'us-EN',
    options
  )} `;
  return output;
};

export default useGetTime;
