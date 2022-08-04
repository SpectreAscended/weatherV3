const useGetLocalTime = unixTime => {
  const date = new Date(unixTime * 1000);

  const hour = date.getUTCHours().toString().padStart(2, '0');
  const minute = date.getUTCMinutes().toString().padStart(2, '0');
  const output = `${hour}:${minute}`;
  return output;
};

export default useGetLocalTime;
