import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from './api/api';

function UrlList() {
  const fetchShortenList = async () => {
    const res = await axiosInstance.get('/shortenList?query=www.google.com');
    return res.data.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['shortenList'],
    queryFn: fetchShortenList,
  });

  if (isLoading) return <h1>Loading</h1>;

  if (!data || data.length === 0) return <h1>No data</h1>;

  return (
    <div>
      {data.map((d) => {
        return (
          <p key={d.id}>
            <a href={d.url} target="_blank">
              {d.short_url}
            </a>
          </p>
        );
      })}
    </div>
  );
}

export default UrlList;
