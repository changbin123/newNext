import useSWR from "swr";
import useSWRMutation from "swr/mutation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

async function sendRequest(url, { arg }) {
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

// get all data
const useAllData = () => {
  return useSWR(`/api/data`, fetcher);
};

const useAlertCases = () => {
  const { data, error } = useSWR(`/api/alert-cases`, fetcher);
  return {
    response: data,
    isLoading: !error && !data,
    isError: error || (data && "error" in data),
  };
};

const useSearch = (params) => {
  return useSWRMutation(
    `/api/search?${new URLSearchParams(params).toString()}`,
    fetcher
  );
};

export { useAllData, useAlertCases, useSearch };
