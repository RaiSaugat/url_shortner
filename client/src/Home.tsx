import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { axiosInstance } from './api/api';
import UrlList from './UrlList';

function Home() {
  const [url, setUrl] = useState('');

  const handleUrl = async (url: string) => {
    const response = await axiosInstance.post('/shortenUrl', { url });
    return response.data;
  };

  const { mutate } = useMutation({
    mutationFn: handleUrl,
    onSuccess: () => {
      // Invalidate and refetch
    },
  });

  return (
    <div>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={() => mutate(url)}>Shorten</button>

      <UrlList />
    </div>
  );
}

export default Home;
