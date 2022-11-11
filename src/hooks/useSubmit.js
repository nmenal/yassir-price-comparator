import { useMutation } from 'react-query';
import { useAxios } from './useAxios';

export const useSubmit = (props) => {
  const axios = useAxios();

  return useMutation(
    async (values) =>
      axios.request({
        method: props?.method,
        url: props?.path,
        data: values,
        headers: {
          'content-type': 'application/json',
          Authorization: `${localStorage.getItem('token')}`,
          'if-none-match': null,
        },
      }),
    {
      onMutate: (values) => {
        console.log('🚀 ~ onMutate  --- values', values);
      },
      onSuccess: (data, values) => {
        console.log(' OnSuccess, yep ', data, values);
      },
      onError: (err) => {
        console.error('🚀 ~ useSubmit ~ err', err);
      },
    },
  );
};
